import React, { useState } from "react";
// ---- REDUX ---- //
import { useDispatch } from "react-redux";
import { clickedAlbum } from "../../../Redux/songsSlice/songsSlice";
// ---- STYLED-COMPONENTS ---- //
import { Wrapper } from "./AlbumItemStyle";

const AlbumItem = ({ id, img, title, songs, selected }) => {
  const dispatch = useDispatch();
  // STATE
  const [selectMe, setSelectMe] = useState(selected);
  return (
    <>
      <Wrapper
        key={id}
        selectMe={selectMe}
        onClick={() => {
          setSelectMe(!selectMe);
          dispatch(clickedAlbum(songs));
        }}
      >
        <img src={img} alt="" />
        <p>{title}</p>
      </Wrapper>
    </>
  );
};

export default AlbumItem;
