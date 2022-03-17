import { StyleSheet, Text, View ,ActivityIndicator,Dimensions} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'react-native-axios';
import FilmsRow from '../Components/FilmsRow'
import Searchbar from '../Components/Searchbar'
import { SafeAreaProvider } from 'react-native-safe-area-context';
const {width} = Dimensions.get('window')
const SearchScreen = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState([{}]);
  useEffect( () => {
    fetchFilms();
  }, [])
 
  const fetchFilms = async() => { 
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=3f03a07ac6044c1e5803a64814e95d31&language=en-US&page=1"
    const data = 
    await axios.get(url);
    setLoading(false)
    console.log(data.data.results)
    setFilms(data.data.results);
    
  }
  return (
    <SafeAreaProvider>
   <Searchbar
        onIconPress={() => getData(search)}
        icon={'arrow-left'}
        style={{
          marginTop: 15,
          alignSelf: 'center',
          height: 45,
          margin: 5,
          marginBottom: 0,
          backgroundColor: 'white',
          width: width * 0.9,
          borderRadius: 10,
        }}
        inputStyle={{fontSize: 15}}
        placeholder="Type Something ..."
        onChangeText={setSearch}
        value={search}
      />      
      {!loading ? <FilmsRow title={'Top Rated'} data={films}/>: 
      <ActivityIndicator size="large" color="#0000ff" />}
      <FilmsRow title={'Top Rated'} data={films}/>
      <FilmsRow title={'Top Rated'} data={films}/>
      <FilmsRow title={'Top Rated'} data={films}/>
    </SafeAreaProvider>
  )
}

export default SearchScreen;
