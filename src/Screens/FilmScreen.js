import React, {useRef, useState, useEffect} from 'react';
import {
  Animated,
  Easing,
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FilmReviewContainer from '../Components/FilmReviewContainer';
import axios from 'react-native-axios';
import Icon from 'react-native-ionicons';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function FilmScreen({navigation,route}) {
  
  const HEADER_HEIGHT_EXPANDED = 140;
  const HEADER_HEIGHT_NARROWED = 60;


  
  
  const AnimatedImageBackground = Animated.createAnimatedComponent(
    ImageBackground
  );
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [film, setFilm] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);
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
    <SafeAreaProvider>
      <View style={{flex:1,bottomMargin:insets.top,}}>
        <StatusBar barStyle="light-content" />

        {/* Back button */}
      
           
          <Icon onPress={()=>{navigation.goBack()}}name="arrow-dropdown-circle" color="#fff" size={30}
          style={{
            zIndex: 10,
            position: 'absolute',
            top:  15,
            left: 25,
            height: 45,
            width: 45,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }} />

        {/* Refresh arrow */}
      

        {/* Name + tweets count */}
        <Animated.View
          style={{
            
            flex:1,
            zIndex: 2,
            position: 'absolute',
            left: 0,
            right: 0,
            alignItems: 'center',
            opacity: scrollY.interpolate({
              inputRange: [0, 50,150],
              outputRange: [1, -1 ,1],
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
              width:'90%',
             
              
              flexDirection: 'row',
              alignSelf:'flex-end',
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
            style={{flex:1,opacity:10,backgroundColor:'rgba(0,0,0, 0.25)' 
        
            ,position:'absolute',top:0,left:0,right:0,bottom:0}}>
          

            </View>
        </AnimatedImageBackground>

        {/* Tweets/profile */}
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
                  alignItems: 'center',
                  margin: 15,
                }}>
                <Icon name="calendar" size={20} color="grey" />
                <Text style={{fontSize: 14}}>{'  ' + film.release_date}</Text>
              </View>
              <View
                style={{
                  height: 1,
                  width: '95%',
                  backgroundColor: '#8fa5b9',
                  marginBottom: 10,
                  alignSelf: 'center',
                }}></View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingHorizontal: 10,
                  color: 'black',
                }}>
                Overview
              </Text>
              <Text style={{fontSize: 14, padding: 10, color: 'black'}}>
                {film.overview}
              </Text>
              <View
                style={{
                  height: 1,
                  width: '95%',
                  backgroundColor: '#8fa5b9',
                  marginTop: 5,
                  alignSelf: 'center',
                }}></View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    padding: 10,
                    color: 'black',
                  }}>
                  Reviews
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    padding: 10,
                    color: 'black',
                    marginRight: 10,
                  }}>
                  {reviewCount}
                </Text>
              </View>
              <FilmReviewContainer
                filmId={film.id}
                setReviewCount={setReviewCount}
              />
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
export default FilmScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    color: 'black',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -3,
  },
  tweetsCount: {
    fontSize: 13,
  },
  tweet: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
  },
});
