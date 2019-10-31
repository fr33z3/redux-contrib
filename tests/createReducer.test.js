import createAction from '../src/createAction';
import createReducer from '../src/createReducer';

describe('createReducer', () => {
  const initialState = { aValue: 1, bValue: 2 };
  const someAction = createAction('SOME_ACTION');
  const incrementAAction = createAction('INCREMENT_A', ['value']);
  const decrementAAction = createAction('DECREMENT_A', ['value']);
  const incrementBAction = createAction('INCREMENT_B', ['value']);
  const decrementBAction = createAction('DECREMENT_B', ['value']);
  const reducer = createReducer([
    [incrementAAction, ({ aValue }, { value }) => ({ aValue: aValue + value })],
    [decrementAAction, ({ aValue }, { value }) => ({ aValue: aValue - value })],
    [incrementBAction, ({ bValue }, { value }) => ({ bValue: bValue + value })],
    [decrementBAction, ({ bValue }, { value }) => ({ bValue: bValue - value })],
  ], initialState);

  it('Expect to not change react on unknown action', () => {
    expect(reducer(initialState, someAction())).toEqual(initialState);
  });

  it('Expects to change the state regarding incrementAAction', () => {
    const result = reducer(initialState, incrementAAction({ value: 2 }));
    expect(result).toEqual({ aValue: 3, bValue: 2 });
  });

  it('Expects to change the state regarding decrementAAction', () => {
    const result = reducer(initialState, decrementAAction({ value: 2 }));
    expect(result).toEqual({ aValue: -1, bValue: 2 });
  });

  it('Expects to change the state regarding incrementBAction', () => {
    const result = reducer(initialState, incrementBAction({ value: 2 }));
    expect(result).toEqual({ aValue: 1, bValue: 4 });
  });

  it('Expects to change the state regarding decrementBAction', () => {
    const result = reducer(initialState, decrementBAction({ value: 2 }));
    expect(result).toEqual({ aValue: 1, bValue: 0 });
  });
});
