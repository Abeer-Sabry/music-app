import styled from "styled-components";

export const MusicWrapper = styled.div`
  .MuiStepIcon-root.Mui-active {
    fill: orange !important;
  }
  .MuiStepIcon-root.Mui-completed {
    fill: #fcb045 !important;
  }
  .MuiStepIcon-root {
    color: white !important;
  }
  .MuiStepIcon-text {
    fill: black !important;
  }

  .MuiStepLabel-label {
    color: white !important;
  }
  .MuiStepLabel-label.Mui-active {
    color: #fcb045 !important;
  }
  .MuiStepLabel-label.Mui-completed {
    color: #fcb045 !important;
  }

  @media only screen and (max-width: 725px) {
    .MuiStepIcon-root {
      font-size: 18px !important;
    }
  }
  @media only screen and (max-width: 725px) {
    .MuiStepLabel-label {
      font-size: 13px !important;
    }
  }
  @media only screen and (max-width: 560px) {
    .MuiStepIcon-root {
      font-size: 16px !important;
    }
  }
  @media only screen and (max-width: 560px) {
    .MuiStepLabel-label {
      font-size: 12px !important;
    }
  }
  @media only screen and (max-width: 500px) {
    .MuiStepIcon-root {
      font-size: 14px !important;
    }
  }
  @media only screen and (max-width: 500px) {
    .MuiStepLabel-label {
      font-size: 12px !important;
    }
  }
  @media only screen and (max-width: 460px) {
    .MuiStepIcon-root {
      font-size: 14px !important;
    }
  }
  @media only screen and (max-width: 460px) {
    .MuiStepLabel-label {
      font-size: 11px !important;
    }
  }
  @media only screen and (max-width: 420px) {
    .MuiStepIcon-root {
      font-size: 12px !important;
    }
  }
  @media only screen and (max-width: 420px) {
    .MuiStepLabel-label {
      font-size: 10px !important;
    }
  }
`;
