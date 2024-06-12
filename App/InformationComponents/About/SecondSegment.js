import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from '@rneui/themed';



export default function SecondSegment() {
  const Boxes = () => {
    return (
      <View style={styles.boxContainer}>
        <View style={styles.boxInnerOne}>
          <View style={styles.box}>
            <View style={styles.innerBox}>
              <FontAwesome5 name="lightbulb" size={24} color="black" />
              <Text style={styles.firstText}>2015</Text>

              <Text style={styles.secondText}>Year Founded</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.innerBox}>
              <Feather name="book-open" size={24} color="black" />
              <Text style={styles.firstText}>20</Text>

              <Text style={styles.secondText}>Departments</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxInnerTwo}>
          <View style={styles.box}>
            <View style={styles.innerBox}>
              <FontAwesome6 name="people-line" size={24} color="black" />
              <Text style={styles.firstText}>2000+</Text>

              <Text style={styles.secondText}>Students</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.innerBox}>
              <FontAwesome name="university" size={24} color="black" />
              <Text style={styles.firstText}>2</Text>

              <Text style={styles.secondText}>Colleges</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <View >
        <Text style={styles.header}>We produce World-Class Students</Text>
      </View>

      <View >
        <Text style={styles.body}>
          Mountain Top University (MTU) is an institution of higher learning
          dedicated to the all-round development of man. It was established by
          divine ordinance in 2015 and commenced operation same year. The
          university is on a mission to be the best not only in Nigeria but the
          world at large.
        </Text>
      </View>

      <View>
        <Boxes />
      </View>
      <View>
      <Divider />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 5,
   
    height: '100%'
  },
  header: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: 'center',
   
  },
  body: {
    fontSize: 15,
    fontWeight: "300",
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 20
  },
  boxContainer: {
    width: "80%",
    height: '100%',
    padding: 10,
    flexDirection: "column",
   marginHorizontal: 50,
   marginTop: 20
  },
  boxInnerOne: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-between'
  },
  boxInnerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  box: {
    width: "40%",
    height: "100%",
    padding: 10,
    backgroundColor: "#4FD100",
    borderRadius: 10,
  },
  innerBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  firstText: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "800",
  },
  secondText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "400",
  },
});
