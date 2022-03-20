import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './filmCard.style';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-ionicons';
const FilmCard = ({item, customMargin}) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('FilmScreen', {filmId: item.id});
      }}
      style={[styles.cardContainer, customMargin && {margin: customMargin}]}>
      <>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: `http://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}>
          <View style={styles.imageBackdrop}></View>
        </ImageBackground>
        <View style={{position: 'absolute', top: 5, right: 10}}>
          <TouchableOpacity>
            <Icon name="heart-empty" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="add-circle-outline" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </>
    </TouchableHighlight>
  );
};

export default FilmCard;
