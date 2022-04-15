import styled from "styled-components";
// ---- IMG ---- //
import cover from "../../imgs/web.png";

export const Wrapper = styled.div`
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  h1 {
    color: white;
    text-transform: capitalize;
    font-size: 60px;
    @media only screen and (max-width: 745px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 571px) {
      font-size: 45px;
    }
    @media only screen and (max-width: 485px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 430px) {
      font-size: 35px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 25px;
    }
  }
`;
