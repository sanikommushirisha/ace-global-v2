import React from "react";
import { Grid, Typography } from "@mui/material";

import { Waves } from "src/images/waves";
import { BackgroundText } from "src/components/BackgroundText";

export const ImprovePage = () => {
  return (
    <Grid sx={{ backgroundColor: "#ffffff", paddingTop: "84px" }}>
      <BackgroundText text="IMPROVE" fontSize={300} height={300} color="#2C2C2C">
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ color: "#2C2C2C", gap: "16px" }}>
          <Typography variant="h1" maxWidth={{ xs: "100%", sm: "70%" }} minWidth="50%">
            ‘ IMPROVE PROFITABILITY WITH OUR OFFSHORE ACCOUNTING ASSISTANCE ’
          </Typography>
        </Grid>
      </BackgroundText>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={{ sm: "0", md: "10%" }}
        gap="84px"
        direction={{ xs: "column", md: "row" }}>
        <Typography
          sx={{
            display: { xs: "none", md: "none", lg: "block" },
            maxWidth: "70%",
            fontWeight: 600
          }}>
          Ace Global helps you access qualified and skilled talent, and control costs by offering
          you outsourced accounting solutions and automation to amplify firm&apos;s growth.
          Here&apos;s how you can build your remote team.
        </Typography>
        <Waves />
      </Grid>
    </Grid>
  );
};
