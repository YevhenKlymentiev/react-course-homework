import Answer from './Answer/Answer';
import styles from './Answers.module.scss';

function Answers(props) {
  const {
    list,
    isBtnsDisabled,
    selectedAnswer,
    setSelectedAnswer
  } = props;

  function renderList() {
    return list.map(curr =>
      <Answer key={curr.id}
              data={curr}
              isDisabled={isBtnsDisabled}
              setSelectedAnswer={setSelectedAnswer}
              isSelected={curr.id === selectedAnswer?.id}
      />
    );
  }

  return (
    <div className={styles.container}>
      { renderList() }
    </div>
  );
}

export default Answers;
