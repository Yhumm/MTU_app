import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/base";

export default function ThirdSegment({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.segmentOne}>
        <View>
          <Text style={styles.titleTextOne}>Our Vision</Text>
        </View>

        <View>
          <Text style={styles.bodyTextOne}>
            The Mountain Top University is envisioned as a dynamic center of
            academic excellence in the liberal tradition of excellence for the
            production of top-rated, morally sound graduates of distinction who
            will be globally competitive for outstanding impact on Nigerian
            society and global development.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonContainerOne}
          onPress={() => navigation.navigate("VisionScreen")} // Change 'VisionScreen' to the appropriate screen name
        >
          <Text style={styles.buttonText}>View our Vision</Text>
        </TouchableOpacity>
      </View>

      <Divider style={{ backgroundColor: '#fff' }} />

      <View style={styles.segmentTwo}>
        <View>
          <Text style={styles.titleTextTwo}>Our Mission</Text>
        </View>

        <View>
          <Text style={styles.bodyTextTwo}>
            The mission of Mountain Top University is the provision of excellent
            facilities for the training of men and women in various academic,
            professional, and vocational disciplines in an atmosphere that will
            enhance the simultaneous development of their spiritual, mental, and
            physical faculties.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => navigation.navigate("MissionScreen")} // Change 'MissionScreen' to the appropriate screen name
        >
          <Text style={styles.buttonText}>View our Mission</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4FD100",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  segmentOne: {
    flex: 1,
    marginBottom: 20,
   width: '85%',
    borderColor: "#fff",
   
  },
  segmentTwo: {
    flex: 1,
    marginBottom: 20,
    padding: 20,
    borderColor: "#fff",
    width: '85%',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'flex-end',
    marginLeft: 25
  },
  titleTextOne: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: 'left'
  },
  titleTextTwo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign:'right'
  },
  bodyTextOne: {
    fontSize: 16,
    fontWeight: "300",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: 'left'
  },
  bodyTextTwo: {
    fontSize: 16,
    fontWeight: "300",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: 'right'
  },
  buttonContainerOne: {
    height: 50,
    backgroundColor: "#4FD100",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  buttonContainerTwo: {
    height: 50,
    backgroundColor: "#4FD100",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'flex-end',
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
