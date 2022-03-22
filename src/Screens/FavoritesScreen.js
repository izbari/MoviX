import {StyleSheet, Text, Pressable, View, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
import FavoriteFilmCard from '../Components/FavoriteFilmCard';
import {connect} from 'react-redux';
import {getFavorites, getWatchlists} from '../Models/reselect';

const EmptyListComponent = ({navigation, text}) => {
  let content = '' + text;
  content = content.split('!');
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.emptyHeader}>{content[0]}</Text>
      <Icon name="sad" size={150} color="tomato" />
      <Text style={styles.subHeader}>{content[1]}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
        android_ripple={{color: '#fff', borderless: true}}>
        <Text style={styles.buttonText}>BROWSE MOVIES</Text>
      </Pressable>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    favorites: getFavorites(state.filmFavoriteList.favoriteFilms),
    watchlists: getWatchlists(state.filmWatchList.watchList),
  };
};
const FavoriteView = ({navigation, favorites}) => {
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
const WatchlistView = ({navigation, watchlists}) => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList
        data={watchlists}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item}) => (
          <FavoriteFilmCard item={item} type="watchlist" />
        )}
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
const FavoriteScreen = connect(mapStateToProps)(FavoriteView);
const WatchlistScreen = connect(mapStateToProps)(WatchlistView);
export {FavoriteScreen, WatchlistScreen};

const styles = StyleSheet.create({
  buttonContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  subHeader: {fontSize: 16, fontWeight: 'bold', color: 'grey'},
  emptyHeader: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  button: {
    borderRadius: 50,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 10,
    backgroundColor: 'tomato',
  },
});
