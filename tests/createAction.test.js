import createAction from '../src/createAction';

describe('createAction', () => {
  const createUserAction = createAction('CREATE_USER_ACTION', ['email', 'name']);
  const action = createUserAction({ email: 'a@a.com', name: 'Some name' });

  it('Sets up the proper action type', () => {
    expect(action.type).toEqual('CREATE_USER_ACTION');
  });

  it('Sets up the proper payload', () => {
    expect(action.payload).toEqual({ email: 'a@a.com', name: 'Some name' });
  });

  it('Action builder responds to toString function with action type', () => {
    expect(createUserAction.toString()).toEqual('CREATE_USER_ACTION');
  });
});
