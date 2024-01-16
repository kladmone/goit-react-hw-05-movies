import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const data = await fetchTrending();
        setMovies(data);
      } catch (error) {}
    };
    trendingMovies();
  }, []);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { MovieList };
