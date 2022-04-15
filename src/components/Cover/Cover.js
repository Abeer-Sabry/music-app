import React from "react";
// ----- STYLED-COMPONENTS ----- //
import { Wrapper } from "./CoverStyle";
// ----- CONSTANTS ----- //
import { CustomContainer } from "../../constants/constants";
const Cover = () => {
  return (
    <Wrapper>
      <CustomContainer>
        <h1>
          discover and buy <br /> your perfect sound
        </h1>
      </CustomContainer>
    </Wrapper>
  );
};

export default Cover;
