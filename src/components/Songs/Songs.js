import React, { useEffect } from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";

// ---- MATERIAL UI ---- //
import { Grid } from "@mui/material";
import { clickedSong } from "../../Redux/songsSlice/songsSlice";
import SongItem from "./SongItem/SongItem";
import { Content, MainWrapper } from "../../constants/constants";
import { SongsWrapper } from "./SongsStyle";

const Songs = () => {
  // REDUX
  const { selectedAlbums, SelectedSongs } = useSelector(state => state.song);
  // const songs = selectedAlbums.map(album => album.songs);
  // console.log("selectedAlbums", selectedAlbums);

  // TOTAL-PRICE-REDUCE //
  const totalPrice = SelectedSongs.reduce((total, song) => {
    return total + song.price;
  }, 0);
  // const price = SelectedSongs.map(song => song.price);
  // console.log("selectedSongPrice", price);
  // const amount = price.reduce((a, b) => a + b);
  // console.log("amount", amount);
  // const amount = SelectedSongs.reduce((x, y) => x + y.price + y.price, 0);
  // console.log("amount", amount);

  // let totalSongs = [];
  // for (let i = 0; i < selectedAlbums.length; i++) {
  //   let arr = selectedAlbums[i];
  //   totalSongs = totalSongs.concat(arr);
  //   console.log("concat", totalSongs);
  // }

  // const price = selectedAlbums.map(album => album.songs.map(item => item.price));

  // let priceArray = [];
  // for (let i = 0; i < price.length; i++) {
  //   const arr = price[i];
  //   priceArray = priceArray.concat(arr);
  // }
  // const totalPrice = priceArray.reduce((a, b) => a + b);

  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <MainWrapper>
      <SongsWrapper>
        {selectedAlbums.map(song => {
          // console.log("div", song);
          return (
            <Grid item md={4} xs={12} onClick={() => dispatch(clickedSong(song))}>
              <SongItem {...song} />
            </Grid>
          );
        })}
      </SongsWrapper>
      <Content>
        <p>
          count: <span>{SelectedSongs.length}</span> <span className="number">songs</span>
        </p>
        <p>
          amount : <span>{totalPrice}</span> <span className="number">L.E</span>{" "}
        </p>
      </Content>
    </MainWrapper>
  );
};

export default Songs;
