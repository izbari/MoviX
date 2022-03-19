import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-ionicons';
const filmReview = ({item}) => {
  return (
    <View >
      <View style={{flexDirection: 'row', margin: 5, padding: 5}}>
        <Image
          resizeMode="cover"
          style={{width: 50, height: 50, borderRadius: 100}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}`,
          }}
        />
        <View style={{padding: 5}}>
          <Text>{item.author}</Text>
          <Text style={{fontSize: 10}}>
            {'@' + item.author_details.username}
          </Text>
        </View>
        <View style={{position:'absolute',top:5,right:20,flexDirection:'row'}}>
          <Text style={{color:'black',fontSize:15}}>{item.author_details.rating}</Text>
          <Icon name="star" color={'#ffb900'} size={24} />
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 5, padding: 5,paddingHorizontal:10}}>
        <Text>{item.content}</Text>
      </View>
    </View>
  );
};

export default filmReview;
