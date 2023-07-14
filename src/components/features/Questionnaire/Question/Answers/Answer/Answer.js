import { useContext } from 'react';
import cx from 'classnames';

import DarkThemeContext from 'contexts/darkTheme';
import styles from './Answer.module.scss';

function Answer(props) {
  const {
    data,
    isDisabled,
    handleSelectedAnswer,
    isSelected
  } = props;

  const {
    answerText,
    correctness
  } = data;

  const isDarkThemeActive = useContext(DarkThemeContext);

  function handleBtnClick(ev) {
    ev.preventDefault();

    handleSelectedAnswer(data);
  }

  return (
    <button type="button"
            className={cx(
              styles.btn,
              { [styles.btnDark]: isDarkThemeActive,
                [styles.btnCorrect]: isSelected && correctness,
                [styles.btnIncorrect]: isSelected && !correctness
              }
            )}
            disabled={isDisabled}
            onClick={handleBtnClick}
    >
      { answerText }
    </button>
  );
}

export default Answer;
