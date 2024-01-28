import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import css from '../styles/styles.module.css';
import { Loader } from '../components/Loader/Loader';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieDetails = async () => {
      try {
        const movieInfo = await fetchMovieDetails(movieId);
        setMovieDetails(movieInfo);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div className={css.movieContainer}>
      <div className={css.goBackContainer}>
        <Link className={css.goBack} to={backLinkRef.current}>
          Go back
        </Link>
      </div>
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      <div className={css.additionalDiv}>
        <p className={css.additional}>Additional information</p>
        <ul className={css.additionalList}>
          <li>
            <Link
              to="cast"
              state={{ from: location }}
              className={css.additionalItem}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.additionalItem}>
              Revievs
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
