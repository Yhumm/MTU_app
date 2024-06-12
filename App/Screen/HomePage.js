import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePageDashboard from "../BottomTabs/HomePageDashboard";
import InformationScreen from "../BottomTabs/InformationScreen";
import NewsScreen from "../BottomTabs/NewsScreen";
import PortalsScreen from "../BottomTabs/PortalsScreen";
import SchoolScreen from "../BottomTabs/SchoolScreen";

const Tab = createBottomTabNavigator();

export default function HomePage() {
    return (
       
            <Tab.Navigator 
                initialRouteName="HomePageDashboard"
                screenOptions={{
                    tabBarActiveTintColor: 'purple',
                    tabBarInactiveTintColor: '#fff',
                    tabBarStyle: { backgroundColor: '#4FD100', padding: 10, height: 60 },
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', paddingBottom: 6 },
                    tabBarHideOnKeyboard: true,
                    headerStyle: { backgroundColor: '#4FD100' },
                    headerTitleStyle: { color: '#fff', fontSize: 25, fontWeight: '300', justifyContent: 'center' }
                }}
                backBehavior="initialRoute"
            >
                <Tab.Screen 
                    name="Dashboard" 
                    component={HomePageDashboard} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" color={color} size={size} />
                        ),
                        tabBarLabel: 'Home'
                    }} 
                />
                <Tab.Screen 
                    name="School" 
                    component={SchoolScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="school-sharp" color={color} size={size} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="MTU News" 
                    component={NewsScreen} 
                    options={{
                        tabBarBadge: 6,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="newspaper-outline" color={color} size={size} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Portals" 
                    component={PortalsScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="clipboard-outline" color={color} size={size} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Information" 
                    component={InformationScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="list-outline" color={color} size={size} />
                        )
                    }} 
                />
            </Tab.Navigator>
        
    );
}
