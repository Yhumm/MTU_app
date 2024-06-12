import React from "react";

import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";

export default function NewsScreen({navigation}) {
    return(
        <View style={Styles.container}> 
            <Text> This is the page for news </Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});