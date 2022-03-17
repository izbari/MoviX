import {StyleSheet, Text, View, Dimensions,TouchableOpacity,FlatList} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
import FilmCard from '../FilmCard/index';
import styles from './filmsRow.style'
const FilmsRow = ({title, data}) => {
  return (
    <View
      style={{width, backgroundColor: '#fff', padding: 10,elevation:10}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
        <Text style={styles.listHeader}>{title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color:'#2d6bff',fontWeight:'bold'}}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (<FilmCard item={item} />)}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default FilmsRow;
