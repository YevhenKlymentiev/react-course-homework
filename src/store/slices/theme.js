import { createSlice } from '@reduxjs/toolkit';

import THEME from 'constants/theme';

const initialState = {
  value: THEME.default
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.value = action.payload;
    }
  }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
