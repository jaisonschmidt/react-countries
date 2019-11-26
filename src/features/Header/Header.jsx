import React from "react";
import { HeaderWrap } from "./HeaderStyles";
import { Flex, ButtonRound } from "../../assets/styles/Lib";

import MiniCartWrap from "./MiniCart/MiniCart";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeTheme } from "../../redux/actions/actions";

const Header = props => {
  const { theme, changeTheme } = props;
  return (
    <HeaderWrap>
      <Flex fullwidth>
        <div>CountryAPI</div>
        <Flex>
          <Flex>
            <div>Tema:</div>
            <div>
              <ButtonRound marginleft="8px" onClick={() => changeTheme()}>
                {theme.title}
              </ButtonRound>
            </div>
          </Flex>
          <MiniCartWrap />
        </Flex>
      </Flex>
    </HeaderWrap>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeTheme }, dispatch);

const mapStateToProps = store => ({
  theme: store.changeThemeReducer.theme
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
