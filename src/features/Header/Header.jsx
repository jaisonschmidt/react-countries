import React from "react";
import { HeaderWrap } from "./HeaderStyles";
import { Flex, ButtonRound } from "../../assets/styles/Lib";

import MiniCartWrap from "./MiniCart/MiniCart";

const Header = () => (
  <HeaderWrap>
    <Flex fullwidth>
      <div>CountryAPI</div>
      <Flex>
        <Flex>
          <div>Change to: </div>
          <div>
            <ButtonRound>Light</ButtonRound>
          </div>
        </Flex>
        <MiniCartWrap />
      </Flex>
    </Flex>
  </HeaderWrap>
);

export default Header;
