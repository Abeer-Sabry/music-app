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
  @media only screen and (max-width: 1180px) {
    grid-template-columns: 9fr 3fr;
  }
  @media only screen and (max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  border: 1px solid white;
  padding: 10px 0;
  border-radius: 22px;
  @media only screen and (max-width: 860px) {
    margin-bottom: 15px;
  }

  p {
    font-size: 17px;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    @media only screen and (max-width: 1045px) {
      font-size: 15px;
    }

    .number {
      background: -webkit-linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 17px;
      @media only screen and (max-width: 1045px) {
        font-size: 15px;
      }
    }
    span {
      color: white;
      font-size: 25px;
      @media only screen and (max-width: 1045px) {
        font-size: 20px;
      }
      @media only screen and (max-width: 600px) {
        font-size: 22px;
      }
    }
  }
`;
