import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeSinger, clickedButton, clickedSinger } from "../../../Redux/albumsSlice/albumsSlice";
import { Wrapper } from "./SingerItemStyle";
const SingerItem = ({ id, img, title, albums }) => {
  const { selectMeSinger } = useSelector(state => state.album);
  // console.log("id", id);
  // State
  const [selectMe, setSelectMe] = useState(selectMeSinger);
  // Redux
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper
        selectMeSinger={selectMe}
        // style={{ boxShadow: `${selectMe ? "1px 1px 20px purple" : "none"}` }}
        key={id}
      >
        <img
          src={img}
          alt=""
          onClick={() => {
            // dispatch(activeSinger());
            setSelectMe(!selectMeSinger);
          }}
        />
        <p>{title}</p>
      </Wrapper>
      {/* <button onClick={() => dispatch(clickedButton(id))}>buy</button> */}
    </>
  );
};

export default SingerItem;
