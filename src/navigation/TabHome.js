import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import Dashboard from '../screen/home/dashboard/dashboardScreen';
import Discovery from '../screen/home/discovery/discoveryScreen';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? 10 : 5,
          marginHorizontal: 10,
          borderRadius: 10,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="DashboardScreen" component={Dashboard} />
      <Tab.Screen name="DiscoveryScreen" component={Discovery} />
    </Tab.Navigator>
  );
};

export default HomeTab;
