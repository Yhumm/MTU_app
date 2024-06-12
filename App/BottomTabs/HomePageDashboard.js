import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Linking } from 'react-native';
import CardOne from "../Cards/CardOne";
import HomepageCard from "../Cards/HomepageCard";
import HomePageGradent from "../Components/HomePageGradent";
import SecondGradient from "../Components/SecondGradient";

export default function HomePageDashboard({ navigation }) {
    return (
        <ScrollView style={styles.body}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Empowered To <Text style={styles.highlightedText}>Excel</Text></Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Mountain Top University is an institution established with a mandate to transform and rejuvenate the social-economic and political ethos of the nation. 
                    The University operates with the concept of developing the total man and this is encapsulated in the training of the body, mind, and spirit.
                </Text>
            </View>
            <Text 
                style={styles.learnMoreText}
                onPress={() => Linking.openURL('http://google.com')}
            >
                Learn more about MTU
            </Text>
            <Text style={styles.eventsTitle}>MTU Events</Text>
           
            <View>
                <CardOne/>
            </View>

            <View>
                <HomePageGradent/>
            </View>


            <View>
            <SecondGradient/>
           </View>

            <View>
                <HomepageCard/>
            </View>
           
          
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
       
    },
    titleContainer: {
        marginLeft: 10,
    },
    titleText: {
        fontSize: 35,
        fontWeight: '600',
    },
    highlightedText: {
        color: "#4FD100",
    },
    descriptionContainer: {
       
        paddingHorizontal: 15
    },
    descriptionText: {
        fontSize: 17,
    },
    learnMoreText: {
        color: '#4FD100',
        marginLeft: 15,
        textDecorationLine: 'underline',
        fontSize: 16,
        paddingTop: 12,
        paddingBottom: 8,
    },
    eventsTitle: {
        fontSize: 30,
        fontWeight: '600',
        margin: 15,
    },
});
