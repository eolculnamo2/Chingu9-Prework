const ACTION_TYPES = {
  SET_API_DATA: 'SET_API_DATA',
  SET_DISPLAY_DATA: 'SET_DISPLAY_DATA',
}

const actions = {
  [ACTION_TYPES.SET_API_DATA]: (state, action) => ({
    ...state,
    apiData: action.payload,
  }),
  [ACTION_TYPES.SET_DISPLAY_DATA]: (state, action) => ({
    ...state,
    displayData: action.payload,
  }),
}

export {
  actions,
  ACTION_TYPES,
}
