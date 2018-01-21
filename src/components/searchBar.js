import React from 'react';

const SearchBar = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input value={props.state.term} placeholder='Stock Symbol' onChange={props.onChange}/>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default SearchBar;