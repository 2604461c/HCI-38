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
            <View style={styles.titlesContainer}>
                <Text style={styles.titles}>Confirm password to delete account: </Text>
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
      padding: 5,
      borderRadius: 10,
      alignItems: "center",
    },

    buttonText: {
      color: "#553721",
      fontSize: 20,

    }
    ,
    buttonsContainer:{
      width: '80%',
      alignItems: "center",
      flexDirection: 'row',

    },
    titles:{
      color: "#553721",
      fontSize: 30,
    },
  });

export default ConfirmPasswordScreen;