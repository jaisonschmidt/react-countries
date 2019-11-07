import React from "react";

import { connect } from 'react-redux';

import Header from "../../features/Header/Header";
import CountryList from "../../features/CountryList/CountryList";

const Home = props => {
  const { countries } = props;
  return (
    <>
      <Header />
      <CountryList countries={countries} />
    </>
  )
};

const mapStateToProps = store => ({
  countries: store.setCountriesReducer.countries
});

export default connect(mapStateToProps)(Home);