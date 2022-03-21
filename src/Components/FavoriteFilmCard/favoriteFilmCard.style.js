import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    tinyLogo: {
      width:'35%',
      height: null,
      borderRadius: 8,
    },
    movieName: {
      fontSize: 18,
      fontWeight: 'bold',
      width: '80%',
    },
    movieTime: {
      color: '#989898',
      fontSize: 13,
      marginTop: 5,
      fontWeight: 'bold',
    },
    movieGenre: {
      color: '#989898',
      fontSize: 12,
      marginTop: 5,
      fontWeight: 'bold',
    },
    movieRate: {
      alignSelf: 'flex-start',
      marginTop: 5,
    },
    movieOverview: {
      fontSize: 12,
      marginTop: 10,
      color: '#4e4e4e',
    },
  });
  export default styles;