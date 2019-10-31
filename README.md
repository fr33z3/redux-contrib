## Installation

```bash
$ npm install redux-contrib --save
```
## USAGE
```js
  import { createAction, createReducer } from 'redux-contrib';

  const createUserAction = createAction('CREATE_USER_ACTION', ['email', 'name']);

  const initialState = { user: undefined };
  const reducer = createReducer([
    [
      createUserAction,
      (_state, payload, _action) => ({ user: { email: payload.email, name: payload.name } }),
    ],
  ], initialState)

  const action = createUserAction({ email: 'some@email.com', name: 'John Doe' });
  reducer(initialState, action);
```
