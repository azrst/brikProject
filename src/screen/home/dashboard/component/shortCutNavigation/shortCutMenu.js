import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradientYellow, primaryGray} from '../../../../../utils/colors';

const ShortCutMenu = () => {
  const shortCutData = [
    {
      title: 'Cart',
      icon: 'hammer',
      image: require('../../../../../../assets/Icon/trolley-cart.png'),
    },
    {
      title: 'Home Idea',
      icon: 'hammer',
      image: require('../../../../../../assets/Icon/lamp.png'),
    },
    {
      title: 'Furniture',
      icon: 'hammer',
      image: require('../../../../../../assets/Icon/sofa.png'),
    },
    {
      title: 'Quli Qu',
      icon: 'hammer',
      image: require('../../../../../../assets/Icon/builder.png'),
    },
    {
      title: 'Planning',
      icon: 'hammer',
      image: require('../../../../../../assets/Icon/mortgage.png'),
    },
  ];

  const shortCutRender = (item, index) => {
    return (
      <View style={style.menuItemContainer}>
        <TouchableOpacity
          style={style.touchContainer}
          onPress={() => {
            console.log('pressed');
          }}>
          <Image style={style.iconStyle} source={item?.image} />
          <Text numberOfLines={1} style={style.iconText}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={style.layoutContainer}>
      <LinearGradient style={[style.container]} colors={gradientYellow}>
        {/* <Text style={{}}>Sign in with Facebook</Text> */}
        <Text>Some content</Text>
        <View style={[style.menuContainer, style.menuContainerShadow]}>
          {shortCutData.map((item, index) => {
            return <View>{shortCutRender(item, index)}</View>;
          })}
        </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  layoutContainer: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height * 0.1,
    paddingHorizontal: 10,
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: Dimensions.get('window').height * 0.05,
  },
  menuItemContainer: {
    width: Dimensions.get('window').width * 0.18,
    borderColor: primaryGray,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 10,
    // marginBottom: 10,
  },
  menuContainerShadow: {
    // shadowColor: '#000',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: 'white', // invisible color
    zIndex: 10,
    shadowOpacity: 1,
    shadowRadius: 1.41,
    elevation: 3,
  },
  iconStyle: {
    width: 35,
    height: 35,
  },
  iconText: {
    fontSize: 11,
    paddingTop: 5,
  },
  touchContainer: {justifyContent: 'center', alignItems: 'center'},
});

export default ShortCutMenu;
