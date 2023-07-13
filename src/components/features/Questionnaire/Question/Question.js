import { useEffect, useRef, useState } from 'react';

import Answers from './Answers/Answers';
import ResultMessage from './ResultMessage/ResultMessage';
import ManualAnswer from './ManualAnswer/ManualAnswer';
import RESULT_STATUS from 'constants/resultStatus';
import styles from './Question.module.scss';

function Question(props) {
  const { data } = props;
  const availableTimeForAnswer = 10_000;

  const [resultStatus, setResultStatus] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const correctAnswerRef = useRef(data.answers.find(curr => curr.correctness));
  const answerTimeoutIdRef = useRef(null);

  useEffect(() => {
    answerTimeoutIdRef.current = setTimeout(() => {
      setResultStatus(RESULT_STATUS.expired);
    }, availableTimeForAnswer);

    return () => {
      clearTimeout(answerTimeoutIdRef.current);
    };
  }, []);

  function handleSelectedAnswer(answer) {
    clearTimeout(answerTimeoutIdRef.current);

    setSelectedAnswer(answer);
    setResultStatus(answer.correctness ? RESULT_STATUS.success : RESULT_STATUS.failure);
  }

  function submitManualAnswer(manualAnswerText) {
    if (manualAnswerText.toLowerCase() === correctAnswerRef.current.answerText.toLowerCase()) {
      handleSelectedAnswer(correctAnswerRef.current);
    }
  }

  return (
    <div>
      <h1 className={styles.question}>{ data.questionText }</h1>
      <Answers list={data.answers}
               isBtnsDisabled={resultStatus}
               selectedAnswer={selectedAnswer}
               handleSelectedAnswer={handleSelectedAnswer}
      />
      { resultStatus
        ? <ResultMessage resultStatus={resultStatus} />
        : <ManualAnswer handleSubmit={submitManualAnswer} />
      }
    </div>
  );
}

export default Question;
