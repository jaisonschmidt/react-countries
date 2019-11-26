import React from "react";

import Header from "../../features/Header/Header";
import CountryList from "../../features/CountryList/CountryList";

import { Container } from "../../assets/styles/Lib";

import { connect } from "react-redux";

const Home = props => {
  const { countries } = props;
  return (
    <>
      <Header />
      <Container>
        <CountryList countries={countries} />
      </Container>
    </>
  );
};

const mapStateToProps = store => ({
  countries: store.setCountriesReducer.countries
});

export default connect(mapStateToProps)(Home);
