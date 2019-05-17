const ACTION_TYPES = {
  SET_API_DATA: 'SET_API_DATA',
}

const actions = {
  [ACTION_TYPES.SET_API_DATA]: (state, action) => ({
    ...state,
    apiData: action.payload,
  }),
}

export {
  actions,
  ACTION_TYPES,
}
