import {
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
import FavoriteFilmCard from '../Components/FavoriteFilmCard';
import {useSelector} from 'react-redux';
import { connect } from 'react-redux';
import { getFavorites,getWatchlists } from '../Models/reselect';
const EmptyListComponent = ({navigation, text}) => {
  let content = '' + text;
  content = content.split('!');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        {content[0]}
      </Text>
      <Icon name="sad" size={150} color="tomato" />
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'grey'}}>
        {content[1]}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
        android_ripple={{color: '#fff'}}>
        <Text style={styles.buttonText}>BROWSE MOVIES</Text>
      </Pressable>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    favorites: getFavorites(state.filmFavoriteList.favoriteFilms),
    watchlists : getWatchlists(state.filmWatchList.watchList)
  };
};
const FavoriteView = ({navigation,favorites}) => {
  console.log("favorites---->",favorites)
  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList
        data={favorites}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item}) => <FavoriteFilmCard item={item} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <EmptyListComponent
            navigation={navigation}
            text={'Your Favorite list is empty!Add movies you like'}
          />
        )}
      />
    </View>
  );
};
const WatchlistView = ({navigation,watchlists}) => {
  console.log("watchlist---->",watchlists)
  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList
        data={watchlists}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item}) => <FavoriteFilmCard item={item} type="watchlist" />}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <EmptyListComponent
            navigation={navigation}
            text={'Your Watch list is empty!Add movies you wonder'}
          />
        )}
      />
    </View>
  );
};
const FavoriteScreen= connect(mapStateToProps)(FavoriteView);
const WatchlistScreen= connect(mapStateToProps)(WatchlistView);
export {FavoriteScreen,WatchlistScreen}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 50,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 10,
    backgroundColor: 'tomato',
  },
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
