import { applyMiddleware, combineReducers, createStore } from 'redux';

import themeReducer from './modules/theme';
import questionnaireReducer from './modules/questionnaire';
import asyncFunctionMiddleware from './middlewares/AsyncFunctionMiddleware';

function configureAppStore() {
  const rootReducer = combineReducers({ questionnaire: questionnaireReducer, theme: themeReducer });
  const middlewares = applyMiddleware(asyncFunctionMiddleware);

  return createStore(rootReducer, middlewares);
}

export default configureAppStore;
