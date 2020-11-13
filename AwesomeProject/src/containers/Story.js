import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import styles from './styles/sharedStyles.js';

function Story() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Image
        style={styles.storyImage}
        source={require('../images/shutterstock_211091626.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Our Story</Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Story;
