import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function HomepageCard({ navigation }) {
  return (
    <View style={styles.container}>
      
        <View style={styles.firstText}>
          <Text style={styles.firstTextContent}>
            Can asking questions change the world?
          </Text>
        </View>
        <View style={styles.secondText}>
          <Text style={styles.secondTextContent}>
            Is everyone truly equal under the law? Can wastewater become drinking water? 
            Is there a better way to detect cancer? Does social media make us less civil? 
            Every day, our scholars tackle global challenges, make important discoveries, 
            and create new knowledge. It all starts with a big question - one that challenges 
            the status quo, defies conventional wisdom, confronts the obvious. Because without 
            asking questions, we can't move our world forward.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainerOne}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={styles.buttonTextOne}>Apply Today</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerTwo}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={styles.buttonTextTwo}>About our programmes</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 20,
   
    borderColor: "grey",
    padding: 10,
    backgroundColor: "white", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 10, 
    marginBottom: 5
  },
  firstText: {
    paddingBottom: 5,
  },
  firstTextContent: {
    fontSize: 35,
    fontWeight: "800",
  },
  secondText: {
    paddingTop: 10,
  },
  secondTextContent: {
    fontSize: 19,
    lineHeight: 22,
    color: 'grey',
    textAlign: 'justify'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonContainerOne: {
    height: 50,
    backgroundColor: "#4FD100",
    borderColor: "#4FD100",
    borderRadius: 40,
    width: "45%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerTwo: {
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 40,
    width: "45%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextOne: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
  },
  buttonTextTwo: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 19,
  }
});
