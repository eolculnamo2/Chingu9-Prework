import React, { useReducer, useEffect } from 'react';
import { initialState, MeteorContext, reducer } from './state/state';
import Table from './components/Table/Table';
import SearchInput from './components/SearchInput/SearchInput';
import './App.css';
import { ACTION_TYPES } from './state/actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then( res => res.json() )
    .then( payload => {
      dispatch({type: ACTION_TYPES.SET_API_DATA, payload});
      dispatch({type: ACTION_TYPES.SET_DISPLAY_DATA, payload});
    });

  }, []);

  return (
    <div className="app__main-wrap">
      <h1 className="app__heading">Chingu 9 Prework: Tier 3</h1>
      <MeteorContext.Provider value={{state, dispatch}}>
        <SearchInput />
        <Table />
      </MeteorContext.Provider>
    </div>
  )
}

export default App;
