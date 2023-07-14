import fakeFetchData from 'helpers/client';
import ASYNC_STATUS from 'constants/asyncStatus';
import mockData from 'components/features/Questionnaire/DataProvider/data.mock';

const GET_QUESTIONNAIRE_DATA = 'GET_QUESTIONNAIRE_DATA';
const GET_QUESTIONNAIRE_DATA_SUCCESS = 'GET_QUESTIONNAIRE_DATA_SUCCESS';
const GET_QUESTIONNAIRE_DATA_FAILURE = 'GET_QUESTIONNAIRE_DATA_FAILURE';
const SET_QUESTION_RESULT = 'SET_QUESTION_RESULT';

const initialState = {
  status: ASYNC_STATUS.idle,
  error: null,
  questions: null
};

function questionnaireReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONNAIRE_DATA:
      return ({
        status: ASYNC_STATUS.loading,
        error: null
      });
    case GET_QUESTIONNAIRE_DATA_SUCCESS:
      return ({
        status: ASYNC_STATUS.idle,
        questions: action.payload
      });
    case GET_QUESTIONNAIRE_DATA_FAILURE:
      return ({
        status: ASYNC_STATUS.idle,
        error: action.payload
      });
    case SET_QUESTION_RESULT:
      const { id, resultStatus, selectedAnswer} = action.payload;
      const questionIndex = state.questions.findIndex(curr => curr.id === id);
      const updatedQuestionWithResult = {
        ...state.questions[questionIndex],
        resultStatus,
        selectedAnswer
      };

      const updatedQuestions = [...state.questions];
      updatedQuestions[questionIndex] = updatedQuestionWithResult;

      return ({
        ...state,
        questions: updatedQuestions
      });
    default:
      return state;
  }
}

export function setQuestionResult(questionResult) {
  return { type: SET_QUESTION_RESULT, payload: questionResult };
}

export function getQuestionnaireDataAsync() {
  return function(dispatch) {
    dispatch({ type: GET_QUESTIONNAIRE_DATA })

    fakeFetchData(mockData)
      .then(res => {
        dispatch({ type: GET_QUESTIONNAIRE_DATA_SUCCESS, payload: res })
      })
      .catch(err => {
        dispatch({ type: GET_QUESTIONNAIRE_DATA_FAILURE, payload: err })
      })
  }
}

export default questionnaireReducer;
