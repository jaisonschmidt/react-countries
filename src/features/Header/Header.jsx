import React from "react";
import { HeaderWrap } from "./HeaderStyles";

import { Flex, Button } from "../../assets/styles/Lib";

const Header = () => (
  <HeaderWrap>
    <Flex fullwidth>
      <div>CountryAPI</div>
      <Flex>
        <div>
          <Button>Switch</Button>
        </div>
        <div>CART</div>
      </Flex>
    </Flex>
  </HeaderWrap>
);

export default Header;
