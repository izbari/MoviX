import {StyleSheet, Text,ScrollView, View,FlatList, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
import FavoriteFilmCard from '../Components/FavoriteFilmCard';
const mapStateToProps = (state, props) => {
  const {filmFavoriteList} = state;
  console.log("FAvorite -->",filmFavoriteList);
   return filmFavoriteList;
};

const mapDispatchToProps = (dispatch, props) => ({
 
 getFilmInfo: () => {
   dispatch({
     type: GET_REQUESTED_FILM,
     payload: {filmId:props.route.params.filmId},
   });
 },
});


const FavoriteScreen = () => {
  return (
    <View style={{flex: 1,padding:10}}>
      <FlatList 
      data={Favorites}
      renderItem={({item})=>{
        return <FavoriteFilmCard item={item}/>
      }}
      keyExtractor={item=>item.id}
      />
    </View>
  );
};
const WatchlistScreen = () => {
  const FavCard = () => (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <Image
        resizeMode="cover"
        style={styles.tinyLogo}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        }}
      />
     <TouchableOpacity
     onPress={()=>{console.warn("first")}}
     style={{position:'absolute',top:20,right:20,width:25,height:25,zIndex:2}}
     >
     <Icon name='heart' size={24} color='red'  />
     </TouchableOpacity>
      <View style={{flex: 1, padding: 10, marginLeft: 5}}>
        <Text style={styles.movieName}>Ultraman</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.movieTime}>87 min |</Text>
          <Text style={styles.movieGenre}> Action</Text>
        </View>
  
        <Text style={styles.movieRate}>⭐ 8.5</Text>
  
        <View style={{flex: 1}}>
          <Text style={styles.movieOverview} numberOfLines={3}>
            {film.overview}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
      <View style={{flex: 1,padding:10}}>
       <ScrollView
       scrollEventThrottle={16}
       showsVerticalScrollIndicator={false}
       >
       <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard /> 
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard /> 
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
       </ScrollView>
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
