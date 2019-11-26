import { LOAD_COUNTRIES } from "../actions/actionTypes";
import { defineState } from "redux-localstore";

const defaultState = {
  countries: []
};

const initialState = defineState(defaultState)("setCountriesReducer");

export const setCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };
    default:
      return state;
  }
};
