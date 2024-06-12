import React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";

export default function FourthSegment() {
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require("../../Assets/Images/mtu_home_banner_001.jpg")}
        resizeMode="cover"
        style={styles.image}
      >

        <View style={styles.innerContainer}>
        <View >
          <Text style={styles.firstText}>Our Programmes</Text>
        </View>

        <View style={styles.secondTextContainer}>
          <Text style={styles.secondText}>
            Our University offers different programmes, in several field stations
            and unique facilities, each with its own distinctive purpose, setting
            and character.
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>View our Programmes</Text>
        </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
    marginTop: 20,
    height: 300,
     backgroundColor: '#000000c0'
  },
  innerContainer: {
    backgroundColor: '#000000c0',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
  },
  firstText: {
    fontSize: 35,
    fontWeight: '700',
    width: "60%",
    color: "#ffffff",
    marginBottom: 25
  },
  secondText: {
    fontSize: 18, // Slightly increased for better readability
    fontWeight: '400',
   textAlign: 'center',
    color: "#ffffff",
    marginBottom: 25
  },
  secondTextContainer: {
    width: '55%',
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: 'center',
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#4FD100",
    justifyContent: "center",
    alignItems: "center",
    alignContent: 'center',
    borderRadius: 40,
    width: "40%",
    paddingHorizontal: 20, // Added padding for better text placement
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
