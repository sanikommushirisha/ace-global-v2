import { Typography, Grid, Box } from "@mui/material";
import React from "react";
//@ts-ignore
import aceGlobalsavings from "src/images/aceGlobalSavings.svg";

export const CostSavingsPage = () => {
  return (
    <Grid px="15%" py="5%" container direction="column">
      <Grid>
        <Typography color="primary" variant="h1" textAlign="center">
          Optimize Your{" "}
          <Box component="span" sx={{ color: "#FF59E4" }}>
            Hiring Costs
          </Box>{" "}
          Now
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        py={{ md: "64px", sm: "32px", xs: "8px" }}>
        <Grid component="img" src={aceGlobalsavings} sx={{ maxWidth: "100%", height: "100%" }} />
      </Grid>
    </Grid>
  );
};
