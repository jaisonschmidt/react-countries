import { INCREMENT_FAV } from './actionTypes'

export const incrementFavs = countFavs => {
  return {
    type: INCREMENT_FAV,
    countFavs
  }
}