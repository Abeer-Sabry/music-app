import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clickedAlbum } from "../../../Redux/songsSlice/songsSlice";
import { Wrapper } from "./AlbumItemStyle";

const AlbumItem = ({ id, img, title, songs }) => {
  // console.log("songsAlbumItem", songs);
  const dispatch = useDispatch();
  // STATE
  const [selectMe, setSelectMe] = useState(false);
  return (
    <Wrapper
      // key={id}
      style={{ boxShadow: `${selectMe ? "1px 1px 8px orange" : "none"}` }}
      onClick={() => {
        setSelectMe(!selectMe);
        dispatch(clickedAlbum(songs));
      }}
    >
      <img src={img} alt="" />
      <p>{title}</p>
    </Wrapper>
  );
};

export default AlbumItem;
