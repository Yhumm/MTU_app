import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import About from '../InformationComponents/About/About';
import SecondSegment from '../InformationComponents/About/SecondSegment';
import ThirdSegment from '../InformationComponents/About/ThirdSegment';
import FourthSegment from '../InformationComponents/About/FourthSegment';
import SegmentOne from '../InformationComponents/ContactUs/SegmentOne';

export default function InformationScreen() {
  return (
    <ScrollView>
    <View>
        <About/>
    </View>

    <View>
      <SecondSegment/>
    </View>

    <View>
      <ThirdSegment/>
    </View>

  <View>
    <FourthSegment/>
    
  </View>

  <View>
    <SegmentOne/>
  </View>

</ScrollView>
  )
}

const styles = StyleSheet.create({})