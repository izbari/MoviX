import {StyleSheet, Text,ScrollView, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
const film = {
  genre_ids: [28, 12, 878],
  original_language: 'en',
  original_title: 'Spider-Man: No Way Home',
  poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  video: false,
  vote_average: 8.2,
  vote_count: 9831,
  overview:
    'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
  release_date: '2021-12-15',
  title: 'Spider-Man: No Way Home',
  id: 634649,
  adult: false,
  backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
  popularity: 9675.798,
  media_type: 'movie',
};
const FavoriteScreen = () => {
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
const WatchlistScreen = () => {
  return (
    <View>
      <Text>WatchlistScreen</Text>
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
