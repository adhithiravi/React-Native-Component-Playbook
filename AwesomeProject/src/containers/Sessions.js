import React, {useState} from 'react';
import {Text, SectionList, View} from 'react-native';
import {sessions} from '../data/sessions.json';
import styles from './styles/sharedStyles.js';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Sessions() {
  return (
    <View>
      <SectionList
        sections={sessions}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => index}
        stickySectionHeadersEnabled={true}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={FooterComponent}
        ListHeaderComponent={HeaderComponent}
      />
    </View>
  );
}

const renderSectionHeader = ({section}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  );
};

const renderItem = ({item, index}) => {
  return (
    <View>
      <SessionsList
        id={index}
        name={item.title}
        desc={item.description}
        speaker={item.speakers[0].name}
        level={item.level}
        room={item.room}
      />
    </View>
  );
};

const SessionsList = (props) => {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <View key={props.id} style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{'Session : ' + props.name}</Text>
      <Text style={styles.sectionDescription}>
        {'Speaker : ' + props.speaker}
      </Text>
      <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
        <Text style={styles.clickableText}>
          {moreInfo ? 'Hide Details' : 'Show More Details'}
        </Text>
      </TouchableOpacity>
      {moreInfo && (
        <>
          <Text style={styles.sectionDescription}>
            {'Details : ' + props.desc}
          </Text>
          <Text style={styles.sectionDescription}>
            {'Room : ' + props.room}
          </Text>
          <Text style={styles.sectionDescription}>
            {'Level : ' + props.level}
          </Text>
        </>
      )}
    </View>
  );
};

const SeparatorComponent = () => {
  return <View style={styles.seperatorStyle} />;
};

const HeaderComponent = () => {
  return (
    <Header
      image={require('../images/sec2.jpg')}
      heading={'Awesome Sessions!!'}
      style={styles.sectionTitle}
    />
  );
};

const FooterComponent = () => {
  return <Footer />;
};

export default Sessions;
