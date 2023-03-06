import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Alert, Button, Dimensions, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import * as Location from 'expo-location';
import React, {useState, useEffect, Component} from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';



const RunningScreen = ({navigation}) => {
  return (
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

      <Button onPress={() => Alert.alert('Simple Button pressed')} 
      title="OK!" color="#fffff"/>
  </KeyboardAvoidingView>
    // <KeyboardAvoidingView
    // style={styles.container}
    // >
    //   <View style={styles.titlesContainer}>
    //       <Text style={styles.titles}>Running Screen!</Text>
    //   </View>
     
    //   <View style={styles.buttonContainer}>
    //   <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => navigation.navigate("AR")}
    //   >
    //     <Text style={styles.buttonText}>AR view</Text>
    //   </TouchableOpacity>
    //   </View>
     
     
      // <View style={styles.buttonContainer}>
      // <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => navigation.navigate("Home")}
      // >
      //   <Text style={styles.buttonText}>End Route</Text>
      // </TouchableOpacity>

    //   </View>

    // </KeyboardAvoidingView>
  );
}

const origin = {};
const destination = {latitude:55.841200, longitude:-4.289660 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyCjjPalVfm8ZkkvuBJvuWbgEDjELOAErXA';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
  },
  button: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#9BD9F4",
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