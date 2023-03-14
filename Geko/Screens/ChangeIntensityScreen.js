import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const ChangeUIScreen = ({navigation}) => {

  const [selected, setSelected] = React.useState("");

  const data = [
    {key:'1', value:'High', disabled:true},
    {key:'2', value:'Medium'},
    {key:'3', value:'Low'},
  ]

  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/mega_leaves.png')}>
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titlesContainer}>
          <Text style={styles.titles}>Select the level of intensity: </Text>
      </View>

    <View style={styles.dropDownBox}>
    <SelectList
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
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
    marginTop: 10,
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
  titlesContainer:{
    width: '80%',
  },
  dropDownBox:{
    marginTop: 10,
    width: '80%',
  }
});

export default ChangeUIScreen;