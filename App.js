/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment} from 'react';
import {SafeAreaView, View} from 'react-native';

import Root from './src/navigation/root';
import {primaryYellow} from './src/utils/colors';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: primaryYellow}} />
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
        <Root />
      </SafeAreaView>
    </View>
  );
};

export default App;
