import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ onChangeQuery }) {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (search === null) {
      return;
    }
    onChangeQuery(search);
  };

  const handleInputChange = e => {
    setSearch(e.target.value.trim());
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <p>Enter you're movie name</p>
        <input type="text" value={search} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

SearchBar.propTypes = {
  onChangeQuery: PropTypes.func,
};
