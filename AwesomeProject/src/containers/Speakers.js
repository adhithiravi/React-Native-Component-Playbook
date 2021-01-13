import React, {useState} from 'react';
import {Text, FlatList, View, TextInput, Pressable, Image} from 'react-native';
import {speakers} from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles.js';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

function Speakers() {
  const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);

  const getSearchText = (text) => {
    let filteredSpeakersList = speakers.filter((value) =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredSpeakers(filteredSpeakersList);
  };

  return (
    <View>
      <SearchSessions getSearchText={getSearchText} />
      <FlatList
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'always'}
        data={filteredSpeakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
        pagingEnabled={false}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
}

const SearchSessions = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    props.getSearchText(text);
  };

  const clearSearch = () => {
    this.textInput.clear();
    props.getSearchText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={(ref) => {
          this.textInput = ref;
        }}
        style={styles.searchInput}
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
        placeholder={'Search Sessions'}
        returnKeyType={'go'}
        autoCorrect={false}
        autoFocus={false}
        keyboardType={'default'}
        multiline={false}
        selectionColor={'green'}
      />
      <Pressable onPress={clearSearch} style={styles.clearContainer}>
        <Image
          style={styles.clearImage}
          source={require('../images/multiply-1_Orange.png')}
        />
      </Pressable>
    </View>
  );
};

const renderItem = ({item, index}) => {
  return (
    <View>
      <SpeakerList
        id={index}
        name={item.name}
        bio={item.bio}
        session={item.sessions[0].name}
      />
    </View>
  );
};

const SpeakerList = ({id, name, bio, session}) => {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle}>{'Speaker Name: ' + name}</Text>
      <Text style={styles.sectionDescription}>{'Bio: ' + bio}</Text>
      <Text style={styles.sectionDescriptionBold}>{'Session: ' + session}</Text>
    </View>
  );
};

const SeparatorComponent = () => {
  return <View style={styles.seperatorStyle} />;
};

const HeaderComponent = () => {
  return (
    <Header
      image={require('../images/girl.png')}
      heading={'Awesome Speakers Lineup!!'}
      style={styles.sectionTitleGreen}
    />
  );
};

const FooterComponent = () => {
  return <Footer />;
};
export default Speakers;
