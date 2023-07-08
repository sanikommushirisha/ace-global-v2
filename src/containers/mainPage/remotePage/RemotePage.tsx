import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { AceGlobalLocations } from "./AceGlobalLocations";

export const RemotePage = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#FFF4ED" }}
      pl="10%"
      py="64px"
      gap="32px"
      direction={{ sm: "column", md: "row" }}>
      <Grid item sm={12} md={6}>
        <Typography variant="h3" color="primary">
          Remote work revolution, with a local office twist
        </Typography>
        <Typography color="primary" py="32px">
          Experience the Best of Both Worlds with Ace Global. Our team enjoy the perfect blend of
          remote work flexibility and valuable in-person connections. Through our offices in India,
          we elevate talent across asia but also simplify in-person meetings with the local customer
          success team in California, USA. Embrace the benefits of a harmonious work-life balance
          and the power of in-person collaboration.
        </Typography>
        <Button color="primary" variant="contained">
          Hire Talent
        </Button>
      </Grid>
      <Grid container justifyContent="center" sm={12} md={5}>
        <AceGlobalLocations />
      </Grid>
    </Grid>
  );
};
