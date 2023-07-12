import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './Header.module.scss';

function Header(props) {
  const {
    resetQuestionnaire
  } = props;

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      Questionnaire
      <button type="button" className={styles.resetBtn} onClick={resetQuestionnaire}>
        Reset
      </button>
    </div>
  );
}

export default Header;
