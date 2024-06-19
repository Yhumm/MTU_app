import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import cbasImage from "../Assets/Images/image 27.png";
import { Divider } from "@rneui/base";

export default function CBAS() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.containerOne} >
        <View>
          <Text style={styles.header}>College of Basic and Applied Sciences</Text>
        </View>

        <View>
            <Image source={cbasImage} style={styles.img} />
        </View>
        

        <View>
          <Text style={styles.body}>
            With utmost pleasure, I welcome you to the College of Basic and
            Applied Sciences (CBAS), Mountain Top University. Currently, CBAS
            comprises seven Departments running fifteen Bachelor of Science
            (B.Sc.) programmes which includes the Department of Biochemistry
            (Biochemistry), Biological Sciences (Biology Biotechnology and
            Microbiology), Department of Chemical Sciences (Chemistry and
            Industrial Chemistry), Department of Computer Science and
            Mathematics (Computer Science, Mathematics, Software Engineering and
            Cyber Computer Sciences Security), Department of Physics (Physics
            and Physics with Electronics), Department of Geosciences (Geophysics
            and Geology) and Department of Food Science and Technology. We have
            also commenced excellent postgraduate programmes leading to the
            award of M.Sc., MPhil/PhD and PhD degrees. All the programmes at
            both undergraduate and postgraduate levels are fully accredited by
            the National Universities Commission (NUC). We also run conversion
            prorammes for holders of Higher National Diploma certificate and
            also part-time programmes. The curricula of the programmes in CBAS
            are carefully designed in line with the institutional vision to
            equip our students with necessary skills in their chosen field of
            study, which are needed to be globally competitive for outstanding
            impact on the Nigerian societal and global development. CBAS is
            endowed with erudite, experienced faculties, as well as efficient,
            committed administrative and technical staff. In addition, our
            lecture rooms and laboratories are highly equipped with modern
            facilities for both conducive learning environment and hands-on
            practical experience in the various fields of study. 
            Thank you.
          </Text>

          <Text>
           Dr.
          E.A. Ofudje Ag. Dean CBAS +234-8159894146
          </Text>
        </View>

        <View>
            <Divider/>
        </View>

        <View>
          <Text style={styles.dept}>Departments</Text>
        </View>

        <View>
          <View style={styles.listContainer}>
            <View style={styles.container}>
              <View style={styles.firstText}>
                <Text style={styles.firstTextContent}>
                  Computer Science and Mathematics
                </Text>
              </View>
              <View style={styles.secondText}>
                <Text style={styles.secondTextContent}>
                <Text style={styles.hod}> HOD:</Text> Dr. Mebawondu Akindele
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.firstText}>
                <Text style={styles.firstTextContent}>Biochemistry</Text>
              </View>
              <View style={styles.secondText}>
                <Text style={styles.secondTextContent}>
                <Text style={styles.hod}> HOD:</Text> Dr. (Mrs) O. T. Kayode
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.firstText}>
                <Text style={styles.firstTextContent}>Biological Sciences</Text>
              </View>
              <View style={styles.secondText}>
                <Text style={styles.secondTextContent}>
                <Text style={styles.hod}> HOD:</Text> Dr. C. I. Ayolabi
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.firstText}>
                <Text style={styles.firstTextContent}>Chemical Sciences</Text>
              </View>
              <View style={styles.secondText}>
                <Text style={styles.secondTextContent}>
                <Text style={styles.hod}> HOD:</Text> Dr. Ndukwe A. Nelly
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.firstText}>
                <Text style={styles.firstTextContent}>
                  Food Science and Technology
                </Text>
              </View>
              <View style={styles.secondText}>
                <Text style={styles.secondTextContent}>
                <Text style={styles.hod}> HOD:</Text> Dr. Mary Omolola
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.firstText}>
                <Text style={styles.firstTextContent}>Geosciences</Text>
              </View>
              <View style={styles.secondText}>
                <Text style={styles.secondTextContent}>
                  <Text style={styles.hod}> HOD:</Text> Dr. Balogun Oluwatimilehin
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.firstText}>
                <Text style={styles.firstTextContent}>Physics</Text>
              </View>
              <View style={styles.secondText}>
                <Text style={styles.secondTextContent}>
                <Text style={styles.hod}> HOD:</Text> Dr. Oladimeji Babatunde
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 8
    },
    img: {
        width: '100%',
        marginVertical: 10
    },
    header: {
        fontWeight: '900',
        paddingRight: 15,
        fontSize: 30,
        marginBottom: 5
    },
    body: {
        color: 'grey',
        textAlign: 'left',
        padding: 25,
        fontSize: 20,

    },
    listContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    dept: {
        fontSize: 20,
        fontWeight: '900',
        marginTop: 15
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
  firstText: {
    paddingBottom: 5,
  },
  firstTextContent: {
    fontSize: 20,
    fontWeight: "700",
  },
  secondText: {
    paddingTop: 10,
  },
  secondTextContent: {
    fontSize: 20,
    color: "grey",
    textAlign: "justify",
  },
  hod: {
    fontSize: 20,
    fontWeight: '700'
  }
});
