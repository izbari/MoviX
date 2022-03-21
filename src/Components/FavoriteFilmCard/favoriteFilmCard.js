import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native';
import styles from './favoriteFilmCard.style';
import Icon from 'react-native-ionicons';
import { useDispatch } from 'react-redux';
const FavCard = ({item}) => {

  const dispatch = useDispatch();

  return(
    <TouchableOpacity
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
     onPress={()=>{dispatch({type: 'REMOVE_TO_FAVORITE_LIST', payload: {title:item.title}})}}
     style={{position:'absolute',top:20,right:20,width:25,height:25,zIndex:2}}
     >
     <Icon name='heart' size={24} color='red'  />
     </TouchableOpacity>
      <View style={{flex: 1, padding: 10, marginLeft: 5}}>
        <Text
      
        style={styles.movieName}>{item.title}</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.movieGenre}>
                {Math.floor(item.runtime / 60) +
                    'h ' +
                    (item.runtime % 60) +
                    'm · ' +
                    item?.genres.map(genre => genre.name).join(', ')}
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