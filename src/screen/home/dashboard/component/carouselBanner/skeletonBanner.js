import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
// import SkeletonContent from 'react-native-skeleton-content';

const SkeletonBanner = () => {
  const [bannerData, setDataBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <View style={style.containerBanner}>
      <View>
        {/* <SkeletonContent
          containerStyle={{flex: 1, width: 300, height: 200}}
          isLoading={true}
        /> */}
        <Text>skeleton banner</Text>
        <Text>skeleton banner</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerBanner: {
    paddingTop: Dimensions.get('window').height * 0.1,
  },
});

export default SkeletonBanner;
