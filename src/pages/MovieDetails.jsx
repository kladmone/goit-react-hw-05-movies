import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieDetails = async () => {
      try {
        const movieInfo = await fetchMovieDetails(movieId);
        console.log(movieInfo);
        setMovieDetails(movieInfo);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return <MovieDetails movieDetails={movieDetails} />;
};

export default MovieDetails;
