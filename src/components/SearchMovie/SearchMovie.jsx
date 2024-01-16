import React from 'react';

const SearchMovie = () => {
  return (
    <div className="movies">
      <form>
        <input type="text" name="searchInput" required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export { SearchMovie };
