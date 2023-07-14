import { useContext } from 'react';

import DataContext from 'components/features/Questionnaire/DataProvider/data.context';
import styles from './ResetBtn.module.scss';

function ResetBtn() {
  const { reloadQuestionnaireData } = useContext(DataContext);

  return (
    <button type="button" className={styles.btn} onClick={reloadQuestionnaireData}>
      Reset
    </button>
  );
}

export default ResetBtn;
