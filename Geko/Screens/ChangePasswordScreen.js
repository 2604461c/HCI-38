import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ConfirmPasswordScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/mega_leaves.png')}
    >
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.titles}>Change Password</Text>
        </View>

        <View style={[styles.formContainer, styles.form]}>
          <TextInput
            placeholder="Password"
            style={styles.input}
          />
          <TextInput
            placeholder="New Password"
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm New Password"
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PasswordChanged")}
          >
            <Text style={styles.buttonText}> Change </Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.buttonText}> Back </Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  formContainer: {
    width: '80%',
    alignItems: "center",
  },
  form: {
    alignItems: "center",
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
  buttonContainer: {
    paddingTop: 5,
    width: "80%",
    flexDirection: 'row',
    alignItems: "center",
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
});

export default ConfirmPasswordScreen;