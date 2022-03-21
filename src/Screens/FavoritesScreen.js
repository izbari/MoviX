import {StyleSheet, Text,ScrollView, View,FlatList, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
import FavoriteFilmCard from '../Components/FavoriteFilmCard';
import { useSelector } from 'react-redux';

const FavoriteScreen = () => {
  const favorites = useSelector(state => state.filmFavoriteList.favoriteFilms);
  console.log("favorites -> ", favorites);
  return (
    <View style={{flex: 1,padding:10}}>
      <FlatList 
      data={favorites}
      renderItem={({item})=>(<FavoriteFilmCard item={item}/>)}
      keyExtractor={item=>item.id}
      />
    </View>
  );
};
const WatchlistScreen = () => {
 
  return (
      <View style={{flex: 1,padding:10}}>
     
      </View>
  );
};
export {FavoriteScreen, WatchlistScreen};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  movieName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieTime: {
    color: '#989898',
    fontSize: 13,
    marginTop: 5,
    fontWeight: 'bold',
  },
  movieGenre: {
    color: '#989898',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  movieRate: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  movieOverview: {
    fontSize: 12,
    marginTop: 10,
    color: '#4e4e4e',
  },
});
