import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native';


const FavCard = ({item}) => (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <Image
        resizeMode="cover"
        style={styles.tinyLogo}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        }}
      />
     <TouchableOpacity
     onPress={()=>{console.warn("first")}}
     style={{position:'absolute',top:20,right:20,width:25,height:25,zIndex:2}}
     >
     <Icon name='heart' size={24} color='red'  />
     </TouchableOpacity>
      <View style={{flex: 1, padding: 10, marginLeft: 5}}>
        <Text style={styles.movieName}>{item.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.movieTime}>87 min |</Text>
          <Text style={styles.movieGenre}> Action</Text>
        </View>

        <Text style={styles.movieRate}>⭐ {item.average_rate}</Text>

        <View style={{flex: 1}}>
          <Text style={styles.movieOverview} numberOfLines={3}>
            {film.overview}
          </Text>
        </View>
      </View>
    </View>
  );
  export default FavCard;