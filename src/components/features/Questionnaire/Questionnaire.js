import { useContext } from 'react';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

import Error from 'components/common/Error/Error';
import Loader from 'components/common/Loader/Loader';
import NotFound from 'components/features/NotFound/NotFound';
import QuestionnaireDataContext from './DataProvider/data.context';

function Questionnaire() {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const { questions, isLoading, error, setQuestionResult } = useContext(QuestionnaireDataContext);

  if (error) return <Error errorStatus={error.status} />;
  if (isLoading || !questions) return <Loader />;
  if (!questionId) return <Navigate to={questions[0].id} />;

  const questionIndex = questions.findIndex(curr => curr.id === questionId);
  const questionData = questions[questionIndex];

  if (!questionData) return <NotFound />;

  function navToNextQuestion() {
    if (questionIndex < questions.length - 1) navigate(questions[questionIndex + 1].id);
  }

  return <Outlet key={questionId} context={{ questionData, setQuestionResult, navToNextQuestion }} />;
}

export default Questionnaire;
