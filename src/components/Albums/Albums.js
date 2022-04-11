import React, { useEffect } from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
// ---- MATERIAL UI ---- //
import { Grid } from "@mui/material";
// ---- COMPONENTS ---- //
import AlbumItem from "./AlbumItem.js/AlbumItem";
import { Content, MainWrapper } from "../../constants/constants";
import { AlbumsWrapper } from "./AlbumStyle";
const Albums = () => {
  // REDUX
  const { selectedSinger } = useSelector(state => state.album);
  const { selectedAlbums } = useSelector(state => state.song);
  // console.log("albumComponent", selectedAlbums);
  // LOOPS
  const albums = selectedSinger.map(singer => singer.albums);

  let albumArray = [];
  for (let i = 0; i < albums.length; i++) {
    const arr = albums[i];
    albumArray = albumArray.concat(arr);
    console.log("albumArray", albumArray);
  }
  // --------- SONGS-LOOPS-COUNT ---------- //

  // let songsArray = [];
  // for (let i = 0; i < songs.length; i++) {
  //   const arr = songs[i];
  // console.log("songI ARR ", arr);
  // songsArray = songsArray.concat(arr);
  // console.log("songsArr", songsArray);
  // }
  // TOTAL-SONGS-AMOUNT

  const price = selectedAlbums.reduce((total, song) => {
    return total + song.price;
  }, 0);
  // const price = songsArray.map(song => song.price);
  // console.log("songsInaAlbumsPrice", price);
  // const totalPrice = price.reduce((a, b) => a + b);
  // console.log("totalPriceXXX", totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <MainWrapper>
      <div>
        {albums.map(album => {
          // console.log("content", album);
          return (
            <AlbumsWrapper key={album.id}>
              {album.map(al => {
                return (
                  <div key={al.id}>
                    <AlbumItem {...al} />
                  </div>
                );
              })}
              ;
            </AlbumsWrapper>
          );
        })}
      </div>
      {/* {albumArray.map(album => {
          console.log("contentComponent", album);
          return (
            <Grid item md={3} xs={12} key={album.id}>
              <AlbumItem {...album} />
            </Grid>
          );
        })} */}
      <Content>
        <Grid item md={12} style={{ textAlign: "center" }}>
          <p>
            count : <span>{selectedAlbums.length}</span> <span className="number">songs</span>{" "}
          </p>
          <p>
            totalPrice : <span>{price}</span> <span className="number">L.E</span>
          </p>
        </Grid>
      </Content>
    </MainWrapper>
  );
};

export default Albums;
