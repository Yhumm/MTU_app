import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function SecondGradient() {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#CEA2FD", "purple"]}
        style={styles.background}
      >
        <View style={styles.containerTwo}>
          <View>
            <Text style={styles.headerText}>MTU at a glance</Text>
          </View>

          <View>
            <Text style={styles.subHeaderText}>About MTU</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.iconRow}>
              <FontAwesome5 name="graduation-cap" size={24} color="purple" />
              <Text style={styles.iconText}>Top 15 private universities in Nigeria</Text>
            </View>

            <View style={styles.iconRow}>
              <FontAwesome5 name="grin-stars" size={24} color="purple" />
              <Text style={styles.iconText}>Nigeria's most entrepreneurial university</Text>
            </View>

            <View style={styles.iconRow}>
              <FontAwesome6 name="user-group" size={24} color="purple" />
              <Text style={styles.iconText}>5000 undergraduate students</Text>
            </View>

            <View style={styles.iconRow}>
              <FontAwesome6 name="flag" size={24} color="purple" />
              <Text style={styles.iconText}>Established in 2015</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  background: {
    width: "100%",
    height: 300,
    padding: 20,
  },
  containerTwo: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: 'left',
  },
  subHeaderText: {
    fontSize: 25,
    textAlign: 'left',
    marginBottom: 20,
  },
  infoContainer: {
    justifyContent: 'space-evenly',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 20, // Add margin to align text with icons
  },
});
