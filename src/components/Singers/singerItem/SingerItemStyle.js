import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 0;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    margin: 20px 0;
  }
  img {
    margin-bottom: 10px;
    border-style: solid;
    border-width: 10px;
    border-image: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045) 1;
    box-shadow: ${props => (props.selectMeSinger ? "5px 3px 2px orange" : "none")};
  }
  p {
    font-size: 22px;
    color: white;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 700px) {
    p {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 600px) {
    p {
      font-size: 22px;
    }
  }
`;
