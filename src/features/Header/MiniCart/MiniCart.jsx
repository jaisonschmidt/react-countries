import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MiniCartWrap, HearthWrap, ContFavs } from "./MiniCartStyles";

const MiniCart = props => {
  const { favs } = props;
  return (
    <Link to="/favs">
      <MiniCartWrap>
        <HearthWrap>&#10084;</HearthWrap>
        <ContFavs>{favs.length}</ContFavs>
      </MiniCartWrap>
    </Link>
  );
};

const mapStateToProps = store => ({
  favs: store.favReducer.favs
});

// import { bindActionCreators } from 'redux'
// import { incrementFavs } from '../../../redux/actions/actions'
// const mapDispatchToProps = dispatch => bindActionCreators({ incrementFavs }, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);

export default connect(mapStateToProps)(MiniCart);
