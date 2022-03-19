import {Text, View, Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './filmCard.style';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-ionicons';
const FilmCard = ({item}) => {
  const navigation=useNavigation();
  return (
    
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('FilmScreen', { filmId:item.id });
      }}
      style={styles.cardContainer}>
     <>
     <Image style={styles.image}
          resizeMode='cover'
          source={{
            uri: `http://image.tmdb.org/t/p/w500${item.poster_path}`,
          }} />
          <TouchableOpacity
          style={{position: 'absolute', top: 5, right: 10,}} >
          <Icon
             name="heart-empty"
             size={26}
             color="#fff"
           />
          </TouchableOpacity>
     </>
    </TouchableHighlight>
  );
};

export default FilmCard;
