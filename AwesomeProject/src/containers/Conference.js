import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import styles from './styles/sharedStyles.js';

function Conference({navigation}) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Image
        style={styles.storyImage}
        source={require('../images/Bitmap.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Globomantics Conference</Text>
          <Text style={styles.sectionDescriptionStory}>
            Join us along with Awesome Speakers and Great Content from around
            the Globe!
          </Text>
          <View style={styles.buttonWrapper}>
            <Pressable
              onPress={() =>
                navigation.navigate('Sessions', {name: 'Sessions'})
              }
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Sessions</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('Speakers', {name: 'Speakers'})
              }
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Speakers</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Conference;
