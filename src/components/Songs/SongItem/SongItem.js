import React, { useState } from "react";
import { Wrapper } from "./SongItemStyle";

const SongItem = ({ song, title }) => {
  const [selectMe, setSelectMe] = useState(false);
  return (
    <Wrapper onClick={() => setSelectMe(!selectMe)} style={{ border: `${selectMe ? "1px solid red" : "none"}` }}>
      <iframe src={song} title={song} width="100%" />
      <p>{title}</p>
    </Wrapper>
  );
};

export default SongItem;
