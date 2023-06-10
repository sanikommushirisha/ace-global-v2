import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const CardImage = ({ imageSrc, alt, ...restProps }) => {
  return (
    <Grid>
      <Box component="img" alt={alt} src={imageSrc} {...restProps} />
    </Grid>
  );
};
