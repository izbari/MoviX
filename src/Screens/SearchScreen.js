import {
  Dimensions,
  Keyboard,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FilmSearchRow from '../Components/FilmSearchRow';
import Icon from 'react-native-ionicons';

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [check, setCheck] = useState(true);
  const [background, setBackground] = useState();
 
  const onFocus = () => {
    setBackground('white');
  };

  const onBlur = () => {
    setCheck(true);
    setBackground('#ededed');
  };
  return (
    <SafeAreaProvider style={{backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{padding:5}}
          onPress={() => {
           navigation.goBack();
          }}>
          <Icon name="arrow-back" size={24} color="grey" />
        </TouchableOpacity>
       <TextInput
          onBlur={() => onBlur()}
          onFocus={() => onFocus()}
          autoFocus={check}
          style={{
            flex:1,
            alignSelf: 'center',
            height: 45,
            margin: 5,
            padding: 10,
            backgroundColor: background,
            borderRadius: 5,
            padding: 10,
          }}
          inputStyle={{fontSize: 15}}
          placeholder="Search"
          onChangeText={setSearch}
          value={search}/>
        <TouchableOpacity
        style={{position:'absolute',top:16,right:20}}
        onPress={() => {
          setSearch('');
            Keyboard.dismiss();
          }}>
          <Icon name="close" size={24} color="grey" />
        </TouchableOpacity>
            <View>
       </View>
      </View>
      <FilmSearchRow search={search} />
    </SafeAreaProvider>
  );
};

export default SearchScreen;
