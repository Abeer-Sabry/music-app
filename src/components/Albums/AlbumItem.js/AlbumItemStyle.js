import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 0;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    margin: 20px 0;
  }
  img {
    margin-bottom: 7px;
    border-style: solid;
    border-width: 10px;
    border-radius: 7px;
    border-image: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045) 1;
    box-shadow: ${props => (props.selectMe ? "5px 3px 2px orange" : "none")};
  }
  p {
    font-size: 17px;
    font-weight: bold;
    color: white;
    text-transform: capitalize;
    @media only screen and (max-width: 987px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 893px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
`;
