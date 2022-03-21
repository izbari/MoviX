import {Text, View, Image} from 'react-native';
import React, {useState, useCallback} from 'react';
import Icon from 'react-native-ionicons';
const filmReview = ({item}) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };
  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);
  let path = '' + item.author_details.avatar_path;
  let check = path.includes('http');
  if (path.length == 4) {
    path = `https://ui-avatars.com/api/?name=${item.author}`;
  } else {
    path = path.substring(1);
    path = check ? path : 'https://image.tmdb.org/t/p/w500/' + path;
  }

  return (
    <View style={{backgroundColor:'#fafafa',
    
    margin:4,
  }}>
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
          marginBottom: 0,
          padding: 5,
          
          paddingBottom: 0,
        }}>
        <Image
          onProgress={e => console.log(e)}
          resizeMode="cover"
          style={{width: 50, height: 50, borderRadius: 100}}
          source={{
            uri: `${path}`,
          }}
        />
        <View style={{padding: 10}}>
          <Text style={{color: 'black'}}>{item.author}</Text>
          <Text style={{fontSize: 10}}>
            {'@' + item.author_details.username}
          </Text>
        </View>
       {item.author_details.rating && <View
          style={{
            position: 'absolute',
            top: 10,
            right: 20,
            flexDirection: 'row',
          }}>
          
         <Text style={{color: 'black', fontSize: 15,alignSelf:'center'}}>
            {item.author_details.rating + " "} 
          </Text>
           <Icon name="star" color={'#ffb900'} size={24} />
        </View>}
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
          padding: 5,
          paddingHorizontal: 10,
        }}>
        <View>
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 4}
            style={{lineHeight: 18}}>
            {item.content}
          </Text>

          {lengthMore ? (
            <Text
              onPress={toggleNumberOfLines}
              style={{
                color: '#0aa2ff',
                opacity: 0.8,
                textDecorationLine: 'underline',
              }}>
              {textShown ? 'Read less' : 'Read more'}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default filmReview;
