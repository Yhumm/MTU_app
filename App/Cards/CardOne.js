import * as React from "react";
import { ScrollView, StyleSheet,  } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import firstCard from "../Assets/Images/grand opening.jpg";
import logo from "../Assets/Images/mtu_logo.png";
import secondCard from '../Assets/Images/gender-based violence.jpeg';


const LeftContent = (props) => <Avatar.Image size={34} source={logo} />;

const MyComponent = () => (
  <ScrollView horizontal={true} style={styles.container}>
    <Card style={[styles.cardBox, styles.shadowProp]}>
      <Card.Cover source={firstCard} style={styles.img} />
      <Card.Content>
        <Text >Grand Opening of Counselling office in MTU has...</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Read More</Button>
      </Card.Actions>
    </Card>

    <Card style={[styles.cardBox, styles.shadowProp]}>
      <Card.Cover source={secondCard} style={styles.img} />
      <Card.Content>
        <Text >Grand Opening of Counselling office in MTU has...</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Read More</Button>
      </Card.Actions>
    </Card>

    </ScrollView>
);

export default MyComponent;

const styles = StyleSheet.create({

    cardBox:{
        margin: 10,
        width: 300,
        height: 450
    },
    img:{
        padding: 10,
        height: 360
    },
    shadowProp:{
      shadowColor: '#000000',
      
      shadowOpacity: 0.5,
      shadowRadius: 7,
    }
})
