/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import styles from './styles/sharedStyles.js';
import 'react-native-gesture-handler';

import {TouchableOpacity} from 'react-native-gesture-handler';

function Home({navigation}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Image
            style={styles.image}
            source={require('../images/hero_image.png')}
          />

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Globomantics Tech Conference
              </Text>
              <Text style={styles.sectionDescription}>
                Maniaclly taking tech to the globe
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Conference', {name: 'Conference'})
                }>
                <Text style={styles.sectionTitle}>Conference</Text>
              </TouchableOpacity>
              <Text style={styles.sectionDescription}>
                View conference sessions and speakers
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Story', {name: 'Story'})}>
                <Text style={styles.sectionTitle}>Story</Text>
              </TouchableOpacity>
              <Text style={styles.sectionDescription}>Learn more about us</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Submit Sessions</Text>
              <Text style={styles.sectionDescription}>
                Are you interested in speaking? Submit a session!
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Feedback</Text>
              <Text style={styles.sectionDescription}>
                We would love to hear from you.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <View style={styles.footer}>
                <Image
                  style={{
                    width: 300,
                    height: 70,
                    resizeMode: 'stretch',
                    position: 'relative',
                  }}
                  source={require('../images/pluralsight-white.png')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}



export default Home;
