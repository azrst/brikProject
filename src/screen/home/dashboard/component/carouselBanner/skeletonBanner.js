import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import SkeletonContent from 'react-native-skeleton-content';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {primaryGray} from '../../../../../utils/colors';

const SkeletonBanner = () => {
  const [bannerData, setDataBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const width = Dimensions.get('window').width * 1;

  return (
    <View style={style.containerBanner}>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SkeletonPlaceholder
            borderRadius={4}
            speed={2000}
            direction={'right'}>
            <View style={{flexDirection: 'row'}}>
              <View style={style.cardContainer} />
              <View style={style.cardContainer} />
              <View style={style.cardContainer} />
            </View>
          </SkeletonPlaceholder>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerBanner: {
    // paddingTop: Dimensions.get('window').height * 0.1,
    // backgroundColor: primaryGray,
  },
  cardContainer: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width / 4,
    marginLeft: 20,
    borderRadius: 5,
  },
});

export default SkeletonBanner;
