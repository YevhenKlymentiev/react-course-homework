import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

import Error from 'components/common/Error/Error';
import Loader from 'components/common/Loader/Loader';
import NotFound from 'components/features/NotFound/NotFound';
import ASYNC_STATUS from 'constants/asyncStatus';

function Questionnaire() {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const { status, error, questions } = useSelector(state => state.questionnaire);

  if (error) return <Error errorStatus={error.status} />;
  if ((status === ASYNC_STATUS.loading) || !questions) return <Loader />;
  if (!questionId) return <Navigate to={questions[0].id} />;

  const questionIndex = questions.findIndex(curr => curr.id === questionId);
  const questionData = questions[questionIndex];

  if (!questionData) return <NotFound />;

  function navToNextQuestion() {
    if (questionIndex < questions.length - 1) navigate(questions[questionIndex + 1].id);
  }

  return <Outlet key={questionId} context={{ questionData, navToNextQuestion }} />;
}

export default Questionnaire;
