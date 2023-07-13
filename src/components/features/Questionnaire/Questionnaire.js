import { useEffect, useState } from 'react';

import Error from 'components/common/Error/Error';
import Loader from 'components/common/Loader/Loader';
import Question from './Question/Question';
import fakeFetchData from 'helpers/client';
import data from './data.mock';

function Questionnaire(props) {
  const { resetIndicator } = props;
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    setIsLoading(true);
    setError(null);

    fakeFetchData(data)
      .then(res => {
        setQuestion(res);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (!isLoading) fetchData();
  }, [resetIndicator]);

  if (error) return <Error errorStatus={error.status} />;
  if (isLoading || !question) return <Loader />;

  return <Question data={question} />;
}

export default Questionnaire;
