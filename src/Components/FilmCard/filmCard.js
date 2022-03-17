import {Text, View, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './filmCard.style';
const FilmCard = ({item}) => {
  return (
    <TouchableHighlight 
      onPress={() => {
        console.warn('FilmCard pressed');
      }}
      style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: `http://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
      />
    </TouchableHighlight>
  );
};

export default FilmCard;
