import MESSAGES from './constants/messages';
import styles from './Error.module.scss';

function Error(props) {
  const {
    errorStatus
  } = props;

  return (
    <h1 className={styles.container}>
      { MESSAGES[errorStatus] }
    </h1>
  );
}

export default Error;
