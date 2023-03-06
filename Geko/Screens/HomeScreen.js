import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titlesContainer}>
          <Text style={styles.titles}>Current Session</Text>
      </View>

      <View style={styles.checkpointsContainer}>
          <Text style={styles.titles2}>45/130 checkpoints</Text>
      </View>
      
      <View style={styles.routeContainer}>
          <Text style={styles.titles}>Today's Route</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Running")}
        >
          <Text style={styles.buttonText}>Start Route</Text>
        </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  button: {
    marginTop: 20,
    width: "30%",
    backgroundColor: "#894AFF",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 20,

  },
  routeContainer:{
    backgroundColor:"#B9B9B9",
    width: "100%",
  },

  buttonContainer:{
    width: "30%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  titles:{
    color: "white",
    fontSize: 36,
  },
  titles2:{
    color: "white",
    fontSize: 24,
  },
  titlesContainer:{
    color: "gray",
    width: "100%",
    padding: 10,
  }
});

export default HomeScreen;