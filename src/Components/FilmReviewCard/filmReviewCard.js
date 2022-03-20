import {Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
const filmReview = ({item}) => {

  let path = '' +item.author_details.avatar_path;
  let check = path.includes('http');
  if(path.length == 4){
    path = `https://ui-avatars.com/api/?name=${item.author}`
   
  }else{
 path = path.substring(1);
 path= check ? path : "https://image.tmdb.org/t/p/w500/"+path;
  }
 
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 5, padding: 5}}>
        <Image
          resizeMode="cover"
          style={{width: 50, height: 50, borderRadius: 100}}
          source={{
            uri:`${path}`  ,
          }}
        />
        <View style={{padding: 5}}>
          <Text style={{color: 'black'}}>{item.author}</Text>
          <Text style={{fontSize: 10}}>
            {'@' + item.author_details.username}
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 20,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'black', fontSize: 15}}>
            {item.author_details.rating}
          </Text>
          <Icon name="star" color={'#ffb900'} size={24} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
          padding: 5,
          paddingHorizontal: 10,
        }}>
        <Text style={{color: 'black'}}>{item.content}</Text>
      </View>
    </View>
  );
};

export default filmReview;
