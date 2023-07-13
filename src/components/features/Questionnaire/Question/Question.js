import { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

import Answers from './Answers/Answers';
import ResultMessage from './ResultMessage/ResultMessage';
import ManualAnswer from './ManualAnswer/ManualAnswer';
import RESULT_STATUS from 'constants/resultStatus';
import styles from './Question.module.scss';

function Question() {
  const nextQuestionDelay = 5_000;
  const availableTimeForAnswer = 10_000;

  const {
    questionData: { id, answers, questionText, resultStatus, selectedAnswer },
    setQuestionResult,
    navToNextQuestion
  } = useOutletContext();

  const correctAnswerRef = useRef(answers.find(curr => curr.correctness));
  const nextQuestionTimeoutIdRef = useRef(null);
  const answerTimeoutIdRef = useRef(null);

  function navToNextQuestionWithDelay() {
    nextQuestionTimeoutIdRef.current = setTimeout(navToNextQuestion, nextQuestionDelay);
  }

  useEffect(() => {
    if (!resultStatus) {
      answerTimeoutIdRef.current = setTimeout(() => {
        setQuestionResult({ id, resultStatus: RESULT_STATUS.expired });
        navToNextQuestionWithDelay();
      }, availableTimeForAnswer);
    }

    return () => {
      clearTimeout(nextQuestionTimeoutIdRef.current);
      clearTimeout(answerTimeoutIdRef.current);
    };
  }, []);

  function handleSelectedAnswer(selectedAnswer) {
    const resultStatus = selectedAnswer.correctness ? RESULT_STATUS.success : RESULT_STATUS.failure;

    clearTimeout(answerTimeoutIdRef.current);
    setQuestionResult({ id, resultStatus, selectedAnswer });
    navToNextQuestionWithDelay();
  }

  function submitManualAnswer(manualAnswerText) {
    if (manualAnswerText.toLowerCase() === correctAnswerRef.current.answerText.toLowerCase()) {
      handleSelectedAnswer(correctAnswerRef.current);
    }
  }

  return (
    <div>
      <h1 className={styles.question}>{ questionText }</h1>
      <Answers list={answers}
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
