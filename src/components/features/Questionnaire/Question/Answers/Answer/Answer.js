import cx from 'classnames';

import DarkThemeContext from 'contexts/darkTheme';
import styles from './Answer.module.scss';

function Answer(props) {
  const {
    data,
    isDisabled,
    setSelectedAnswer,
    isSelected
  } = props;

  const {
    answerText,
    correctness
  } = data;

  function handleBtnClick(ev) {
    ev.preventDefault();

    setSelectedAnswer(data);
  }

  return (
    <DarkThemeContext.Consumer>
      { isDarkThemeActive => (
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
      )}
    </DarkThemeContext.Consumer>
  );
}

export default Answer;
