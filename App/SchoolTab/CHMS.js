import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Divider } from "@rneui/base";
import chmsImage from '../Assets/Images/image 28.png'

export default function CHMS() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.containerOne}>

        <Text style={styles.header}>
          College of Humanities and Management Sciences
        </Text>

        <View>
        <Image source={chmsImage} style={styles.img} />
        </View>

       <View>
       <Text style={styles.body}>
          The College of Humanities, Management and Social Sciences is one of
          the two pioneer colleges of the University. The College currently
          houses eight departments and eleven programmes. The faculty comprises
          of some of the best and experienced academics in the humanities,
          management and social science research and practice. The College
          conducts undergraduate and postgraduate studies in Philosophy and
          Religion, Music, Communication and Media studies, Languages, Fine and
          Applied Arts, Economics, Business Administration, Public
          Administration, Industrial Relations and Personnel Management,
          Accounting and Finance. The College boasts of high-end facilities and
          equipment for practical and hands-on learning. The college of
          Humanities, Management and Social Sciences is equipped to facilitate
          the production of top-notch graduates and specialists for national and
          global impact. You are sincerely welcome to enrol in any of our
          programmes, about which you can find adequate information on this
          site. We look forward to seeing you. 
        </Text>

        <Text>
        Prof. Babatunde Oni Dean CHMS
        </Text>
       </View>

        <View>
            <Divider/>
        </View>


        <Text style={styles.subHeader}>Departments</Text>

        <View style={styles.listContainer}>
          {departments.map((department, index) => (
            <View key={index} style={styles.container}>
              <Text style={styles.firstTextContent}>{department.name}</Text>
              <Text style={styles.secondTextContent}>
                <Text style={styles.hod}>HOD:</Text> {department.hod}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const departments = [
  { name: "Accounting and Finance", hod: "Dr. Omokehinde Joshua" },
  { name: "Business Administration", hod: "Dr. Olanipekun Ojo" },
  { name: "Economics", hod: "Dr. Ademola Young" },
  { name: "Fine and Applied Arts", hod: "Dr. Kehinde Shobukonla (FSNA)" },
  { name: "Languages", hod: "Dr. Mariam Anana" },
  { name: "Mass Communication", hod: "Dr. Mbaka Azuka" },
  { name: "Music", hod: "Dr. Ogunyemi Oludare" },
];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
        margin: 8
  },
  header: {
    fontWeight: '900',
    paddingRight: 15,
    fontSize: 30,
    marginBottom: 5
  },
  subHeader: {
    fontWeight: "700",
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  body: {
    color: 'grey',
    textAlign: 'left',
    padding: 25,
    fontSize: 20,

},
  listContainer: {
    flex: 1,
    flexDirection: "column",
  },
  containerOne: {
    flex: 1,
    marginTop: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    borderColor: "grey",
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 10,
    marginBottom: 5,
  },
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
    marginBottom: 5,
  },
  firstTextContent: {
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 10
  },
  secondTextContent: {
    fontSize: 16,
    color: "grey",
    textAlign: "justify",
  },
  img: {
    width: '100%',
    marginVertical: 10
},
hod: {
    fontSize: 20,
    fontWeight: '700'
  },
});
