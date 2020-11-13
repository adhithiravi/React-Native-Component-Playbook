import React from 'react';
import Home from './containers/Home';
import Conference from './containers/Conference';
import Story from './containers/Story';
import Sessions from './containers/Sessions';
import Speakers from './containers/Speakers';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conference" component={Conference} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="Sessions" component={Sessions} />
        <Stack.Screen name="Speakers" component={Speakers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
