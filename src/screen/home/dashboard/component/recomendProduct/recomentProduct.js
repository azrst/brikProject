/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Icons from 'react-native-vector-icons/FontAwesome';
import {
  GET_PROMO_BANNER,
  CLEAR_PROMO_BANNER,
} from '../../../../../redux/service/recomenProduct';
import LinearGradient from 'react-native-linear-gradient';
import {
  gradientYellow,
  primaryGray,
  primaryRed,
} from '../../../../../utils/colors';
import {ScrollView} from 'react-native-gesture-handler';

const RecomendProduct = () => {
  const recomendProductData = useSelector(state => state.recomendProduct?.data);
  const dispatch = useDispatch();

  const SkeletonTextRender = (width = 50) => {
    return (
      <View style={{paddingBottom: 2}}>
        <SkeletonPlaceholder speed={2000}>
          <View
            style={{
              width: (Dimensions.get('window').width * width) / 100,
              height: 20,
              borderRadius: 5,
            }}></View>
        </SkeletonPlaceholder>
      </View>
    );
  };
  const SkeletonCardRender = () => {
    return (
      <View style={{justifyContent: 'center', paddingRight: 10}}>
        <SkeletonPlaceholder speed={2000}>
          <View>
            <View
              style={{
                // flex: 1,
                width: Dimensions.get('window').height * 0.18,
                height: Dimensions.get('window').height * 0.36,
                justifyContent: 'center',
                borderRadius: 8,
                marginRight: 10,
              }}></View>
          </View>
        </SkeletonPlaceholder>
      </View>
    );
  };

  const titleRender = () => {
    return recomendProductData?.data ? (
      <View style={style.flexRow}>
        <View style={{flex: 8 / 10}}>
          <Text>Discount Special for Today</Text>
        </View>
        <View>
          <Text style={{flex: 2 / 10}}>more</Text>
        </View>
      </View>
    ) : (
      <View>{SkeletonTextRender()}</View>
    );
  };

  const timerRender = () => {
    return recomendProductData?.data[0]?.countDown ? (
      <View style={style.flexRow}>
        <View style={{flex: 8 / 10, flexDirection: 'row'}}>
          <Text>ends in</Text>
          <Text> TIMER</Text>
        </View>
        <View>
          <Text style={{flex: 2 / 10}}>more</Text>
        </View>
      </View>
    ) : (
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 5}}>{SkeletonTextRender(20)}</View>
        <View style={{marginRight: 5}}>{SkeletonTextRender(20)}</View>
      </View>
    );
  };

  const ListProductRender = () => {
    return (
      <LinearGradient
        colors={gradientYellow}
        style={{justifyContent: 'center', flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={require('../../../../../../assets/bannerDummy/bannerRecomend.png')}
            style={{
              width: 150,
              height: 350,
              resizeMode: 'contain',
              opacity: 1,
            }}
          />
          {recomendProductData?.data[0]?.data === undefined ? (
            <View style={{flexDirection: 'row'}}>
              {SkeletonCardRender()}
              {SkeletonCardRender()}
              {SkeletonCardRender()}
            </View>
          ) : (
            <View style={{justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                {recomendProductData?.data[0]?.data.map((item, index) => {
                  return (
                    <TouchableOpacity>
                      <View
                        style={{
                          marginRight: 15,
                          width: Dimensions.get('window').width * 0.35,
                        }}>
                        <Image
                          source={{uri: item?.thumbnailProduct}}
                          style={{
                            width: Dimensions.get('window').width * 0.35,
                            height: Dimensions.get('window').width * 0.35,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            resizeMode: 'cover',
                          }}
                        />
                        <View
                          style={{
                            backgroundColor: 'white',
                            paddingHorizontal: 5,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                          }}>
                          <Text style={{paddingTop: 10}}>{item?.title}</Text>
                          <Text style={{paddingTop: 5}} numberOfLines={2}>
                            {item?.desc}
                          </Text>
                          <View
                            style={{
                              width: Dimensions.get('window').width * 0.32,
                              height: 10,
                              borderRadius: 2,
                              backgroundColor: '#dbdbdb',
                              marginVertical: 10,
                            }}>
                            <SkeletonPlaceholder
                              speed={3000}
                              backgroundColor={primaryRed}>
                              <View
                                style={{
                                  width:
                                    Dimensions.get('window').width *
                                    ((item.remaining * item.stock) /
                                      item.stock) *
                                    0.01,
                                  height: 10,
                                  borderRadius: 2,
                                  backgroundColor: primaryRed,
                                  alignItems: 'flex-end',
                                }}></View>
                            </SkeletonPlaceholder>
                          </View>
                          <Text
                            style={{fontWeight: '400', fontSize: 15}}
                            numberOfLines={1}>
                            {item?.price}
                          </Text>
                          <Text style={{paddingTop: 10}}>{item?.ratting}</Text>
                          <Text style={{paddingTop: 10, marginBottom: 10}}>
                            {item?.location}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(GET_PROMO_BANNER());
      //   dispatch(CLEAR_PROMO_BANNER());
    }, 3000);
  }, []);

  return (
    <View style={style.container}>
      <View style={style.containerLayer}>{titleRender()}</View>
      <View style={style.containerLayer}>{timerRender()}</View>
      <View style={{}}>{ListProductRender()}</View>

      <Text>
        {JSON.stringify(recomendProductData?.data[0]?.countDown)} sdsds
      </Text>
    </View>
  );
};

export const style = StyleSheet.create({
  container: {
    paddingTop: 25,
    justifyContent: 'center',
  },
  containerLayer: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RecomendProduct;
