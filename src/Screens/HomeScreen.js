import {
  Dimensions,
  StatusBar,
  Pressable,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React from 'react';
import FilmsRow from '../Components/FilmsRow';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const {width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
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
        <Pressable
          onPress={() => {
            navigation.navigate('Search');
          }}
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            height: 45,
            margin: 5,
            marginVertical: 10,
            backgroundColor: '#ededed',
            width: width * 0.95,
            borderRadius: 5,
            padding: 10,
          }}>
          <Text>Search Movie</Text>
        </Pressable>

        <FilmsRow title={'Top Rated'} query={'top_rated'} refresh={refresh} />
        <FilmsRow title={'Popular'} query={'popular'} refresh={refresh} />
        <FilmsRow title={'Up Coming'} query={'upcoming'} refresh={refresh} />
        <FilmsRow
          title={'Now Playing'}
          query={'now_playing'}
          refresh={refresh}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
};
const CategoryScreen = ({route}) => {
  const {title, query} = route.params;
  return <FilmsRow title={title} query={query} showCategory={true} c />;
};

export {HomeScreen, CategoryScreen};
