import React from "react";
import { Linking, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function PortalsScreen() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
      <View style={styles.fullWidthButtonContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            colors={["#4FD100", "#008900"]}
            style={styles.linearGradient}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => Linking.openURL("https://studentportal.mtu.edu.ng/")}
            >
              <FontAwesome5 name="user-graduate" size={24} color="black" />
              <Text style={styles.buttonText}>Student Portal</Text>
            </TouchableOpacity>
          </LinearGradient>
          </View>

          <View style={styles.fullWidthButtonContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            colors={["#CEA2FD", "purple"]}
            style={styles.linearGradient}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => Linking.openURL("https://staffportal.mtu.edu.ng/(S(21qw3ftydtbhtwpju1lzjzy2))/StaffLoginPage.aspx")}
            >
              <FontAwesome5 name="chalkboard-teacher" size={24} color="black" />
              <Text style={styles.buttonText}>Staff Portal</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.fullWidthButtonContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            colors={["#4FD100", "#008900"]}
            style={styles.linearGradient}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => Linking.openURL("http://127.0.0.1:5000/")}
            >
              <Ionicons name="exit" size={24} color="black" />
              <Text style={styles.buttonText}>Exeat System</Text>
            </TouchableOpacity>
          </LinearGradient>
          </View>

        <View style={styles.fullWidthButtonContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            colors={["#CEA2FD", "purple"]}
            style={styles.linearGradient}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => Linking.openURL("https://alumniportal.mtu.edu.ng/")}
            >
              <FontAwesome6 name="people-group" size={24} color="black" />
              <Text style={styles.buttonText}>Alumni Portal</Text>
            </TouchableOpacity>
          </LinearGradient>
          </View>

        
        <View style={styles.fullWidthButtonContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            colors={["#4FD100", "#008900"]}
            style={styles.linearGradient}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => Linking.openURL("https://nairaly.vercel.app/")}
            >
              <FontAwesome5 name="wallet" size={24} color="black" />
              <Text style={styles.buttonText}>E-Wallet</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  fullWidthButtonContainer: {
    width: '100%',
    marginBottom: 20, // Add margin at the bottom
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginHorizontal: 5,
    borderRadius: 10,
    margin: 15, // Add margin to create space between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
