import { Loader } from '../components/Loader/Loader';
import { MovieList } from '../components/MoviesList/MovieList';
import { SearchMovie } from '../components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/api';

const Movie = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const paramsSearch = searchParams.get('searchValue');
  const [query, setQuery] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!paramsSearch) {
      setLoader(false);
      return;
    }
    const searchMovieReviews = async () => {
      try {
        const data = await getSearchMovies(paramsSearch);
        setQuery(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    searchMovieReviews();
  }, [paramsSearch]);

  return (
    <>
      <SearchMovie />
      {loader ? (
        <Loader />
      ) : (
        query && <MovieList movies={query} location={location} />
      )}
    </>
  );
};

export default Movie;
