import React from "react";
import Header from "../../features/Header/Header";
import CountryDetail from "../../features/CountryDetail/CountryDetail";
import { Container } from "../../assets/styles/Lib";

// redux
import { connect } from "react-redux";

const Detail = props => {
  const { countries } = props;
  return (
    <>
      <Header />
      <Container>
        {countries.length > 0 && (
          <CountryDetail
            country={countries.find(
              country => country.numericCode === props.match.params.numericcode
            )}
          />
        )}
        {countries.length === 0 && <div>Carregando...</div>}
      </Container>
    </>
  );
};

const mapStateToProps = store => ({
  countries: store.setCountriesReducer.countries
});

export default connect(mapStateToProps)(Detail);
