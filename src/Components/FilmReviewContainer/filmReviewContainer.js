import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FilmReviewCard from '../FilmReviewCard';
import {API_KEY, MOVIE_ENDPOINT} from '@env';
const filmReviewContainer = ({filmId, setReviewCount}) => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US`;
    const filmReview = async () => {
      const {data} = await axios.get(url);
      setReview(data.results);
      setReviewCount(data.results.length);
    };
    filmReview();
  }, []);
  return (
    <View style={{flex: 1}}>
      {review.map((item, index) => {
        return <FilmReviewCard item={item} key={index} />;
      })}
    </View>
  );
};

export default filmReviewContainer;
