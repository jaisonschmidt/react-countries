import React from "react";
import { Link } from "react-router-dom";
import { CountryBoxWrap } from "./CountryBoxStyles";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addFav, delFav } from "../../redux/actions/actions";

const CountryBox = props => {
  const {
    addFav,
    delFav,
    favs,
    country: { name, flag, numericCode }
  } = props;

  const isFav = favs.find(fav => fav.numericCode === props.country.numericCode);

  return (
    <CountryBoxWrap>
      <Link to={`/country/${numericCode}`}>
        <div className="imagewrap">
          <img src={flag} alt="" className="flag" />
        </div>
        <div className="countryname">{name}</div>
      </Link>
      <button
        className="btnfav"
        onClick={() => (isFav ? delFav(props.country) : addFav(props.country))}
      >
        {isFav ? "Remover" : "Salvar"}
      </button>
    </CountryBoxWrap>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFav, delFav }, dispatch);
const mapStateToProps = store => ({
  favs: store.favReducer.favs
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryBox);
