import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import { RootStackParamList } from './types';
import SplashScreen from '@/screens/SplashScreen';
import MovieDetailsScreen from '@/screens/MovieDetailsScreen';






const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen
        name="Splash"
        component={SplashScreen}
      /> */}


      <Stack.Screen 
      name="App" 
      component={AppNavigator} />

      <Stack.Screen 
      name="MovieDetails" 
      component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;