import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate("UIChoice")
  }

  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/mega_leaves.png')}>
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.banner}>
          <Text style={styles.titles}>Sign Up</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={username}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={username}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter confirm password"
          value={username}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up!</Text>
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
  inputContainer: {
    width: "80%",
    marginTop: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 20,
  },
  input: {
    backgroundColor: '#c1f7d5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#357741'
  },
  button: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#64bc94",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    elevation: 20,
    borderWidth:3,
    borderColor: '#357741',
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  }
  ,
  buttonContainer:{
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  titles: {
    color: "#553721",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  banner: {
    marginBottom: 25,
    backgroundColor: "#64bc94",
    width: "100%",
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: "#357741",
    
  },
});

export default SignUpScreen;