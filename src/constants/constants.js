import styled from "styled-components";

export const CustomContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-column-gap: 100px;
  justify-content: space-between;
  align-items: center;
`;
export const Wrapper = styled.div`
  margin-top: 20px;
  img {
    margin-bottom: 10px;
    border-style: solid;
    border-width: 10px;
    border-radius: 7px;
    border-image: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045) 1;
  }
  p {
    font-size: 25px;
    color: white;
    text-transform: capitalize;
  }
`;

export const Content = styled.div`
  text-align: center;
  /* border-left: 5px solid;
  border-image: linear-gradient(10deg, #833ab4, #fd1d1d, #fcb045) 1; */
  border: 1px solid white;
  padding: 10px 0;
  border-radius: 22px;
  p {
    font-size: 17px;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    .number {
      background: -webkit-linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 17px;
    }
    span {
      color: white;
      font-size: 25px;
    }
  }
`;
