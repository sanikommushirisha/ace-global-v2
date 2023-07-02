import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

export const BlueButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      sx={{
        backgroundColor: "#9747FF",
        color: "#ffffff",
        "&:hover": {
          backgroundColor: "#9747FF",
          filter: "brightness(80%)"
        }
      }}
      {...props}>
      {children}
    </Button>
  );
};

export const YellowButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      sx={{
        backgroundColor: "rgba(255, 194, 35, 0.75)",
        color: "#000000",
        "&:hover": {
          backgroundColor: "rgba(255, 194, 35, 0.75)",
          filter: "brightness(80%)"
        }
      }}
      {...props}>
      {children}
    </Button>
  );
};
