import React from 'react';
import {Text, View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {primaryGray} from '../../../../../utils/colors';

const ModalSearch = ({show, setHide}) => {
  return (
    <View>
      <Modal style={style.container} visible={show} animationType="slide">
        <TouchableOpacity
          onPress={() => {
            setHide();
          }}>
          <Text>asdadas</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: primaryGray,
  },
});

export default ModalSearch;
