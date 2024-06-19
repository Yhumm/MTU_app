import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import HomePage from "../Screen/HomePage";
import Academics from "../SchoolTab/Academics";
import Centers from "../SchoolTab/Centers";
import CBAS from "../SchoolTab/CBAS";
import CHMS from "../SchoolTab/CHMS";



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

<Stack.Screen
        name="Academics"
        component={Academics}
        options={{ title: "Academics", headerShown: true }}
      />

<Stack.Screen
        name="Centers"
        component={Centers}
        options={{ title: "Centers ", headerShown: true }}
      />

<Stack.Screen
        name="CBAS"
        component={CBAS}
        options={{ title: "College of Basic and Applied Science", headerShown: true }}
      />

<Stack.Screen
        name="CHMS"
        component={CHMS}
        options={{ title: "College of Humanities and Management Science", headerShown: true }}
      />

     
    </Stack.Navigator>
  );
};

export default AppStack;
