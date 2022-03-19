import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'react-native-axios';
import FilmSearchCard from '../FilmSearchCard';
import Icon from 'react-native-ionicons';
const filmSearchRow = ({search}) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url =
      search.length > 0
        ? `https://api.themoviedb.org/3/search/movie?api_key=3f03a07ac6044c1e5803a64814e95d31&query=${search}&language=en-US&page=1&include_adult=false`
        : `https://api.themoviedb.org/3/trending/movie/week?api_key=3f03a07ac6044c1e5803a64814e95d31`;
    const filmReview = async () => {
      const {data} = await axios.get(url);
      setFilms(data.results);
      setLoading(false);
    };
    filmReview();
  }, [search]);
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <View>
      <FlatList
        ListHeaderComponent={() =>
          !search && (
            <Text style={{marginLeft: 15, fontWeight: 'bold'}}>Trending</Text>
          )
        }
        data={films}
        renderItem={({item}) => {
          return <FilmSearchCard item={item} />;
        }}
        ListEmptyComponent={() => (
          <View
            style={{
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="alert" size={100} color="grey" />
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              No Film Found
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default filmSearchRow;
