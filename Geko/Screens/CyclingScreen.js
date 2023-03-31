import { StatusBar } from 'expo-status-bar';
import { Image, Alert, Button, Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import * as Location from 'expo-location';
import React, {useState, useEffect, Component} from 'react';
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapViewDirections from 'react-native-maps-directions';
import { Audio } from 'expo-av';
// the map and photo components need to have curved corners, the componenet that we need to add is in components but i haven't import and used it yet. (curvedCorcnermask)

const CyclingScreen = ({navigation}) => {
const [sound, setSound] = useState(null);
const [isPlaying, setIsPlaying] = useState(false);
const [location , setLocation]= useState(null);
const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
  'Wait, we are fetching you location...'
);

useEffect(() => {
  loadSound();

  return () => {
    if (sound) {
      sound.stopAsync();
    }
  };
}, []);

const loadSound = async () => {
  const { sound: loadedSound } = await Audio.Sound.createAsync(
    require('../assets/directions.mp3') // Replace 'your_audio_file.mp3' with the name of your MP3 file
  );
  setSound(loadedSound);
};

const toggleSound = async () => {
  if (!sound) {
    return;
  }

  if (isPlaying) {
    await sound.pauseAsync();
  } else {
    await sound.playAsync();
  }

  setIsPlaying(!isPlaying);
};

const soundIconName = isPlaying ? 'ios-volume-high-sharp' : 'ios-volume-mute-sharp';











useEffect( () => {
  CheckIfLocationEnabled();
  GetCurrentLocation();
},[]);
const GetCurrentLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    Alert.alert(
      'Permission not granted',
      'Allow the app to use location service.',
      [{ text: 'OK' }],
      { cancelable: false }
    );
  }

  let { coords } = await Location.getCurrentPositionAsync();
  
  if (coords) {
    const { latitude, longitude } = coords;
    setLocation(coords);
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude
    });

    for (let item of response) {
      let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.subregion}`;

      setDisplayCurrentAddress(address);
    }
  }
};

const CheckIfLocationEnabled = async () => {
  let enabled = await Location.hasServicesEnabledAsync();

  if (!enabled) {
    Alert.alert(
      'Location Service not enabled',
      'Please enable your location services to continue',
      [{ text: 'OK' }],
      { cancelable: false }
    );
  } else {
    setLocationServiceEnabled(enabled);
  }
};


return (
  <ImageBackground
  style={styles.backgroundImage}
  source={require('../assets/normal_leaves.png')}>
  <KeyboardAvoidingView style={styles.container}>

  <View style={styles.photoContainer}>
    <Image
      style={styles.photo}
      source={require('../assets/checkpoint_1.png')} // Replace 'your_photo.jpg' with the name of the image file you want to display
    />
  </View>
  <View style={styles.mapContainer}>
        <MapView 
          showsMyLocationButton= {true}
          showsUserLocation= {true}
          followsUserLocation= {true}
          style={styles.map}
          initialRegion= {{
            latitude: destination.latitude,
            longitude: destination.longitude,
            latitudeDelta: 0.027,
            longitudeDelta: 0.027,
          }}
        >
        <MapViewDirections
          origin= {location}
          mode="BICYCLING"
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          onStart={(params) => {
            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
          }}
          onReady={result => {
            console.log(`Distance: ${result.distance} km`)
            console.log(`Duration: ${result.duration} min.`)
          }}
          onError={(errorMessage) => {
            console.log('GOT AN ERROR');
          }
        }
        />
        </MapView>
      </View>
  <View style={styles.buttonRow}>
    <TouchableOpacity
      style={styles.stopButton}
      onPress={() => navigation.navigate("Home")}>
      <Ionicons name="ios-stop-sharp" size={40} color="#2A3439" />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.soundButton}
      onPress={toggleSound}>
      <Ionicons name={soundIconName} size={40} color="#2A3439" />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.arScreenButton}
      onPress={() => navigation.navigate("AR")}>
      <Ionicons name="camera" size={60} color="#2A3439" />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.pauseButton}
      onPress={() => navigation.navigate("RouteInProgressHome")}>
      <Ionicons name="pause" size={40} color="#2A3439" />
    </TouchableOpacity>

</View>
</KeyboardAvoidingView>
</ImageBackground>
);
}

const origin = {};
const destination = {latitude:55.841200, longitude:-4.289660 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyCjjPalVfm8ZkkvuBJvuWbgEDjELOAErXA';

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    width: "40%",
    backgroundColor: "#64bc94",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30, // adjust this value as needed
  },
  // 4 different button styles 
  soundButton: {
    marginHorizontal: 3,
    width: Dimensions.get('window').width * 0.22,
    height: Dimensions.get('window').width * 0.22,
    backgroundColor: "#64bc94",
    borderRadius: (Dimensions.get('window').width * 0.22) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#357741",
    borderWidth: 3,
  },
  pauseButton: {
    marginHorizontal: 3,
    width: Dimensions.get('window').width * 0.22,
    height: Dimensions.get('window').width * 0.22,
    backgroundColor: "#64bc94",
    borderRadius: (Dimensions.get('window').width * 0.22) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#357741",
    borderWidth: 3,
  },
  stopButton: {
    marginHorizontal: 3,
    width: Dimensions.get('window').width * 0.22,
    height: Dimensions.get('window').width * 0.22,
    backgroundColor: "#ff8a8a", //light red
    borderRadius: (Dimensions.get('window').width * 0.22) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#357741",
    borderWidth: 3,
  },
  arScreenButton: {
    marginHorizontal: 3,
    width: Dimensions.get('window').width * 0.22,
    height: Dimensions.get('window').width * 0.22,
    backgroundColor: "#64bc94",
    borderRadius: (Dimensions.get('window').width * 0.22) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#357741",
    borderWidth: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 10,
  },
  map: {
    width: Dimensions.get('window').width * 0.95,
    flex: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  mapContainer: {
    flex: 4,
    width: Dimensions.get('window').width * 0.95,
    borderRadius: 10,
  },
  photoContainer: {
    flex: 4, // Adjust this value to control the height of the photo container
    width: Dimensions.get('window').width * 0.95,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default function(props) {
  return <CyclingScreen {...props} unmountOnBlur={true} />;
}