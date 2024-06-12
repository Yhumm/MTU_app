import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import HomePage from "../Screen/HomePage";



const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      {/*homescreen*/}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Homescreen", headerShown: false }}
      />

      {/*Home Page / Dashboard*/}
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "Dashboard", headerShown: false }}
      />

     
    </Stack.Navigator>
  );
};

export default AppStack;
