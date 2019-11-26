import React, { useEffect } from "react";

import { Config } from "./config";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CountryService } from "./services/CountryService";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadCountries } from "./redux/actions/actions";

/* Pages */
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Favs from "./pages/Favs/Favs";

/* CSS Global */
import GlobalStyles from "./assets/styles/Global";

const App = props => {
  const { theme, loadCountries } = props;

  // hook
  useEffect(() => {
    // Load countries
    const countryService = new CountryService();

    countryService.getAllCountriesFromApi().then(res => {
      // console.log(res.data);
      loadCountries(res.data);
    });

    return () => {
      console.log("Destroy App");
    };
  }, [loadCountries]);

  document.title = Config.PAGE_TITLE;

  return (
    <ThemeProvider theme={{ scheme: theme.scheme }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/country/:numericcode"
            render={props => <Detail {...props} />}
          />
          <Route path="/favs" render={() => <Favs />} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadCountries }, dispatch);

const mapStateToProps = store => ({
  theme: store.changeThemeReducer.theme
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
