import { StatusBar } from 'expo-status-bar';
import { Image, Alert, Button, Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import * as Location from 'expo-location';
import React, {useState, useEffect, Component} from 'react';
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapViewDirections from 'react-native-maps-directions';
import { Audio } from 'expo-av';


const RunningScreen = ({navigation}) => {
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
  <View style={styles.buttonContainer}>
  <View style={styles.buttonRow}>
    <TouchableOpacity
      style={styles.soundButton}
      onPress={toggleSound}>
      <Ionicons name={soundIconName} size={40} color="#2A3439" />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.pauseButton}
      onPress={() => navigation.navigate("RouteInProgressHome")}>
      <Ionicons name="pause" size={40} color="#2A3439" />
    </TouchableOpacity>
  </View>
  <View style={styles.buttonRow}>
    <TouchableOpacity
      style={styles.stopButton}
      onPress={() => navigation.navigate("Home")}>
      <Ionicons name="ios-stop-sharp" size={40} color="#2A3439" />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.arScreenButton}
      onPress={() => navigation.navigate("AR")}>
      <Ionicons name="camera" size={60} color="#2A3439" />
    </TouchableOpacity>
  </View>
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
  buttonContainer: {
    width: "90%",
    alignItems: "flex-end",
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
  },
  // 4 different button styles 
  soundButton: {
    marginTop: 10,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: "#64bc94",
    borderRadius: (Dimensions.get('window').width * 0.2) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#357741",
    borderWidth: 3,
  },
  pauseButton: {
    marginTop: 0,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: "#64bc94",
    borderRadius: (Dimensions.get('window').width * 0.2) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#357741",
    borderWidth: 3,
  },
  stopButton: {
    marginTop: 30,
    marginLeft: -30,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: "#ff8a8a", //light red
    borderRadius: (Dimensions.get('window').width * 0.2) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#357741",
    borderWidth: 3,
  },
  arScreenButton: {
    marginTop: 10,
    width: Dimensions.get('window').width * 0.33,
    height: Dimensions.get('window').width * 0.33,
    backgroundColor: "#64bc94",
    borderRadius: (Dimensions.get('window').width * 0.33) / 2,
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
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 2 / 3,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default RunningScreen;