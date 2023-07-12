import cx from 'classnames';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './Header.module.scss';

function Header(props) {
  const {
    resetQuestionnaire,
    isDarkThemeActive,
    toggleDarkTheme
  } = props;

  function handleToggleThemeBtnClick(ev) {
    ev.preventDefault();

    toggleDarkTheme();
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      Questionnaire
      <div className={styles.controls}>
        <button
          type="button"
          className={cx(styles.toggleThemeBtn, {[styles.toggleThemeBtnActive]: isDarkThemeActive})}
          onClick={handleToggleThemeBtnClick}
        />
        <button type="button" className={styles.resetBtn} onClick={resetQuestionnaire}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Header;
