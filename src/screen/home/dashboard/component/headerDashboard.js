import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';

import TextInputSearch from '../../../../component/textInputSearchDummy';
import {primaryYellow} from '../../../../utils/colors';

const HeaderDashboard = ({yCoordinate, onClick}) => {
  const [opacityHeader, setOpacityHeader] = useState(1);

  useEffect(() => {
    const opacity = 1 - yCoordinate / 170;
    if (opacity > 0) {
      setOpacityHeader(opacity);
      StatusBar.setBackgroundColor(primaryYellow);
      StatusBar.setBarStyle('light-content');
    } else {
      StatusBar.setBackgroundColor('white');
      StatusBar.setBarStyle('dark-content');
      setOpacityHeader(0);
    }
  }, [yCoordinate]);

  return (
    opacityHeader > 0 && (
      <View
        style={[
          style.container,
          // style.containerShadow,
          {
            opacity: opacityHeader,
          },
        ]}>
        <View style={style.textInputContainer}>
          <TextInputSearch
            onPress={() => {
              onClick();
            }}
          />
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: primaryYellow,
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 1,
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 10,
    left: 0,
    top: 0,
    // paddingVertical: 10,
  },
  containerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textInputContainer: {
    flex: 7.5 / 10,
  },
});

export default HeaderDashboard;
