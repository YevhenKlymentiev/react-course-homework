import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ASYNC_STATUS from 'constants/asyncStatus';
import { getQuestionnaireDataAsync } from 'store/modules/questionnaire';
import styles from './ResetBtn.module.scss';

function ResetBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(state => state.questionnaire.status);

  function reloadQuestionnaireData(ev) {
    ev.preventDefault();

    if (status === ASYNC_STATUS.loading) return;

    dispatch(getQuestionnaireDataAsync());
    navigate('/');
  }

  return (
    <button type="button" className={styles.btn} onClick={reloadQuestionnaireData}>
      Reset
    </button>
  );
}

export default ResetBtn;
