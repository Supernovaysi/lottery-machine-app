import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogScreen from './LogScreen';
import RemoveHistoryButton from '../components/RemoveHistoryButton';
import HistoryHeaderLeft from '../components/HistoryHeaderLeft';
import MainPageHeader from '../components/MainPageHeader';
import WinNumberScreen from './WinNumberScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="로또 추첨기"
        component={MainScreen}
        options={{
          headerTitle: () => <MainPageHeader />,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={LogScreen}
        options={{
          headerTitle: () => <HistoryHeaderLeft />,
          tabBarIcon: ({color, size}) => (
            <Icon name="view-stream" color={color} size={size} />
          ),
          headerRight: () => <RemoveHistoryButton />,
        }}
      />
      <Tab.Screen
        name="당첨 번호"
        component={WinNumberScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
