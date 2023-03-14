import { StatusBar } from 'expo-status-bar';
import { Image, Alert, Button, Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import * as Location from 'expo-location';
import React, {useState, useEffect, Component} from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const RunningScreen = ({navigation}) => {

  const [location , setLocation]= useState(null);
const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
  'Wait, we are fetching you location...'
);

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
      <View style={styles.titlesContainer}>
        <Text style={styles.titles}>Running Screen!</Text>
      </View>
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
      <Text style={styles.text}>{displayCurrentAddress}, </Text>
      <View style={styles.buttonContainer}>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AR")}>
          <Text style={styles.buttonText}>AR view</Text>
          </TouchableOpacity>
      </View>

      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>End Route</Text>
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
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#64bc94",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontSize: 20,

  }
  ,
  buttonContainer:{
    width: "80%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  titles:{
    color: 'grey',
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff'
  },
  map: {
    width: Dimensions.get('window').width/1.1,
    height: Dimensions.get('window').height/1.5,
  },
});

export default RunningScreen;