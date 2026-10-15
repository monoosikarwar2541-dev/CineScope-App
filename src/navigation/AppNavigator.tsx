
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  House,
  Search,
  Bookmark,
  UserRound,
} from 'lucide-react-native';

import DashboardScreen from '@/screens/DashboardScreen';
import SearchScreen from '@/screens/SearchScreen';

import ProfileScreen from '@/screens/ProfileScreen';

import type { AppTabParamList } from './types';
import { COLORS } from '@/constants/colors';
import { ms, rf } from '@/utils/responsive';
import WatchlistScreen from '@/screens/WatchlistScreen';

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryLight,
        tabBarInactiveTintColor: COLORS.muted,

        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
          height: ms(62),
          paddingTop: ms(7),
          paddingBottom: ms(5),
        },

        tabBarLabelStyle: {
          fontSize: rf(10),
          fontWeight: '600',
        },

        tabBarIcon: ({ color, focused }) => {
          const iconProps = {
            size: ms(21),
            color,
            strokeWidth: focused ? 2.5 : 1.8,
          };

          switch (route.name) {
            case 'Home':
              return <House {...iconProps} />;
            case 'Search':
              return <Search {...iconProps} />;
            case 'Watchlist':
              return <Bookmark {...iconProps} />;
            case 'Profile':
              return <UserRound {...iconProps} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
      />

      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
      
    </Tab.Navigator>
  );
};

export default AppNavigator;
