import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const {width, height} = Dimensions.get('window');
import FilmCard from '../FilmCard/index';
import Icon from 'react-native-ionicons';

import styles from './filmsRow.style';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const FilmsRow = ({title,query,showCategory}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([{}]);
  useEffect(() => {
    fetchFilms();
  }, []);
  const fetchFilms = async () => {
    const url =
      `https://api.themoviedb.org/3/movie/${query}?api_key=3f03a07ac6044c1e5803a64814e95d31&language=en-US&page=1`;
    const data = await axios.get(url);
    setLoading(false);
    setFilms(data.data.results);
    return data;
  };
  // if (loading) {
  //   return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //     <ActivityIndicator size="large" color="#0000ff" />
  //   </View>)
  // }
  return (
    <View style={{width, backgroundColor: '#fff', padding: 5, elevation: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'space-between',
          margin: 10,
        }}>
         {showCategory &&  <Icon onPress={()=>{navigation.goBack()}} name="arrow-back" color="#000" size={24} />}
        <Text style={styles.listHeader}>{title}</Text>
       
        <TouchableOpacity 
        
        onPress={() => {navigation.navigate('CategoryScreen',{title:title,query:query})}}>
          {!showCategory &&  <Text style={{color: '#2d6bff', fontWeight: 'bold'}}>SEE ALL</Text>}
        </TouchableOpacity>
      </View>
      {showCategory ?
      <FlatList
        data={films}
        renderItem={({item}) => <FilmCard item={item} customMargin={10} customWidth={170}  />}
        keyExtractor={item => item.id + Math.random()}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{alignItems:'center'}}
      /> :
       <FlatList
        data={films}
        renderItem={({item}) => <FilmCard item={item} />}
        keyExtractor={item => item.id + Math.random()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />}
    </View>
  );
};
export default FilmsRow;
