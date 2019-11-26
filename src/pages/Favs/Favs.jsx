import React from "react";
import Header from "../../features/Header/Header";
import CountryList from "../../features/CountryList/CountryList";

import { Container, TitleMain, ButtonRound } from "../../assets/styles/Lib";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Favs = props => {
  const { favs } = props;
  return (
    <>
      <Header />
      <Container direction="column">
        <TitleMain>Favoritos</TitleMain>

        <div>
          <ButtonRound margintop="0" onClick={() => props.history.goBack()}>
            Voltar
          </ButtonRound>
        </div>

        <Container>
          <CountryList countries={favs} />
        </Container>

        {favs.length > 0 && (
          <div>
            <ButtonRound
              margintop="2rem"
              marginbottom="2rem"
              onClick={() => props.history.goBack()}
            >
              Voltar
            </ButtonRound>
          </div>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = store => ({
  favs: store.favReducer.favs
});

export default connect(mapStateToProps)(withRouter(Favs));
