import {
  Box,
  Step,
  stepConnectorClasses,
  StepLabel,
  stepLabelClasses,
  Stepper,
} from "@mui/material";
import { useState } from "react";

const stepperStyle = {
  padding: "24px 0 ",
};

const stepStyle = {
  flexBasis: "175px",
  padding: "0 24px",

  [`& .${stepConnectorClasses.lineHorizontal}`]: {
    borderColor: "#184F90",
  },
};

const stepLabelStyle = {
  [`& .${stepLabelClasses.iconContainer}`]: {
    svg: {
      color: "#184F90",
      width: "30px",
      height: "30px",

      text: {
        fontSize: "10.5px",
      },
    },
  },

  [`&.${stepLabelClasses.disabled}`]: {
    [`& .${stepLabelClasses.iconContainer}`]: {
      svg: {
        color: "rgba(0,0,0,.38)",
      },
    },
  },

  [`& .${stepLabelClasses.label}`]: {
    marginTop: "11px",
    fontWeight: 700,
  },
};

export default function CreateWalletModalStepper({ steps, stepComponents }) {
  const [activeStep, setActiveStep] = useState(1);

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} sx={stepperStyle} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={label} sx={stepStyle}>
              <StepLabel sx={stepLabelStyle}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {stepComponents[activeStep]}
    </Box>
  );
}
