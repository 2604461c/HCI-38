import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native';

const ConfirmPasswordScreen = ({navigation}) => {
        return (
          <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/mega_leaves.png')}>
          <KeyboardAvoidingView
          style={styles.container}
          >
            <View style={styles.banner}>
                <Text style={styles.titles}>Confirm password to delete:</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
              placeholder = "Password"
              style={styles.input}
              />    
            </View>

           {/*back and edit buttons of the profile*/}
           <View style={styles.buttonsContainer}>
              {/*buttons themselves*/}
              <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate("AccountDeleted")}>
                <Text style={styles.buttonText}> Delete </Text>
              </TouchableOpacity>
              <View  style={{flex: 1}}>
              </View>
              <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate("Settings")}>
                <Text style={styles.buttonText}> Back </Text>
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
    titlesContainer: {
      marginBottom: 7,
      width: '80%',
    },
    
    inputContainer: {
      width: '80%',
    },   
    input: {
      color: "#553721",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    button: {
      marginTop: 20,
      backgroundColor: "#64bc94",
      borderWidth: 3,
      borderColor: '#357741',
      padding: 5,
      flex: 1,
      borderRadius: 10,
      alignItems: "center",
      elevation: 20,
    },
    buttonText: {
      color: "#553721",
      fontSize: 20,
    },
    banner: {
      backgroundColor: "#64bc94",
      width: "100%",
      paddingVertical: 10,
      marginBottom: 20,
      borderWidth: 4,
      borderColor: "#357741",
    },
    buttonsContainer:{
      width: '80%',
      alignItems: "center",
      flexDirection: 'row',
    },
    titles:{
      width: "100%",
      color: "#553721",
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center",
    },
    input: {
      backgroundColor: '#c1f7d5',
      width: "100%",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
      borderWidth: 3,
      borderColor: '#357741',
      elevation: 20,
    },
  });

export default ConfirmPasswordScreen;