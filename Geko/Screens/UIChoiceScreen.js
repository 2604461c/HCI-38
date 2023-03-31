import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { ExerciseModeContext } from '../contexts/ExerciseModeContext';

const UIChoiceScreen = ({navigation}) => {
  const { setExerciseMode } = React.useContext(ExerciseModeContext);
  const [UI, setUI] = React.useState("");
  const [intentsity, setIntensity] = React.useState("");

  const data_UI = [
    {key:'1', value:'running'},
    {key:'2', value:'walking'},
    {key:'3', value:'cycling'},
  ]

  
  const data_Intensity = [
    {key:'1', value:'Low'},
    {key:'2', value:'Median'},
    {key:'3', value:'High'},
  ]

  const Submit = () => {
    setExerciseMode(UI);
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/mega_leaves.png')}>
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.banner}>
      <View style={styles.titlesContainer}>
          <Text style={styles.titles}>How will you be completing you're courses?</Text>
      </View>
      </View>

      <View style={styles.dropDownBox}>
      <SelectList
        setSelected={(val) => setUI(val)} 
        data={data_UI} 
        save="value"
      />
      </View>
     
      <View style={styles.banner}>
      <View style={styles.titlesContainer}>
          <Text style={styles.titles}>Select the intentsity level</Text>
      </View>
      </View>

      <View style={styles.dropDownBox}>
      <SelectList
        setSelected={(val) => setIntensity(val)} 
        data={data_Intensity} 
        save="value"
      />
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={Submit}
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
    borderWidth: 3,
    borderColor: "#357741",
    elevation: 10,
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
  titles: {
    color: "#553721",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  titlesContainer:{
    marginHorizontal: 10,
    marginVertical: 5,
  },
  dropDownBox: {
    backgroundColor: '#c1f7d5',
    width: "80%",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#357741',
    elevation: 20,
  },
  banner: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "#64bc94",
    width: "100%",
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: "#357741",
  },
});

export default UIChoiceScreen;