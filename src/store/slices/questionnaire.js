import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import fakeFetchData from 'helpers/client';
import ASYNC_STATUS from 'constants/asyncStatus';
import mockData from 'components/features/Questionnaire/DataProvider/data.mock';

const initialState = {
  status: ASYNC_STATUS.idle,
  error: null,
  questions: null
};

export const getQuestionsAsync = createAsyncThunk(
  'questionnaire/getQuestions',
  async (arg, { rejectWithValue}) => {
    try {
      return await fakeFetchData(mockData);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setQuestionResult(state, action) {
      const { id, resultStatus, selectedAnswer } = action.payload;
      const questionIndex = state.questions.findIndex(curr => curr.id === id);

      state.questions[questionIndex].resultStatus = resultStatus;
      state.questions[questionIndex].selectedAnswer = selectedAnswer;
    }
  },
  extraReducers: {
    [getQuestionsAsync.pending]: (state) => {
      state.status = ASYNC_STATUS.loading
    },
    [getQuestionsAsync.fulfilled]: (state, action) => {
      state.error = null;
      state.status = ASYNC_STATUS.idle;
      state.questions = action.payload;
    },
    [getQuestionsAsync.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = ASYNC_STATUS.idle;
    }
  }
});

export const { setQuestionResult } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
