import * as React from "react";
import { ScrollView, StyleSheet,  } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import firstCard from "../Assets/Images/grand opening.jpg";
import logo from "../Assets/Images/mtu_logo.png";
import secondCard from '../Assets/Images/gender-based violence.jpeg';
import firstImage from '../Assets/Images/image 22.png';
import secondImage from '../Assets/Images/image 21.png';
import thirdImage from '../Assets/Images/image 23.png';
import fourthImage from '../Assets/Images/Rectangle 3 (1).png';
import fifthImage from '../Assets/Images/Rectangle 3.png';


const LeftContent = (props) => <Avatar.Image size={34} source={logo} />;

const MyComponent = () => (
  <ScrollView style={styles.container}>
    <Card style={[styles.cardBox, styles.shadowProp]}>
      <Card.Cover source={firstImage} style={styles.img} />
      <Card.Title title="Federal Government Declares Wednesday, May 1, Public Holiday" left={LeftContent} />
      <Card.Content>
        <Text >Public Holiday</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Learn More</Button>
      </Card.Actions>
    </Card>

    <Card style={[styles.cardBox, styles.shadowProp]}>
      <Card.Cover source={secondImage} style={styles.img} />
      <Card.Title title=" Vacancy Announcement for Non-Teaching Staff" left={LeftContent} />
      <Card.Content>
        <Text >Mountain Top UNiversity invites applications from suitably qualified candidates for the following non-teaching positions: </Text>
      </Card.Content>
      <Card.Actions>
        <Button>Learn More</Button>
      </Card.Actions>
    </Card>

    <Card style={[styles.cardBox, styles.shadowProp]}>
      <Card.Cover source={thirdImage} style={styles.img} />
      <Card.Title title="Gender Week 2023 - Lecture Day | Day 2" left={LeftContent} />
      <Card.Content>
        <Text >Gender Based-Violence: The Long-Standing Phenomenon against Humanity</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Learn More</Button>
      </Card.Actions>
    </Card>

    <Card style={[styles.cardBox, styles.shadowProp]}>
      <Card.Cover source={fourthImage} style={styles.img} />
      <Card.Title title="9th Matriculation Ceremony" left={LeftContent} />
      <Card.Content>
        <Text >Grand Opening of Counselling office in MTU has...</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Read More</Button>
      </Card.Actions>
    </Card>

    <Card style={[styles.cardBox, styles.shadowProp]}>
      <Card.Cover source={fifthImage} style={styles.img} />
      <Card.Title title=" 2nd CHMS International Conference" left={LeftContent} />
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
        width: 'auto',
        height: 'auto'
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
