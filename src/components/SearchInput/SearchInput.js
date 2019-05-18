import React, { useContext } from 'react';
import { MeteorContext } from '../../state/state';
import { ACTION_TYPES } from '../../state/actions';
import './SearchInput.css';

function SearchInput() {
  const context = useContext(MeteorContext);

  function makeSearch(e) {
    const { apiData } = context.state;
    const { value } = e.target;
    let payload;

    if(value) {
      payload = apiData.filter( x => x.name.toLowerCase().includes(value.toLowerCase()));
    } else {
      payload = apiData;
    }

    context.dispatch({type: ACTION_TYPES.SET_DISPLAY_DATA, payload})
  }

  return (
    <div className="search__wrap">
      <input
        className="search__bar"
        onInput={makeSearch}
      />
    </div>
  )
}

export default SearchInput;
