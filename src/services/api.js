import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3';
const key = '2c20fbd96e2b6495aa6eea116921e2ed';
const AUTH_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzIwZmJkOTZlMmI2NDk1YWE2ZWVhMTE2OTIxZTJlZCIsInN1YiI6IjY1YTE2NDExMjE2MjFiMDEzMjU5NmM5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.69L9j4e3GZnO09kSS6bHy2r5ozYNRJaA0dWx4XAqvrY';

const endUrl = {
  trending: '/trending/movie/day',
  details: '/movie/ ',
  credits: '/credits',
  reviews: '/reviews',
  wordSearch: '/search/movie',
};

export const fetchTrending = async () => {
  try {
    const trendingFilms = await axios.get(
      `${baseURL}${endUrl.trending}?api_key=${key}&page=1&language=en-US&include_adult=false`
    );
    return trendingFilms.data.results;
  } catch (error) {
    console.log('Error', error.message);
  }
};

// export const fetchMovieDetails = async movieId => {
//   try {
//     const movieDetails = await axios.get(
//       `${baseURL}/movie/${movieId}?api_key=${key}&language=en-US`
//     );
//     return movieDetails;
//   } catch (error) {
//     console.error('Error fetching movie details', error);
//     throw error;
//   }
// };
export const fetchMovieDetails = async movieId => {
  const options = {
    method: 'GET',
    url: `${baseURL}/movie/${movieId}`,
    params: {
      language: 'en-US',
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };
  try {
    const response = await axios.get(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error during fetch:', error);
  }
};
