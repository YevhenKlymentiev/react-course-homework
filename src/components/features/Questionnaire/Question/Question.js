import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import Answers from './Answers/Answers';
import ResultMessage from './ResultMessage/ResultMessage';
import ManualAnswer from './ManualAnswer/ManualAnswer';
import { setQuestionResult } from 'store/slices/questionnaire';
import RESULT_STATUS from 'constants/resultStatus';
import styles from './Question.module.scss';

function Question() {
  const nextQuestionDelay = 5_000;
  const availableTimeForAnswer = 10_000;

  const dispatch = useDispatch();

  const { questionData, navToNextQuestion } = useOutletContext();
  const { id, answers, questionText, resultStatus, selectedAnswer } = questionData;

  const correctAnswerRef = useRef(answers.find(curr => curr.correctness));
  const nextQuestionTimeoutIdRef = useRef(null);
  const answerTimeoutIdRef = useRef(null);

  function navToNextQuestionWithDelay() {
    nextQuestionTimeoutIdRef.current = setTimeout(navToNextQuestion, nextQuestionDelay);
  }

  useEffect(() => {
    if (!resultStatus) {
      answerTimeoutIdRef.current = setTimeout(() => {
        dispatch(setQuestionResult({ id, resultStatus: RESULT_STATUS.expired }));
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
    dispatch(setQuestionResult({ id, resultStatus, selectedAnswer }));
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
