import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './slices/theme';
import questionnaireReducer from './slices/questionnaire';

function configureAppStore() {
  return configureStore({
    reducer: {
      questionnaire: questionnaireReducer,
      theme: themeReducer
    }
  });
}

export default configureAppStore;
