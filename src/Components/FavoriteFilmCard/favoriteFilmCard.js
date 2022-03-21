import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native';
import styles from './favoriteFilmCard.style';
import Icon from 'react-native-ionicons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {SearchFilmGenres} from '../../Constants';
const FavCard = ({item,type}) => {
  console.log(item)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return(
    <TouchableOpacity
      onPress={() => {navigation.navigate('FilmScreen', {filmId: item.id})}}
      activeOpacity={0.8}
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
        resizeMode="contain"
        style={styles.tinyLogo}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500'+item.poster_path,
        }}
      />
     <TouchableOpacity
     onPress={()=>{
      type== "watchlist" ? dispatch({type: 'REMOVE_TO_WATCHLIST', payload: {film:item}})
      :
      dispatch({type: 'REMOVE_TO_FAVORITE_LIST', payload: {film:item}})}}
     style={{position:'absolute',top:20,right:20,width:25,height:25,zIndex:2}}
     >
     <Icon name={type == "watchlist" ? 'bookmark' : 'heart'} size={28} color='tomato'  />
     </TouchableOpacity>
      <View style={{flex: 1, padding: 10, marginLeft: 5}}>
        <Text
      
        style={styles.movieName}>{item.title}</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.movieGenre}>
        {type == "watchlist" ?  Math.floor(item.runtime / 60) +
                    'h ' +
                    (item.runtime % 60) +
                    'm · ' +
                    item.genres
                    .map(genre => genre.name)
                    .join(', ')
                    :  item.genre_ids
                      .map(genreId => SearchFilmGenres[genreId])
                      .join(', ')}
              </Text>
        </View>

        <Text style={styles.movieRate}>⭐ {item.vote_average}</Text>

        <View style={{flex: 1}}>
          <Text style={styles.movieOverview} numberOfLines={3}>
            {item.overview}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );}
  export default FavCard;