import React from "react";
import { Link } from 'react-router-dom';
import { CountryBoxWrap } from "./CountryBoxStyles";

const CountryBox = props => {
  const {
    country: { name, flag, numericCode }
  } = props;
  return (
    <CountryBoxWrap>
      <Link to={`/country/${numericCode}`}>
        <div className="imagewrap">
          <img src={flag} alt="" className="flag" />
        </div>
        <div className="countryname">{name}</div>
      </Link>
      <button className="btnfav">
        Salvar
      </button>      
    </CountryBoxWrap>
  );
};

export default CountryBox;
