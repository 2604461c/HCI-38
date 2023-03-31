import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/mega_leaves.png')}>
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Settings</Text>
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
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#357741",
    elevation: 20,
  },
  buttonText: {
    color: "#553721",
    fontSize: 20,
  },
  buttonContainer:{
    width: "80%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  banner: {
    backgroundColor: "#64bc94",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#357741",
  },
  bannerText: {
    color: "#553721",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default SettingsScreen;