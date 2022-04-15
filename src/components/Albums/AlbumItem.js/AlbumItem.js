import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clickedAlbum } from "../../../Redux/songsSlice/songsSlice";
import { Wrapper } from "./AlbumItemStyle";

const AlbumItem = ({ id, img, title, songs, selected }) => {
  // console.log("songsAlbumItem", ...songs);
  // const hisong = [...songs];
  // console.log("hitSong", hisong);
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
          console.log("dispatched", ...songs);
        }}
      >
        <img src={img} alt="" />
        <p>{title}</p>
      </Wrapper>
      {/* {hisong.map(item => (
        <div style={{ color: "white" }}>{item.title}</div>
      ))} */}
    </>
  );
};

export default AlbumItem;
