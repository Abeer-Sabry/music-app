import React, { useState } from "react";
// ---- REDUX ---- //
import { useSelector } from "react-redux";
// ---- COMPONENTS ---- //
import Singers from "../Singers/Singers";
import Albums from "../Albums/Albums";
import Songs from "../Songs/Songs";
import RegisterForm from "../Form/RegisterForm";
// ---- STYLED-COMPONENTS ---- //
import { MusicWrapper } from "./MusicStyle";
// ---- REUSABLE-COMPONENTS ---- //
import { BackButton, NextButton } from "../../reusableComponents/Button";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants/constants";
// ---- MATERIAL-UI-CONTAINER ---- //
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["Singer", "Albums", "Songs", "Submit Request"];

const MusicStepper = () => {
  // ----- REDUX
  const { disabled } = useSelector(state => state.album);
  // -----  MATERIAL-UI-ISSUES  ----- //
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // --- STEPPERS-CONTENT-COMPONENTS --- //
  const getStepperContent = step => {
    switch (step) {
      case 0:
        return <Singers />;
      case 1:
        return <Albums />;
      case 2:
        return <Songs />;
      case 3:
        return <RegisterForm />;
      default:
        return "unKnown";
    }
  };
  return (
    <CustomContainer style={{ marginBottom: "50px" }}>
      <MusicWrapper>
        <Box className="box" sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography sx={{ color: "orange" }} variant="caption"></Typography>;
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel color="orange" {...labelProps}>
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>{getStepperContent(activeStep)}</Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <BackButton color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </BackButton>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <NextButton NextButton sx={{ color: "red" }} disabled={!disabled} onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </NextButton>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </MusicWrapper>
    </CustomContainer>
  );
};

export default MusicStepper;
