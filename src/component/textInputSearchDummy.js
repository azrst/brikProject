import React from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {primaryGray} from '../utils/colors';

const TextInputSearch = ({onPress}) => {
  return (
    <View style={style.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          onPress();
        }}>
        <View style={style.textContainer}>
          <Text style={style.textPlaceholder}>what are you looking for?</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: primaryGray,
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textPlaceholder: {
    color: primaryGray,
  },
});

export default TextInputSearch;
