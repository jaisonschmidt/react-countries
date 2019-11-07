import { 
  ADD_FAV,
  LOAD_COUNTRIES
} from './actionTypes'

export const addFav = fav => {
  return {
    type: ADD_FAV,
    fav
  }
}

export const loadCountries = countries => {
  return {
    type: LOAD_COUNTRIES,
    countries
  }
}