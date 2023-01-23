import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {primaryGray, primaryRed} from '../../../utils/colors';
import CaraouselBanner from './component/carouselBanner/carouselBanner';

import HeaderDashboard from './component/headerDashboard';
import ModalSearch from './component/modalSeacrh/modalSearch';
import ShortCutMenu from './component/shortCutNavigation/shortCutMenu';

const Dashboard = () => {
  const [yCoordinate, setYCoordinate] = useState(0);
  const [modalSeacrh, setModalSearch] = useState(false);

  const data = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  const handleScroll = event => {
    const positionY = event.nativeEvent.contentOffset.y;
    setYCoordinate(positionY);
  };

  return (
    <View style={style.container}>
      <ModalSearch
        show={modalSeacrh}
        setHide={() => {
          setModalSearch(false);
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={res => {
          handleScroll(res);
        }}>
        <View style={style.scrollViewContainer}>
          <ShortCutMenu />
          <CaraouselBanner />
          {data.map((item, index) => {
            return (
              <View
                style={{
                  //   backgroundColor: index % 2 == 0 ? primaryGray : primaryRed,
                  paddingVertical: 40,
                }}>
                <Text>content</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <HeaderDashboard
        yCoordinate={yCoordinate}
        onClick={() => {
          setModalSearch(true);
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingTop: Dimensions.get('window').height * 0.08,
    paddingBottom: 70,
    backgroundColor: 'white',
  },
});

export default Dashboard;
