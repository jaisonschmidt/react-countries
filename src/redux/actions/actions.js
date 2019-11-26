import { ADD_FAV, DEL_FAV, LOAD_COUNTRIES, CHANGE_THEME } from "./actionTypes";

export const addFav = fav => {
  return {
    type: ADD_FAV,
    fav
  };
};

export const delFav = fav => {
  return {
    type: DEL_FAV,
    fav
  };
};

export const loadCountries = countries => {
  return {
    type: LOAD_COUNTRIES,
    countries
  };
};

export const changeTheme = () => {
  return {
    type: CHANGE_THEME
  };
};
