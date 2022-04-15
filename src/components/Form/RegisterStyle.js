import styled from "styled-components";

export const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
    input {
      margin-bottom: 5px;
      padding: 7px;
      border: 1px solid #fcb045;
      background-color: transparent;
      color: white;
      border-radius: 7px;
    }
  }
  .error {
    color: #fd1d1d;
    margin-bottom: 15px;
    font-size: 12px;
    text-transform: capitalize;
  }
`;
