/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Carousel from 'react-native-snap-carousel';
import SkeletonBanner from './skeletonBanner';
import {dataDummy} from './dummyData';

const CaraouselBanner = () => {
  const [bannerData, setDataBanner] = useState(dataDummy);
  const width = Dimensions.get('window').width * 1;

  const CarouselRender = () => {
    return (
      <ScrollView
        style={{flexDirection: 'row'}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {bannerData.map((item, index) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log('heheheh');
                }}
                onBlur={() => {
                  console.log('focuss');
                }}>
                <Image
                  source={item?.imgPath}
                  style={{
                    width: width * 0.65,
                    height: (width * 0.65) / 2.2,
                    resizeMode: 'stretch',
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: index === bannerData.length - 1 ? 15 : 0,
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={style.containerBanner}>
      {/* {CarouselRender()} */}
      <View>
        {bannerData === null ? (
          <SkeletonBanner />
        ) : (
          <View>{CarouselRender()}</View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerBanner: {
    paddingTop: Dimensions.get('window').height * 0.08,
    justifyContent: 'center',
    flex: 1,
  },
});

export default CaraouselBanner;
