import React from 'react';

/*
- Criar countryListWrap 
- Melhorar o IF, esta confuso
*/

const CountryList = props => {
  const { countries } = props
  return (
    <div>
      {countries.length > 0 && countries.map( (country, key) => <div key={key}>{country.name}</div>)}
      {countries.length === 0 && <div>Carregando países</div>}
    </div>
  )
}

export default CountryList;