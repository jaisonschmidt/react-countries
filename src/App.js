import React, { useEffect } from "react";

import { Config } from "./config";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CountryService } from "./services/CountryService";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadCountries } from "./redux/actions/actions";

// TODO melhorar responsividade dos boxes
// TODO adicionar button de favorito no box
// TODO criar página de country detail
// TODO criar ação de adicionar a favoritos
// TODO verificar se o country esta nos favoritos (box)
// TODO verificar se o country esta nos favoritos (country detail)
// TODO criar tela de countries favoritos
// TODO criar button de skin

/* Pages */
import Home from "./pages/Home/Home";

/* theme */
import ThemeDark from "./assets/styles/ThemeDark";

/* CSS Global */
import GlobalStyles from "./assets/styles/Global";

/* theme options */
let Theme = [
  {
    title: "Dark",
    scheme: ThemeDark
  }
];

let ThemeActive = 0;

const App = props => {
  const { loadCountries } = props;

  // hook
  useEffect(() => {
    // Load countries
    const countryService = new CountryService();

    countryService.getAllCountriesFromApi().then(res => {
      console.log(res.data);
      loadCountries(res.data);
    });

    return () => {
      console.log("Destroy App");
    };
  }, [loadCountries]);

  document.title = Config.PAGE_TITLE;
  return (
    <ThemeProvider theme={Theme[ThemeActive]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/country/:numericcode"
            render={() => <div>detalhe</div>}
          />
          <Route path="/favs" render={() => <div>Favoritos</div>} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadCountries }, dispatch);

export default connect(null, mapDispatchToProps)(App);
