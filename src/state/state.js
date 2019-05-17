import React from 'react';
import { actions } from './actions';

const initialState = {
  apiData: [],
}

const MeteorContext = React.createContext(initialState);

const reducer = (state=initialState, action) => actions[action.type](state, action);

export {
  initialState,
  MeteorContext,
  reducer,
}