import React from "react";
import { withRouter } from "react-router-dom";
import { CountryDetailWrap } from "./CountryDetailStyles";
import { ButtonRound } from "../../assets/styles/Lib";

const CountryDetail = props => {
  console.log(props);
  const {
    history,
    country: { name, flag, population }
  } = props;
  return (
    <CountryDetailWrap>
      <div className="colimage">
        <img src={flag} alt="" />
      </div>
      <div className="coldescription">
        <div className="countryname">{name}</div>
        <div>
          População:{" "}
          {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </div>
        <div>
          <ButtonRound
            onClick={() => history.goBack()}
            marginleft="0"
            margintop="2rem"
          >
            Voltar
          </ButtonRound>
        </div>
      </div>
    </CountryDetailWrap>
  );
};

export default withRouter(CountryDetail);
