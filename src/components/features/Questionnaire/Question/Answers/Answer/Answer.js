import cx from 'classnames';

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
    <button type="button"
            className={cx(
              styles.btn,
              { [styles.btnCorrect]: isSelected && correctness,
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
