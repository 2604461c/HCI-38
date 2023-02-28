import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titlesContainer}>
          <Text style={styles.titles}>Settings!</Text>
      </View>
     
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChangePassword")}
      >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ConfirmPassword")}
      >
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      </View>


      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChangeUI")}
      >
        <Text style={styles.buttonText}>Change UI</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChangeIntensity")}
      >
        <Text style={styles.buttonText}>Change Intensity</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default SettingsScreen;