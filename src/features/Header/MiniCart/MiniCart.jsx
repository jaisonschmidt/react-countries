import React from "react"

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { incrementFavs } from '../../../redux/actions/actions'

import { MiniCartWrap, HearthWrap, ContFavs } from "./MiniCartStyles";

const MiniCart = props => {
  const { countFavs, incrementFavs } = props;
  return (
    <button onClick={() => incrementFavs(countFavs) }>
      <MiniCartWrap>
      <HearthWrap>&#10084;</HearthWrap>
      <ContFavs>{countFavs}</ContFavs>
      </MiniCartWrap>
    </button>
  )
  
};

const mapStateToProps = store => ({
  countFavs: store.clickReducer.countFavs
});

const mapDispatchToProps = dispatch => bindActionCreators({ incrementFavs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
