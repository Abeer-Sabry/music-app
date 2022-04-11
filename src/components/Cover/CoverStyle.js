import styled from "styled-components";
import cover from "../../imgs/web.png";

export const Wrapper = styled.div`
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 100px;
  margin-bottom: 50px;
  h1 {
    color: white;
    text-transform: capitalize;
    font-size: 60px;
  }
`;
