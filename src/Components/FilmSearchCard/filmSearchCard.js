import {Text, Image, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const filmSearchCard = ({item}) => {
  const navigation = useNavigation();
  const popularity = '' + item.popularity;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('FilmScreen', {filmId: item.id});
      }}>
      <View style={{flexDirection: 'row', margin: 5, padding: 5}}>
        <Image
          resizeMode="cover"
          style={{width: 50, height: 50, borderRadius: 10, margin: 5}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
        <View style={{padding: 5}}>
          <Text>{item.original_title}</Text>
          <Text>{popularity.split('.')[0]}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default filmSearchCard;
