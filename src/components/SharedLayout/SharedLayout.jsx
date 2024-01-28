import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './SharedLayout.module.css';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
