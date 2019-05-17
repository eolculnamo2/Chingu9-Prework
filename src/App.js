import React, { useReducer } from 'react';
import { initialState, MeteorContext, reducer } from './state/state';
import Table from './components/Table/Table';
import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main-app-wrap">
      <h1>Chingu 9 Prework: Tier 3</h1>
      <MeteorContext.Provider value={{state, dispatch}}>
        <Table />
      </MeteorContext.Provider>
    </div>
  )
}

export default App;
