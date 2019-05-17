const ACTION_TYPES = {
  TEST_ONE: 'TEST_ONE',
}

const actions = {
  [ACTION_TYPES.TEST_ONE]: (state, action) => ({
    ...state,
    selectedLayer: action.payload,
  }),
}

export {
  actions,
  ACTION_TYPES,
}
