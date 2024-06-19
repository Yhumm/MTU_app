import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Linking
  } from "react-native";
  import React from "react";
  import { FontAwesome } from '@expo/vector-icons';
  import { LinearGradient } from "expo-linear-gradient";
  
  export default function Academics({ navigation }) {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0.5 }}
              colors={["#4FD100", "#008900"]}
              style={styles.linearGradient}
            >
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('CBAS')}
              >
                <FontAwesome name="university" size={30} color="white" />
                <Text style={styles.buttonText}>
                  College of Basic and Applied Science
                </Text>
              </TouchableOpacity>
            </LinearGradient>
  
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0.5 }}
              colors={["#4FD100", "#008900"]}
              style={styles.linearGradient}
            >
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('CHMS')}
              >
                <FontAwesome name="university" size={30} color="white" />
                <Text style={styles.buttonText}>
                  College of Humanities and Management Science
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
  
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            colors={["#4FD100", "#008900"]}
            style={styles.linearGradient}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() =>
                Linking.openURL(
                  "https://staffportal.mtu.edu.ng/(S(21qw3ftydtbhtwpju1lzjzy2))/StaffLoginPage.aspx"
                )
              }
            >
              <FontAwesome name="university" size={30} color="white" />
              <Text style={styles.buttonText}>
                School of PostGraduate Studies
              </Text>
            </TouchableOpacity>
          </LinearGradient>
  
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginHorizontal: 10,
      marginVertical: 20
     
     
      
      
    },
    innerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    linearGradient: {
      flex: 1,
      borderRadius: 10,
      height: 150, // Changed from '400' to '150' for a fixed height
      marginHorizontal: 5, // Added for consistent margin
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      borderRadius: 10,
      padding: 10, // Added padding for better spacing
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center', // Added for centering the text
      marginTop: 10, // Added margin to separate text from icon
    },
  });
  