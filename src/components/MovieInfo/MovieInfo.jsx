import React from 'react';

const MovieInfo = ({ movieDetails }) => {
  const { title, release_date, vote_average, overview, poster_path, genres } =
    movieDetails;

  return (
    <div>
      <h1>Movie details</h1>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <ul>
        <h2>{title}</h2>
        <li>Release date: {release_date}</li>
        <li>Rating: {vote_average}</li>
        <li>{overview}</li>
        <li>
          Genres:{' '}
          {genres.map(genre => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </li>
      </ul>
    </div>
  );
};

export { MovieInfo };
