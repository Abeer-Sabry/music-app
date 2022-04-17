import React, { useEffect } from "react";
// ---- COMPONENTS ---- //
import SongItem from "./SongItem/SongItem";
// ---- STYLED-COMPONENTS ---- //
import { SongsWrapper } from "./SongsStyle";
// ---- CONSTANTS ---- //
import { Content, MainWrapper } from "../../constants/constants";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { clickedSong } from "../../Redux/songsSlice/songsSlice";

const Songs = () => {
  // REDUX
  const dispatch = useDispatch();
  const { selectedAlbums, SelectedSongs } = useSelector(state => state.song);

  // TOTAL-PRICE-REDUCE //
  const totalPrice = SelectedSongs.reduce((total, song) => {
    return total + song.price;
  }, 0);

  useEffect(() => {}, []);
  return (
    <MainWrapper>
      <SongsWrapper>
        {selectedAlbums.map(song => {
          return (
            <div>
              <div key={song.id} onClick={() => dispatch(clickedSong(song))}>
                <SongItem {...song} />
              </div>
            </div>
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
