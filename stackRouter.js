import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import App from "./App";
import Detail from "./screens/Detail";

const Stack = createNativeStackNavigator();

function stackRouter(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="App" component={App}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default stackRouter