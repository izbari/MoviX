import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  rightContainer: {flex: 1, padding: 10, marginLeft: 5},
  tinyLogo: {
    width: '35%',
    height: null,
    borderRadius: 8,
  },
  movieName: {
    color: 'black',
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
    color: 'grey',
  },
  movieOverview: {
    fontSize: 12,
    marginTop: 10,
    color: '#4e4e4e',
  },
});
export default styles;
