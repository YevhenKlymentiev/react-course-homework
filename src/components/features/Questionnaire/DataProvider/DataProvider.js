import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getQuestionsAsync } from 'store/slices/questionnaire';

function DataProvider(props) {
  const { children } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestionsAsync());
  }, []);

  return children;
}

export default DataProvider;
