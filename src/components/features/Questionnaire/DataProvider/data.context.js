import { createContext } from 'react';

const defaultContextValue = {
  questions: null,
  isLoading: false,
  error: null,
  reloadQuestionnaireData: () => {},
  setQuestionResult: () => {}
};
const QuestionnaireDataContext = createContext(defaultContextValue);

export default QuestionnaireDataContext;
