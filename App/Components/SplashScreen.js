// SplashScreen.js
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, zIndex: 1 }}>

        <Image source={require("../Assets/Images/download.png")} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    zIndex: 1,
  },

  appName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  slogan: {
    fontSize: 20,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default SplashScreen;