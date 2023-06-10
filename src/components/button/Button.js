import React from "react";
import MuiButton from "@mui/material/Button";

const paletteStylesMapping = {
  secondary: {
    backgroundColor: "#f5edff",
    color: "#8039df",
    borderColor: "#8039df",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  },
};
export const Button = ({
  variant = "contained",
  palette = "secondary",
  children,
  ...restProps
}) => {
  return (
    <MuiButton
      variant={variant}
      sx={{
        fontWeight: "600",
        borderRadius: "20px",
        textTransform: "none",
        cursor: "pointer",
        ...paletteStylesMapping[palette],
      }}
      {...restProps}
    >
      {children}
    </MuiButton>
  );
};
