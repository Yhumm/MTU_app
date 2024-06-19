import "react-native-gesture-handler";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

const SchoolScreen = ({ navigation }) => {
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
              onPress={() => navigation.navigate('Academics')}
            >
              <Entypo name="open-book" size={24} color="black" />
              <Text style={styles.buttonText}>Academics</Text>
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
              onPress={() => Linking.openURL("https://ewallet.mtu.edu.ng/")}
            >
              <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="black" />
              <Text style={styles.buttonText}>Admissions</Text>
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
              onPress={() => navigation.navigate('Centers')}
            >
              <MaterialIcons name="place" size={24} color="black" />
              <Text style={styles.buttonText}>Center and Units</Text>
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
              onPress={() => Linking.openURL("https://ewallet.mtu.edu.ng/")}
            >
              <Ionicons name="library-outline" size={24} color="black" />
              <Text style={styles.buttonText}>Library</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  fullWidthButtonContainer: {
    width: '100%',
    marginBottom: 20,
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
    margin: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default SchoolScreen;
