import React from "react";
// ---- REDUX ---- //
import { useSelector } from "react-redux";
// ---- STYLED-COMPONENTS ---- //
import { AlbumsWrapper } from "./AlbumStyle";
// ---- COMPONENTS ---- //
import AlbumItem from "./AlbumItem.js/AlbumItem";
// ---- CONSTANTS ---- //
import { Content, MainWrapper } from "../../constants/constants";
const Albums = () => {
  // REDUX
  const { selectedSinger } = useSelector(state => state.album);
  const { selectedAlbums } = useSelector(state => state.song);

  // LOOPS
  const albums = selectedSinger.map(singer => singer.albums);

  let albumArray = [];
  for (let i = 0; i < albums.length; i++) {
    const arr = albums[i];
    albumArray = albumArray.concat(arr);
    console.log("albumArray", albumArray);
  }

  const price = selectedAlbums.reduce((total, song) => {
    return total + song.price;
  }, 0);

  return (
    <MainWrapper>
      <div>
        {albums.map(album => {
          // console.log("content", album);
          return (
            <AlbumsWrapper key={album.id}>
              {album.map(al => {
                return <AlbumItem {...al} />;
              })}
              ;
            </AlbumsWrapper>
          );
        })}
      </div>

      <Content>
        <p>
          count : <span>{selectedAlbums.length}</span> <span className="number">songs</span>{" "}
        </p>
        <p>
          totalPrice : <span>{price}</span> <span className="number">L.E</span>
        </p>
      </Content>
    </MainWrapper>
  );
};

export default Albums;
