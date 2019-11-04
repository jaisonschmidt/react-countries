import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Config from "./config";

/* Pages */
import Home from "./pages/Home/Home";

/* theme */
import ThemeDark from "./assets/styles/ThemeDark";

/* CSS Global */
import GlobalStyles from "./assets/styles/Global";

function App() {
  document.title = Config.PAGE_TITLE;
  return (
    <ThemeProvider theme={ThemeDark}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/country/:numericcode"
            render={() => <div>detalhe</div>}
          />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
