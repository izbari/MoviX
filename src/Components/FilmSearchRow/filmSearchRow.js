import {View, Text, FlatList, ActivityIndicator,Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useSearch } from '../../Utils/searchUtil';
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
      const data = await useSearch(url);
      setFilms(data);
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
    <View style={{flex:1,paddingTop:5}}>
      <FlatList
      ItemSeparatorComponent={() => <View style={{height:1,backgroundColor:'#ededed'}}/>}
        ListHeaderComponent={() =>
          !search && (
            <Text style={{marginLeft: 15,marginVertical:5, fontWeight: 'bold',color:'#808080'}}>Trending</Text>
          )
        }
        data={films}
        renderItem={({item}) => {
          return <FilmSearchCard item={item} />;
        }}
        ListEmptyComponent={() => (
          <View
            style={{
              marginTop: Dimensions.get('window').height / 5 ,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="alert" size={150} color="#c6c6c6" />
            <Text style={{fontWeight: 'bold', fontSize: 20,color:'#c6c6c6'}}>
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
