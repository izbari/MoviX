import {
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Text,
  RefreshControl,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import FilmsRow from '../Components/FilmsRow';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Icon from 'react-native-ionicons';
import {SearchFilmGenres} from '../Constants';

const {width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  console.log(SearchFilmGenres);
  const [refresh, setRefresh] = React.useState(false);
  const refreshing = () => {
    setRefresh(true);
    setRefresh(false);
  };
  return (
    <SafeAreaProvider style={{backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView
        flex={1}
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={refresh}
            onRefresh={() => refreshing()}
          />
        }>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Search');
          }}
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            height: 45,
            margin: 5,
            marginVertical: 10,
            backgroundColor: '#ededed',
            width: width * 0.95,
            borderRadius: 5,
            padding: 10,
            paddingLeft: 15,
            alignItems: 'center',
          }}>
          <Icon name="search" size={24} color="grey" />
          <Text> Search Movie</Text>
        </TouchableOpacity>

        <FilmsRow title={'Top Rated'} query={'top_rated'} />
        <FilmsRow title={'Popular'} query={'popular'} />
        <FilmsRow title={'Upcoming'} query={'upcoming'} />
        <FilmsRow title={'Now Playing'} query={'now_playing'} />
        <FilmsRow title={'Weekly Trends'} query={'trend'} />
        <View style={{margin: 25}}>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate('GenreTabs', {genres: SearchFilmGenres})
            }
            android_ripple={{color: '#fff', borderless: true}}>
            <Text style={styles.buttonText}>SEE MOVIE GENRES</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};
const CategoryScreen = ({route}) => {
  const {title, query} = route.params;

  return <FilmsRow title={title} query={query} showCategory={true} />;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    height: 50,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 10,
    backgroundColor: 'tomato',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
export {HomeScreen, CategoryScreen};
