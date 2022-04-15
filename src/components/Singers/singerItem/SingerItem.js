import React, { useState } from "react";
import { Wrapper } from "./SingerItemStyle";
const SingerItem = ({ id, img, title, selected }) => {
  // State
  const [selectMe, setSelectMe] = useState(selected);

  return (
    <Wrapper
      selectMeSinger={selectMe}
      key={id}
      onClick={() => {
        setSelectMe(!selectMe);
      }}
    >
      <img src={img} alt="" />
      <p>{title}</p>
    </Wrapper>
  );
};

export default SingerItem;
