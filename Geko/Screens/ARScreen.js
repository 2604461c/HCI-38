import React, { useContext, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,Dimensions, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground, SafeAreaView } from 'react-native';
import { ExerciseModeContext } from '../contexts/ExerciseModeContext';
import { Camera } from 'expo-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';


const ARScreen = ({navigation}) => {

  const {exerciseMode} = useContext(ExerciseModeContext);
  const [hasPermission, setHasPermission] = useState(null);

  const backButton = () => {
    switch (exerciseMode) {
      case 'cycling':
        navigation.navigate('Cycling');
        break;
      case 'running':
        navigation.navigate('Running');
        break;
      case 'walking':
      default:
        navigation.navigate('Walking');
        break;
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={backButton}
        >
          <AntDesign name="back" size={40} color="#2A3439" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    marginRight: 10,
    marginBottom: 40,
    width: Dimensions.get('window').width * 0.33,
    height: Dimensions.get('window').width * 0.33,
    backgroundColor: "#64bc94",
    borderRadius: (Dimensions.get('window').width * 0.33) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#357741",
    borderWidth: 3,
  },
  buttonText: {
    color: "#553721",
    fontSize: 20,
  },
});

export default ARScreen;