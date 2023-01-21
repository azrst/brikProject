import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Discovery = () => {
  return (
    <View style={style.container}>
      <View>
        <Text>Discovery Screen</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discovery;
