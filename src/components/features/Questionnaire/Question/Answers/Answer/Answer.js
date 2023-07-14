import { useSelector } from 'react-redux';
import cx from 'classnames';

import THEME from 'constants/theme';
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

  const theme = useSelector(state => state.theme.value);

  function handleBtnClick(ev) {
    ev.preventDefault();

    handleSelectedAnswer(data);
  }

  return (
    <button type="button"
            className={cx(
              styles.btn,
              { [styles.btnDark]: theme === THEME.dark,
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
