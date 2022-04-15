import React, { useState } from "react";
import { Wrapper } from "./SongItemStyle";

const SongItem = ({ song, title, selected }) => {
  const [selectMe, setSelectMe] = useState(selected);
  return (
    <Wrapper selected={selectMe} onClick={() => setSelectMe(!selectMe)}>
      <iframe src={song} title={song} width="100%" />
      <p>{title}</p>
    </Wrapper>
  );
};

export default SongItem;
