import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Linking
  } from "react-native";
  import React from "react";
  import { FontAwesome } from "@expo/vector-icons";
  
  export default function Centers() {
    return (
      <ScrollView style={styles.mainContainer}>
        {[
          {
            title: "Center for Continuing Education",
            description: "The center for Continuing Education, Mountain Top University",
            url: "https://ewallet.mtu.edu.ng/"
          },
          {
            title: "Center for Gender Studies",
            description: "The center for Gender Studies, Mountain Top University",
            url: "https://ewallet.mtu.edu.ng/"
          },
          {
            title: "Center for ICT",
            description: "The center for Information and Communication Technology, Mountain Top University",
            url: "https://ewallet.mtu.edu.ng/"
          },
          {
            title: "Every Student a Musician",
            description: "The Every Student a Musician (ESM) unit, Mountain Top University",
            url: "https://ewallet.mtu.edu.ng/"
          },
          {
            title: "SIWES center",
            description: "The center for Students' Industrial Work Experience Scheme, Mountain Top University",
            url: "https://ewallet.mtu.edu.ng/"
          }
        ].map((center, index) => (
          <View key={index} style={styles.container}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => Linking.openURL(center.url)}
            >
              <View style={styles.textContent}>
                <Text style={styles.firstTextContent}>{center.title}</Text>
                <Text style={styles.secondTextContent}>{center.description}</Text>
              </View>
              <FontAwesome name="external-link" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 10,
    },
    container: {
      marginTop: 10,
      borderRadius: 10,
      borderColor: "grey",
      padding: 15,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    textContent: {
      flex: 1,
      marginRight: 10,
    },
    firstTextContent: {
      color: "#000000",
      fontWeight: "bold",
      fontSize: 16,
    },
    secondTextContent: {
      color: "grey",
      marginTop: 5,
      fontSize: 14,
    },
    icon: {
      marginLeft: 10,
    },
  });

  