import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import axios from 'react-native-axios';
import Icon from 'react-native-ionicons';
import FilmReviewContainer from '../Components/FilmReviewContainer';
function FilmScreen({navigation, route}) {
  const [film, setFilm] = useState(null);
  const [reviewCount, setReviewCount] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${route.params.filmId}?api_key=3f03a07ac6044c1e5803a64814e95d31&language=en-US`;
    const filmInfo = async () => {
      const {data} = await axios.get(url);
      setFilm(data);
      setLoading(false);
    };
    filmInfo();
  }, []);
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <ScrollView >
        
        <ImageBackground
          source={{uri: `https://image.tmdb.org/t/p/w500${film.backdrop_path}`}}
          style={{width: '100%', height: 200}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0, 0.4)',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="arrow-dropdown" color="#fff" size={24} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                  {film.title}
                </Text>

                <Text style={{fontSize: 14, color: '#fff', fontWeight: '500'}}>
                  {!loading
                    ? Math.floor(film.runtime / 60) +
                      'h ' +
                      (film.runtime % 60) +
                      'm · ' +
                      film?.genres.map(genre => genre.name).join(', ')
                    : ' '}
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                  {film.vote_average}
                </Text>
                <Icon name="star" color={'#ffb900'} size={20} />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 15}}>
          <Icon name="calendar" size={20} color="grey" />
          <Text style={{fontSize: 14}}>{'  ' + film.release_date}</Text>
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingHorizontal: 10}}>
          OverView
        </Text>
        <Text style={{fontSize: 14, padding: 10}}>{film.overview}</Text>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold',fontSize:24,padding:10}}>Reviews</Text>
        <Text style={{fontWeight:'bold',fontSize:24,padding:10}}>{reviewCount}</Text>
        </View>
        <FilmReviewContainer filmId={film.id} setReviewCount={setReviewCount}/>
        
      </ScrollView>
    </View>
  );
}
export default FilmScreen;
