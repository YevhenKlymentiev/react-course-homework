import MESSAGES from './constants/messages';
import styles from './ResultMessage.module.scss';

function ResultMessage(props) {
  const {
    resultStatus
  } = props;

  return (
    <div className={styles.container}>
      { MESSAGES[resultStatus] }
    </div>
  );
}

export default ResultMessage;
