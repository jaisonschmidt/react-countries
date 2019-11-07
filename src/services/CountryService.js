import Axios from "axios"
import { Config } from "../config"

export class CountryService {
  async getAllCountriesFromApi() {
    return await Axios.get(`${Config.URL_API}/all/`)
  }
}
