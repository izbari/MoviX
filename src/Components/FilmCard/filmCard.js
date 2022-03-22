import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './filmCard.style';
import {useNavigation} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';
import Icon from 'react-native-ionicons';
import {getFavorites} from '../../Models/reselect';

const mapStateToProps = state => {
  return {
    favList: getFavorites(state.filmFavoriteList.favoriteFilms),
  };
};

const FilmCard = ({item, customMargin, favList, customWidth}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.push('FilmScreen', {filmId: item.id});
      }}
      style={[styles.cardContainer, customMargin && {margin: customMargin}]}>
      <>
        <ImageBackground
          style={[styles.image, customWidth && {width: customWidth}]}
          resizeMode="cover"
          imageStyle={{borderRadius: 10}}
          source={{
            uri: `http://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}>
          <View style={styles.imageBackdrop}></View>
        </ImageBackground>
        <View style={{position: 'absolute', top: 5, right: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              dispatch({
                type: 'ADD_TO_FAVORITE_LIST',
                payload: {film: item},
              });
            }}>
            <Icon
              name={
                favList.some(fav => fav.id === item.id)
                  ? 'heart'
                  : 'heart-empty'
              }
              size={26}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default connect(mapStateToProps)(
  React.memo(FilmCard, (prevProps, nextProps) => {
    return (
      prevProps?.favList.includes(prevProps.item) ===
      nextProps?.favList.includes(nextProps.item)
    );
  }),
);
