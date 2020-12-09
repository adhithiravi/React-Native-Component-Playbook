import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import styles from './styles/sharedStyles.js';

function Story() {
  return (
    <ScrollView
      ref={(a) => (this.scroll = a)}
      style={styles.storyContainer}
      contentContainerStyle={styles.storyInnerContainer}
      stickyHeaderIndices={[0, 1]}
      indicatorStyle="white"
      pagingEnabled={true}
      scrollsToTop={true}
      bounces={true}>
      <Image
        style={styles.storyImageSmall}
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
      <View style={styles.body}>
        <Pressable
          onPress={() =>
            this.scroll.scrollToEnd({animated: true, duration: 500})
          }>
          <Text style={styles.sectionDescriptionStory}>Go To End</Text>
        </Pressable>
        <Text style={styles.sectionDescriptionStory}>
          This is going to be a lengthy story on how this conference started
        </Text>

        <Text style={styles.sectionDescriptionStory}>
          Ex amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
          occaecat ex elit ex est.\nEsse enim nulla dolore sint incididunt enim
          eu eu aute aliqua laboris deserunt eiusmod. Reprehenderit et proident
          nisi laborum ex minim velit. Aliqua laboris et nulla laborum amet sint
          irure ad tempor. Nulla do officia labore. Ut amet aute ex proident.
          Enim sint aliqua occaecat voluptate adipisicing dolore proident Ex
          amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Ex amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
          occaecat ex elit ex est.\nEsse enim nulla dolore sint incididunt enim
          eu eu aute aliqua laboris deserunt eiusmod. Reprehenderit et proident
          nisi laborum ex minim velit. Aliqua laboris et nulla laborum amet sint
          irure ad tempor. Nulla do officia labore. Ut amet aute ex proident.
          Enim sint aliqua occaecat voluptate adipisicing dolore proident Ex
          amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
        </Text>

        <Text style={styles.sectionDescriptionStory}>
          Ex amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
          occaecat ex elit ex est.\nEsse enim nulla dolore sint incididunt enim
          eu eu aute aliqua laboris deserunt eiusmod. Reprehenderit et proident
          nisi laborum ex minim velit. Aliqua laboris et nulla laborum amet sint
          irure ad tempor. Nulla do officia labore. Ut amet aute ex proident.
          Enim sint aliqua occaecat voluptate adipisicing dolore proident Ex
          amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Ex amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
          occaecat ex elit ex est.\nEsse enim nulla dolore sint incididunt enim
          eu eu aute aliqua laboris deserunt eiusmod. Reprehenderit et proident
          nisi laborum ex minim velit. Aliqua laboris et nulla laborum amet sint
          irure ad tempor. Nulla do officia labore. Ut amet aute ex proident.
          Enim sint aliqua occaecat voluptate adipisicing dolore proident Ex
          amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
        </Text>
        <Text style={styles.sectionDescriptionStory}>End of this story!</Text>
        <Pressable
          onPress={() => this.scroll.scrollTo({x: 0, y: 0, animated: true})}>
          <Text style={styles.sectionDescriptionStory}>Go to Top</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Story;
