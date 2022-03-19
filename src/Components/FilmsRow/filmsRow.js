import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const {width, height} = Dimensions.get('window');
import FilmCard from '../FilmCard/index';


import styles from './filmsRow.style';
import axios from 'react-native-axios';


const FilmsRow = ({title,query}) => {
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
  };
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={{width, backgroundColor: '#fff', padding: 5, elevation: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Text style={styles.listHeader}>{title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color: '#2d6bff', fontWeight: 'bold'}}>SEE ALL</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={films}
        renderItem={({item}) => <FilmCard item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default FilmsRow;
