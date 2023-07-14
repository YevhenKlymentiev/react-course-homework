import THEME from 'constants/theme';

const CHANGE_THEME = 'CHANGE_THEME';

const initialState = THEME.default;

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
}

export function changeTheme(theme) {
  return { type: CHANGE_THEME, payload: theme };
}

export default themeReducer;
