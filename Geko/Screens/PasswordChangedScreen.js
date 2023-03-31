import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';

const PasswordChangedScreen = ({navigation}) => {
  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/mega_leaves.png')}>
    <KeyboardAvoidingView
    style={styles.container}
    >
        <View style={styles.banner}>
          <Text style={styles.titles}>Password Changed! </Text>
        </View>
     
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>Done</Text>
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
    borderColor: "#357741",
    borderWidth: 3,
    elevation: 20,
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
  banner: {
    marginBottom: 25,
    backgroundColor: "#64bc94",
    width: "100%",
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: "#357741",
  },
  titles: {
    color: "#553721",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PasswordChangedScreen;