import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";

import { Header } from "src/containers/header/Header";
import backgroundSrc from "src/images/main-page-bckg.png";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Grid
        container
        justifyContent="center"
        direction={{ xs: "column", md: "row" }}
        sx={{
          width: "100%",
          height: "inherit",
          backgroundImage: `url(${backgroundSrc})`,
          flexWrap: "nowrap",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90% center"
        }}>
        <Grid item xs={6} maxHeight="100vh">
          <Grid mx="24px" pt="20%">
            <Typography color="secondary" variant="h1">
              GET ACCESS TO TOP ACCOUNTING TALENT FOR YOUR FIRM
            </Typography>
            <Typography color="secondary" py="30px">
              Imagine your firm reducing operational costs by 50% in 90 Days with Ace Global
            </Typography>
            <Divider color="#ffffff" />
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              py="30px"
              gap="32px"
              flexWrap="nowrap">
              <Button color="secondary" variant="outlined" fullWidth>
                Your Professional E-Mail
              </Button>
              <Button color="secondary" variant="contained" fullWidth>
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} />
      </Grid>
    </>
  );
};
