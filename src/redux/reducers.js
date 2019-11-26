import { combineReducers } from "redux";
import { favReducer } from "./reducers/favReducer";
import { setCountriesReducer } from "./reducers/setCountriesReducer";
import { changeThemeReducer } from "./reducers/changeThemeReducer";

export const Reducers = combineReducers({
  favReducer,
  setCountriesReducer,
  changeThemeReducer
});
