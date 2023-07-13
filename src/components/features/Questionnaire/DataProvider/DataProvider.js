import { useEffect, useMemo, useState } from 'react';

import mockData from './data.mock';
import DataContext from './data.context';
import fakeFetchData from 'helpers/client';
import getDataWithQuestionResult from './helpers/getDataWithQuestionResult';

function DataProvider(props) {
  const { children } = props;

  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    if (isLoading) return;

    setError(null);
    setIsLoading(true);

    fakeFetchData(mockData)
      .then(res => setQuestions(res))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(fetchData, []);

  function setQuestionResult(questionResult) {
    setQuestions(getDataWithQuestionResult(questions, questionResult));
  }

  const contextValue = useMemo(
    () => ({ questions, error, isLoading, reloadQuestionnaireData: fetchData, setQuestionResult }),
    [questions, error, isLoading]
  );

  return (
    <DataContext.Provider value={contextValue}>
      { children }
    </DataContext.Provider>
  );
}

export default DataProvider;
