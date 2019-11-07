import { combineReducers } from 'redux'
import { addFavReducer } from './reducers/addFavReducer'
import { setCountriesReducer } from './reducers/setCountriesReducer'

export const Reducers = combineReducers({
  addFavReducer,
  setCountriesReducer
});