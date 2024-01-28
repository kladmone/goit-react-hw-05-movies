import React from 'react';
import css from './MovieInfo.module.css';
const MovieInfo = ({ movieDetails }) => {
  const { title, release_date, vote_average, overview, poster_path, genres } =
    movieDetails;

  return (
    <div className={css.movieContainer}>
      <img
        className={css.movieImg}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <ul>
        <h2>{title}</h2>
        <li>Release date: {release_date}</li>
        <li>Rating: {vote_average}</li>
        <li>{overview}</li>
        <li>
          <p className={css.movieInformation}>
            Genres: {genres.map(item => item.name).join(', ')}
          </p>
        </li>
      </ul>
    </div>
  );
};

export { MovieInfo };
