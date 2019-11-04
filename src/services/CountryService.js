import Axios from "axios";
import Config from "config";

class CountryService {
  async getAllCountriesFromApi() {
    return Axios.get(`${Config.URL_API}/all/`).then(response => response.data);
  }
}

export default CountryService;
