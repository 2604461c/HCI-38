import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';

const CyclingScreen = ({navigation}) => {
  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/normal_leaves.png')}>
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titlesContainer}>
          <Text style={styles.titles}>Cycling Screen</Text>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AR")}
      >
        <Text style={styles.buttonText}>AR view</Text>
      </TouchableOpacity>
      </View>
     
     
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Exit Route</Text>
      </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    </ImageBackground>
  );
}

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
    color: "#553721",
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
    color: "#553721",
    fontSize: 30,
  },
});

export default CyclingScreen;