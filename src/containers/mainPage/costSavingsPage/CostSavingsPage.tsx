import { Typography, Grid, Box } from "@mui/material";
import React from "react";
//@ts-ignore
import aceGlobalsavings from "src/images/aceGlobalsavings.svg";

export const CostSavingsPage = () => {
  return (
    <Grid px="15%" py="64px" container direction="column">
      <Grid>
        <Typography color="primary" variant="h1" textAlign="center">
          Ready to optimize your{" "}
          <Box component="span" sx={{ color: "#FF59E4" }}>
            hiring costs?
          </Box>
        </Typography>
      </Grid>
      <Grid container direction="row" alignItems="center" justifyContent="center" py="64px">
        <Grid component="img" src={aceGlobalsavings} />
      </Grid>
    </Grid>
  );
};
