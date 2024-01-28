import { useSearchParams } from 'react-router-dom';
import css from './Searchmovie.module.css';
import { useState } from 'react';

const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsSearch = searchParams.get('searchValue');
  const [value, setInputValue] = useState(paramsSearch || '');

  const onFormSubmit = event => {
    event.preventDefault();
    const searchData = event.currentTarget.elements.search.value;
    setSearchParams({ searchValue: searchData });
  };

  const onInputValue = event => {
    const value = event.currentTarget.value;
    setInputValue(value);
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className={css.searchForm}>
        <label className={css.formLabel}>
          <input
            className={css.movieInput}
            type="text"
            name="search"
            value={value}
            onChange={onInputValue}
            placeholder="Search your favourite movie"
            required
          />
          <button className={css.formButton}>Search</button>
        </label>
      </form>
    </>
  );
};

export { SearchMovie };
