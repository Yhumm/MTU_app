import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function About() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../Assets/Images/mtu_home_banner_001.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.body}>
          <View>
            <Text style={styles.firstText}>About Mountain Top University</Text>
          </View>
          <View>
            <Text style={styles.secondText}>
              Discover what makes us unique - where we came from, where we're heading, why we do the things we do, and the places that enable us do what we do.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000000c0',
    height: "100%",
    paddingTop: "30%",
    paddingHorizontal: '10%',
    paddingBottom: '2%',
    borderRadius: 20,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    
    margin: 5
  },
  firstText: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: '500',
    paddingBottom: 15,
    textAlign: 'center'
  },
  secondText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center'
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
