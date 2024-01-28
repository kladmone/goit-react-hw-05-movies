import { Link } from 'react-router-dom';

const MovieList = ({ movies, location }) => {
  // if (!movies || !Array.isArray(movies)) {
  //   return null;
  // }

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { MovieList };
