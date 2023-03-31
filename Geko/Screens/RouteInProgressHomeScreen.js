import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, ImageBackground, SafeAreaView, ScrollView, FlatList, Image } from 'react-native';
import { ExerciseModeContext } from '../contexts/ExerciseModeContext';

const dummyData = [
  {
    id: '8',
    title: 'Run 8',
    map: 'Map1',
    distance: '5.2 km',
    time: '35 min',
    mapImage: require('../assets/prev_runs/run_1_route.png'),
  },
  {
    id: '7',
    title: 'Run 7',
    map: 'Map2',
    distance: '7.4 km',
    time: '48 min',
    mapImage: require('../assets/prev_runs/run_7_route.png'),
  },
  {
    id: '6',
    title: 'Run 6',
    map: 'Map1',
    distance: '5.2 km',
    time: '35 min',
    mapImage: require('../assets/prev_runs/run_6_route.png'),
  },
  {
    id: '5',
    title: 'Run 5',
    map: 'Map2',
    distance: '7.4 km',
    time: '48 min',
    mapImage: require('../assets/prev_runs/run_5_route.png'),
  },
  {
    id: '4',
    title: 'Run 4',
    map: 'Map1',
    distance: '5.2 km',
    time: '35 min',
    mapImage: require('../assets/prev_runs/run_4_route.png'),
  },
  {
    id: '3',
    title: 'Run 3',
    map: 'Map2',
    distance: '7.4 km',
    time: '48 min',
    mapImage: require('../assets/prev_runs/run_3_route.png'),
  },
  {
    id: '2',
    title: 'Run 2',
    map: 'Map1',
    distance: '5.2 km',
    time: '35 min',
    mapImage: require('../assets/prev_runs/run_2_route.png'),
  },
  {
    id: '1',
    title: 'Run 1',
    map: 'Map2',
    distance: '7.4 km',
    time: '48 min',
    mapImage: require('../assets/prev_runs/run_1_route.png'),
  },
  // Add more dummy data objects as needed
];

const RouteInProgressHomeScreen = ({ navigation }) => {

  const {exerciseMode} = useContext(ExerciseModeContext);

  const startRoute = () => {
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

  const renderItem = ({ item }) => {
    return (
      <View style={styles.post}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Image source={item.mapImage} style={styles.mapImage} />
        <Text style={styles.postDetails}>{item.distance} | {item.time}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.todaysRoutebutton}
            onPress={startRoute}
          >
            <Text style={styles.buttonText}> Continue with route! </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Please Stop your current route session before accessing settings!')} style={styles.settingsButton}>
          <Ionicons name="settings" size={40} color="#2A3439" style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
      <ImageBackground style={styles.backgroundImage} source={require('../assets/normal_leaves.png')}>
        <FlatList
          style={styles.content}
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#64bc94',
    height: '12%',
    borderWidth: 3,
    borderColor: "#357741",
  },
  settingsButton: {
    position: 'absolute',
    right: 24,
    top: 38,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#64bc94",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    alignContent: "center",
    color: "#565656",
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
    alignContent: "center",
  },
  titles: {
    color: "#553721",
    fontSize: 40,
  },
  todaysRoutebutton: {
    backgroundColor: "#C0C0C2", // with the plan this would be amber if the route was in progress and green if the route is complete
    padding: 10,
    borderRadius: 10,
    width: "82%",
    elevation: 20,
    marginTop: 10,
    alignContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#828385",
  },
  post: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postMap: {
    fontSize: 16,
    marginBottom: 5,
  },
  postDetails: {
    fontSize: 14,
    color: '#777',
  },
  mapImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 5,
  },
});
export default RouteInProgressHomeScreen;