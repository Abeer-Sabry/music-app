import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 50px;
  img {
    margin-bottom: 7px;
    border-style: solid;
    border-width: 10px;
    border-radius: 7px;
    border-image: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045) 1;
    /* box-shadow: ${props => (props.selectMeSinger ? "5px 3px 2px orange" : "none")}; */
  }
  p {
    font-size: 17px;
    font-weight: bold;
    color: white;
    text-transform: capitalize;
  }
`;
