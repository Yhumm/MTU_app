import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function SegmentOne() {
  return (
    <View>
      <View style={styles.firstContainer}>
        <LinearGradient
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 0.5 }}
          colors={["#4FD100", "#008900"]}
          style={styles.linearGradient}
        >
         <View style={styles.innerContainer}>
         <View>
            <Text style={styles.buttonText}>Stay Connected</Text>
          </View>

          <View style={styles.secondTextBox}>
            <Text style={styles.secondText}>
              Join us on social media, update your contact information or just
              say hello - we'd love to hear from you!
            </Text>
          </View>
         </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
    fontWeight: '500',
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  firstContainer: {
    flex: 1,
    height: 250,
    marginHorizontal: 10,
    marginTop: 20
  },
  secondText: {
    color: '#fff',
    textAlign: 'center'
  },
  secondTextBox: {
    width: '40%',
   
  }
});
