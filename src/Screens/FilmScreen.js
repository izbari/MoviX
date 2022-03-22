import React, {useRef, useState, useEffect} from 'react';
import {
  Animated,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  Linking,
  View,
} from 'react-native';
import FilmReviewContainer from '../Components/FilmReviewContainer';
import Icon from 'react-native-ionicons';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {ADD_TO_WATCH_LIST} from '../Models/filmWatchList/actions';
import {getWatchlists} from '../Models/reselect';
import axios from 'axios';
import FilmsRow from '../Components/FilmsRow';
import {API_KEY, MOVIE_ENDPOINT} from '@env';

const mapStateToProps = state => {
  return {
    watchList: getWatchlists(state.filmWatchList.watchList),
  };
};


function FilmScreen({watchList, navigation, route}) {
  const HEADER_HEIGHT_EXPANDED = 140;
  const HEADER_HEIGHT_NARROWED = 60;

  const dispatch = useDispatch();

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [film, setFilm] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trailerURl, setTrailerURl] = useState('')
  const [filmId, setFilmId] = useState(route.params.filmId);

  useEffect(() => {
    setFilmId(route.params.filmId);
  },[route.params.filmId]);
 
  useEffect(() => {
    const url = `${MOVIE_ENDPOINT}${filmId}?api_key=${API_KEY}&language=en-US`;
    const filmInfo = async () => {
      const {data} = await axios.get(url);
      setFilm(data);
      setLoading(false);
    };
    const videosUrl = 
    `${MOVIE_ENDPOINT}${filmId}/videos?api_key=${API_KEY}&language=en-US&page=1`;
    const trailerInfo = async () => {
      const {data} = await axios.get(videosUrl);
      setTrailerURl(data.results[0].key)
    }
   
    filmInfo();
    trailerInfo();
  }, []);


  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  const Seperator = () => (
    <View
    style={{
      height: 1,
      width: '95%',
      backgroundColor: '#ededed',
      marginVertical: 10,
      alignSelf: 'center',
    }}></View>
  )
  return (
    <SafeAreaProvider>
      <View style={{flexGrow: 1, bottomMargin: insets.top}}>
        <StatusBar barStyle="light-content" />

     

        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          name="arrow-dropdown-circle"
          color="#fff"
          size={30}
          style={styles.backButton}
        />

 
        <Animated.View
          style={{
            flex: 1,
            zIndex: 2,
            position: 'absolute',
            left: 0,
            right: 0,
            alignItems: 'center',
            opacity: scrollY.interpolate({
              inputRange: [0, 50, 150],
              outputRange: [1, -1, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [5, 140],
                  outputRange: [140, 5],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Animated.View
            style={{
              flex: 1,
              width: '90%',

              flexDirection: 'row',
              alignSelf: 'flex-end',
              justifyContent: 'space-evenly',
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
          </Animated.View>
        </Animated.View>

        {/* Banner */}
        <AnimatedImageBackground
          resizeMode={'contain'}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${film.backdrop_path}`,
          }}
          style={{
            flex: 1,
            aspectRatio: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
            transform: [
              {
                scale: scrollY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1.1, 1.6],
                }),
              },
            ],
          }}>
          <View
            style={styles.ghostImage}></View>
        </AnimatedImageBackground>

        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y: scrollY},
                },
              },
            ],
            {useNativeDriver: true},
          )}
          style={{
            zIndex: 3,
            marginTop: HEADER_HEIGHT_NARROWED,
            paddingTop: HEADER_HEIGHT_EXPANDED,
          }}>
          <View style={[styles.container, {backgroundColor: '#fff'}]}>
            <View
              style={[
                styles.container,
                {
                  paddingHorizontal: 20,
                },
              ]}></View>

            <View style={styles.container}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  width: '95%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',

                    margin: 15,
                    padding: 5,
                  }}>
                  <Icon name="calendar" size={20} color="tomato" />
                  <Text style={{fontSize: 14, color: 'grey'}}>
                    {'  ' + film.release_date}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch({type: ADD_TO_WATCH_LIST, payload: {film: film}});
                  }}
                  style={styles.addButton}>
                  {!watchList.some(_film => _film.id == film.id) && (
                    <Text style={{fontWeight: 'bold', color: '#fff'}}>
                      Add to watchlist{' '}
                    </Text>
                  )}
                  <Icon
                    name={
                      watchList.some(_film => _film.id == film.id)
                        ? 'checkmark'
                        : 'add'
                    }
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              <Seperator />
              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    paddingHorizontal: 10,
                    color: 'black',
                  }}>
                  Overview
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    padding: 10,
                    color: 'grey',
                    lineHeight: 21,
                  }}>
                  {film.overview}
                </Text>
              </View>
              <View style={{padding: 10}}>
              <Seperator />

                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      `https://www.youtube.com/watch?v=${trailerURl}`,
                    )
                  }
                  style={styles.ytButton}>
                  <Icon name="logo-youtube" size={24} color="tomato" />
                  <Text style={{fontWeight: 'bold', color: 'tomato',fontSize:16}}>
                    {'   '}
                    Watch Trailer{' '}
                  </Text>
                </TouchableOpacity>
                <Seperator />
                <FilmsRow title={'Recommendations'} filmId={filmId} />
                <Seperator />

                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    padding: 10,
                    color: 'black',
                  }}>
                  Reviews · {reviewCount}
                </Text>

                <View style={{marginBottom: 150}}>
                  <FilmReviewContainer
                    filmId={film.id}
                    setReviewCount={setReviewCount}
                  />
                </View>
              </View>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
export default connect(mapStateToProps)(FilmScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton:{
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'tomato',
    padding: 5,
    paddingHorizontal: 20,
  },
  ghostImage:{
    flex: 1,
    opacity: 10,
    backgroundColor: 'rgba(0,0,0, 0.25)',

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ytButton:{
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'tomato',
    padding: 5,
    height:50,
    marginVertical:10,
    paddingHorizontal: 20,
  },
 backButton:{
  zIndex: 10,
  position: 'absolute',
  top: 15,
  left: 25,
  height: 45,
  width: 45,
  borderRadius: 15,
  alignItems: 'center',
  justifyContent: 'center',
}
});
