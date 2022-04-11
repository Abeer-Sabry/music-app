import React, { useEffect } from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { getSingersAsync } from "../../Redux/singersSlice/singersSlice";
// ---- MATERIAL UI ---- //
import { Grid } from "@mui/material";
import { clickedSinger } from "../../Redux/albumsSlice/albumsSlice";
// import { data } from "../../data";
// ---- STYLED-COMPONENTS ---- //
import { SingersWrapper } from "./SingersStyle";
import SingerItem from "./singerItem/SingerItem";
import { Content, CustomContainer, MainWrapper } from "../../constants/constants";
const Singers = () => {
  // REDUX
  const dispatch = useDispatch();
  const { singers } = useSelector(state => state.singerStep);
  const { selectedSinger } = useSelector(state => state.album);
  // ALBUMS-ARRAY
  const selectAlbums = selectedSinger.map(item => item.albums);

  // SONGS-COUNT
  const songs = selectAlbums.map(album => album.map(al => al.songs.map(item => item)));
  let songsArray = [];
  for (let i = 0; i < songs.length; i++) {
    let arr = songs[i];
    songsArray = songsArray.concat(arr);
  }
  let finalSongsArray = [];
  for (let i = 0; i < songsArray.length; i++) {
    let arr = songsArray[i];
    finalSongsArray = finalSongsArray.concat(arr);
  }
  // SONGS-AMOUNT
  const amount = finalSongsArray.reduce((total, item) => {
    return total + item.price;
  }, 0);

  useEffect(() => {
    dispatch(getSingersAsync());
  }, [dispatch]);

  return (
    // <CustomContainer>
    <MainWrapper>
      <SingersWrapper>
        {singers.map(singer => (
          <div key={singer.id} onClick={() => dispatch(clickedSinger(singer))}>
            <SingerItem {...singer} />
          </div>
        ))}
      </SingersWrapper>
      <Content>
        <p>
          count: <span>{finalSongsArray.length} </span>
          <span className="number">songs</span>
        </p>
        <p>
          totalPrice <span>{amount}</span> <span className="number">L.E</span>
        </p>
      </Content>
    </MainWrapper>
    // </CustomContainer>
  );
};

export default Singers;
