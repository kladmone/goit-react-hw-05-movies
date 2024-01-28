// import { MovieList } from 'components/MoviesList/MovieList';
// import { useLocation } from 'react-router-dom';

// const Home = () => {
//   const location = useLocation();
//   return (
//     <div>
//       <h1>Tending today</h1>
//       <MovieList location={location} />
//     </div>
//   );
// };
// export default Home;
import { MovieList } from 'components/MoviesList/MovieList';
import { Loader } from '../components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/api';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const searchTrendingFilms = async () => {
      try {
        const resault = await fetchTrending();
        console.log(resault);
        setTrendingFilms(resault);
      } catch (error) {
        console.error(error);
      }
      setLoader(false);
    };
    searchTrendingFilms();
  }, []);

  return (
    <>
      <div>
        {loader && <Loader />}
        <h1>Tranding Today</h1>
        <MovieList movies={trendingFilms} location={location} />
      </div>
    </>
  );
};

export default Home;
