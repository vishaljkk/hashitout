import React from 'react';

const Search = props => (
  <form onSubmit={props.getName} style={{ marginBottom:"2rem" }}>
    <input className="form__input" type="text" name="searchName" />
    <button className="form__button">Search</button>
  </form>
);

export default Search;