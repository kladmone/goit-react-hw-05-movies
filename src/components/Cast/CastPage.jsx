import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchForCast } from 'services/api';
import css from './CastPage.module.css';
const CastPage = () => {
  const { movieId } = useParams();
  const [actorsCast, setActorsCast] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const searchActorsCast = async () => {
      try {
        const data = await searchForCast(movieId);
        setActorsCast(data);
      } catch (error) {
        console.error('Error', error.message);
      }
      setLoader(false);
    };
    searchActorsCast();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <ul className={css.castList}>
        {actorsCast?.map(actor => (
          <li key={actorsCast.some(child => child.id === actor.id)}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : 'https://sneg.top/uploads/posts/2023-06/1687937930_sneg-top-p-avatarki-vatsapa-instagram-9.png'
              }
              alt={actor.name}
              className={css.actorImg}
            />
            <div>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CastPage;
