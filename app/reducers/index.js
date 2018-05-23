// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import editor from './editor';

const rootReducer = combineReducers({
  counter,
  router,
  editor
});

export default rootReducer;
