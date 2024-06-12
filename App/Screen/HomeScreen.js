import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import SecondImage from '../Assets/Images/mtu_home_banner_001.jpg';
import HomePage from './HomePage';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Implementing the background image */}
      <ImageBackground source={SecondImage} resizeMode="cover" style={styles.image}>
        <View style={styles.body}>
          <Text style={styles.mtu}>MTU</Text>

          {/* MTU logo source */}
          <View style={styles.logoContainer}>
            <Image source={require('../Assets/Images/mtu_logo.png')} />
            {/* Text underneath the logo */}
            <Text style={styles.welcomeText}>
              Welcome To Mountain Top University
            </Text>
          </View>

          {/* The continue button */}
          <View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('HomePage')}
            >
              <Text style={styles.buttonText}>Continue</Text>
              <FontAwesome5 style={styles.icon} name="greater-than" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 50,
    backgroundColor: '#4FD100',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 140,
    borderRadius: 40,
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  icon: {
    marginRight: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mtu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: '20%',
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: '#000000c0',
    height: '100%',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 95,
  },
  welcomeText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
