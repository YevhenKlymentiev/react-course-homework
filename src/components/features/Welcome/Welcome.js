import { Link } from 'react-router-dom';

import styles from './Welcome.module.scss';

function Welcome() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Epic Questionnaire
      </h1>
      <Link to="/questionnaire" className={styles.link}>Start</Link>
    </div>
  );
}

export default Welcome;
