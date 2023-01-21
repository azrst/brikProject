import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {primaryYellow} from '../utils/colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
  }, [navigation]);

  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/klontongSayur.gif')}
        style={style.logoContainer}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryYellow,
  },
  logoContainer: {
    width: 250,
    height: 250,
  },
});

export default SplashScreen;
