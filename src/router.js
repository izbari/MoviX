import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchScreen from './Screens/SearchScreen';
import FilmScreen from './Screens/FilmScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FavoritesScreen from './Screens/FavoritesScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons';

const Router = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeStack = second => {
    <Stack.Navigator>
      <Stack.Screen name={FilmScreen} component={FilmScreen} />
    </Stack.Navigator>;
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Profile') iconName = 'person';
            else if (route.name === 'Favorites') iconName = 'heart';
            else iconName = 'search';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />

        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
