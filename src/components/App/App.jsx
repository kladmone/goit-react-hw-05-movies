import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="/cast" element={<Cast />} /> */}
            {/* <Route path="/reviews" element={<Reviews />} /> */}
          </Route>
        </Routes>
      </main>
    </div>
  );
};
