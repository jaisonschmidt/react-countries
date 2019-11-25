import React from "react";
import { CountryBoxWrap } from "./CountryBoxStyles";

const CountryBox = props => {
  const {
    country: { name, flag }
  } = props;
  return (
    <CountryBoxWrap>
      <div className="image-wrap">
        <img src={flag} alt="" />
      </div>
      {name}
    </CountryBoxWrap>
  );
};

export default CountryBox;
