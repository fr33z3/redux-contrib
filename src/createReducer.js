const createReducer = (actionsMap, initialState) => {
  const reducer = (state = initialState, action) => {
    let resultState = { ...state };
    actionsMap.forEach(([actionBuilder, actionReducer]) => {
      if (actionBuilder.toString() === action.type) {
        resultState = { ...state, ...actionReducer(state, action.payload, action) };
      }
    });

    return resultState;
  };

  return reducer;
};

export default createReducer;
