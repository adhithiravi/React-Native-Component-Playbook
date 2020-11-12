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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  ImageStore,
} from 'react-native';

import 'react-native-gesture-handler';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Home({navigation}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              position: 'absolute',
            }}
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
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
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

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
