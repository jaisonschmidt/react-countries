import { Config } from "../../config";
import { CHANGE_THEME } from "../actions/actionTypes";
import { defineState } from "redux-localstore";

const defaultState = {
  theme: Config.INITIAL_THEME
};

const initialState = defineState(defaultState)("changeThemeReducer");

export const changeThemeReducer = (state = initialState, action) => {
  let newTheme =
    state.theme.title === Config.THEMES[0].title
      ? Config.THEMES[1]
      : Config.THEMES[0];
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: newTheme
      };
    default:
      return state;
  }
};
