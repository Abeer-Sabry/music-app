import React from "react";
// ---- STYLED-COMPONENTS ---- //
import { Wrapper } from "./LoaderStyle";
// ---- SPINNER ---- //
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <Wrapper>
      <SyncLoader color={"orange"} size={15} />
    </Wrapper>
  );
};

export default Loader;
