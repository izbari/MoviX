import {Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './filmSearchCard.style';
import {SearchFilmGenres} from '../../Constants';
import Icon from 'react-native-ionicons';
const filmSearchCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('FilmScreen', {filmId: item.id});
      }}>
      <View style={{flexDirection: 'row', margin: 5, padding: 5}}>
        <Image
          resizeMode="cover"
          style={{width: 50, height: 55, borderRadius: 10, margin: 3}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
        <View style={{padding: 5}}>
          <Text style={{color: 'black', fontWeight: '500'}}>
            {item.original_title}
          </Text>
          <View style={styles.subtitleContainer}>
            <Icon name="star" color={'#ffb900'} size={20} />

            <Text style={styles.subtitles}>{'  ' + item.vote_average} · </Text>
            <Text style={{fontSize: 12, color: 'grey'}}>
              {item.genre_ids
                .map(genreId => SearchFilmGenres[genreId])
                .join(', ')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default filmSearchCard;
