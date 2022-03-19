import {Dimensions} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {FavoriteScreen, WatchlistScreen} from './Screens/FavoritesScreen';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import FilmScreen from './Screens/FilmScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FavoritesScreen from './Screens/FavoritesScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons';

const Router = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const TopTab = createMaterialTopTabNavigator();
  const ListTabs = () => {
    return (
      <TopTab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          style: {
            backgroundColor: '#000',
          },
        }}>
        <TopTab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="ios-heart" size={size} color={color} />
            ),
          }}
        />
        <TopTab.Screen
          name="Watchlist"
          component={WatchlistScreen}
          options={{
            tabBarLabel: 'Watchlist',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="ios-bookmark" size={size} color={color} />
            ),
          }}
        />
      </TopTab.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  const SearchStack = () => {
    return (
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: true,
          gestureResponseDistance: Dimensions.get('window').height,
          gestureDirection: 'vertical',
        }}>
        <Stack.Screen name="SearchStack" component={SearchScreen} />

        <Stack.Screen name="FilmScreen" component={FilmScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
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
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favorites" component={ListTabs} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
