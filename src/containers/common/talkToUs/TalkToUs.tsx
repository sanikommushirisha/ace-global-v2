import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export const TalkToUs = () => {
  return (
    <Grid
      container
      direction="row"
      px="10%"
      sx={{ backgroundColor: "#FAF5F2" }}
      py="64px"
      mb="32px"
      gap="32px"
      flexWrap="nowrap"
      justifyContent="space-around">
      <Grid item xs={6}>
        <Typography color="primary" variant="h2" pb="16px">
          Drive your firm towards success with Ace Global.
        </Typography>
        <Typography color="primary">
          Whether you need the expertise of a CPA, or the precision of an accountant, we’ve got you
          covered.
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        container
        direction="column"
        alignItems="center"
        flexWrap="nowrap"
        justifyContent="center">
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ paddingY: "32px", width: "50%" }}>
          Schedule a Free Call Now
        </Button>
      </Grid>
    </Grid>
  );
};
