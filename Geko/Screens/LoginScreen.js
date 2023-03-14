import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

//details page where the user enters their personal details.
//DOB field is just text input rather than date selector

const LoginScreen = ({navigation}) =>{

        return (
          <ImageBackground
              style={styles.backgroundImage}
              source={require('../assets/background_login.png')}
            >
          <KeyboardAvoidingView
          style={styles.container}
          >
        
            <View style={styles.inputContainer}>
              <TextInput
              placeholder = "Your Email"
              style={styles.input}
              />
              <TextInput
              placeholder = "Your Password"
              secureTextEntry
              style={styles.input}
              />
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
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
    titleContainer: {
      marginBottom: 25,
    },
    title: {
      color: "#553721",
      fontSize: 30,
    },
    inputContainer: {
      width: '80%',
      marginTop: 30,
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    buttonContainer:{
      marginTop: 15,
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: "80%",
      height: 40,
      backgroundColor: "#64bc94",
      padding: 5,
      borderRadius: 10,
      margin: 5,
      alignItems: "center",
    },
    buttonText: {
      padding: "1%",
      color: "#553721",
      fontSize: 20,
    },
  });

  export default LoginScreen;