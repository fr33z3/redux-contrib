const createAction = (type, paramNames) => {
  const actionBuilder = (data) => {
    const action = { type, payload: {} };

    if (paramNames) {
      paramNames.forEach((paramName) => { action.payload[paramName] = data[paramName]; });
    }

    return action;
  };
  actionBuilder.toString = () => type;

  return actionBuilder;
};

export default createAction;
