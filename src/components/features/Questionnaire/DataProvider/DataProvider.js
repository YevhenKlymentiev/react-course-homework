import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getQuestionnaireDataAsync } from 'store/modules/questionnaire';

function DataProvider(props) {
  const { children } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestionnaireDataAsync());
  }, []);

  return children;
}

export default DataProvider;
