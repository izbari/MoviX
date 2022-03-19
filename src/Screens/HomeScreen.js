import {
  Dimensions,
  TextInput,
  StatusBar,
  Pressable,
  Text
} from 'react-native';
import React, {useState} from 'react';
import FilmsRow from '../Components/FilmsRow';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler'
const {width} = Dimensions.get('window');

const HomeScreen = ({navigation, route}) => {

  return (
    <SafeAreaProvider style={{backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <ScrollView >
        <Pressable
        onPress={()=>{navigation.navigate('Search')}}
          style={{
            justifyContent:'center',
            alignSelf: 'center',
            height: 45,
            margin: 5,
            marginVertical: 10,
            backgroundColor: '#ededed',
            width: width * 0.95,
            borderRadius: 5,
            padding: 10,
          }}
        >
        <Text>Search Movie</Text>
        </Pressable>
        <FilmsRow title={'Top Rated'} query={'top_rated'} />
        <FilmsRow title={'Popular'} query={'popular'} />
        <FilmsRow title={'Up Coming'} query={'upcoming'} />
        <FilmsRow title={'Now Playing'} query={'now_playing'} />
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
