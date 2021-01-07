import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../containers/styles/sharedStyles.js';

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.footerImage} source={require('../images/G.png')} />
      <Text style={styles.sectionDescription}>
        {' '}
        All rights reserved by Globomantics Tech Conference 2020.
      </Text>
    </View>
  );
};
