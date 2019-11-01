const createAction = (type, paramNames, customFields) => {
  const actionBuilder = (data) => {
    let action = { type, payload: {} };

    if (paramNames) {
      paramNames.forEach((paramName) => { action.payload[paramName] = data[paramName]; });
    }

    if (customFields) { action = { ...action, ...customFields(data) }; };

    return action;
  };
  actionBuilder.toString = () => type;
  actionBuilder.type = type;

  return actionBuilder;
};

export default createAction;
