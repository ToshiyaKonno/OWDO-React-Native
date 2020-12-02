import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// react navigation ライブラリ
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import "react-native-gesture-handler";                          

import Main from "./src/Main";      
import promise from "./src/promise";      
import CheckList from './src/CheckList';
import lifeHack from './src/lifeHack';
import Contact from './src/Contact';
const Stack = createStackNavigator<RootStackParamList>();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="promise" component={promise} />
        <Stack.Screen name="CheckList" component={CheckList} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="lifeHack" component={lifeHack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

