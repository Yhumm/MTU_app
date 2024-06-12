import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import gradient from "../Assets/Images/firstgradient.png";

export default function HomePageGradent() {
  return (
    <View style={styles.linearGradient}>
      <ImageBackground source={gradient} style={styles.image}>
        <View style={styles.textBox}>
          <View style={styles.firstText}>
            <Text
              style={{
                fontSize: 40,
                paddingLeft: 30,
                color: "white",
                fontWeight: 400,
              }}
            >
              What does it take to make a 
              <Text style={{ fontWeight: 700 }}> great</Text> university?
            </Text>
          </View>

          <View style={styles.secondText}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: 300 }}>
              We're on a mission to provide an exceptional student experience
              and committed to support world-class facility
            </Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("SchoolSCreen") }
            >
              <Text style={styles.buttonText}> Learn More </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
  linearGradient: {
    flex: 1,
    height: 400,
    width: "100%",
    marginTop: 10,
  },
  textBox: {
    flex: 1,
    justifyContent: "left",
    marginTop: 55,
  },
  firstText: {
    paddingBottom: 20,
    width: "85%",
  },
  secondText: {
    paddingLeft: 30,

    width: "65%",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 40,
    width: "30%",
    borderWidth: 2,
    margin: 15,
    marginLeft: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "medium",
    marginLeft: 20,
  },
});
