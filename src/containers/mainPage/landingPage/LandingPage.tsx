/* eslint-disable prettier/prettier */
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

//@ts-ignore
import accountantsSrc from "src/images/main-page-accountants.svg";


export const LandingPage = () => {
  return (
      <Grid
        container
        justifyContent="center"
        direction={{ xs: "column", md: "row" }}
        pl="10%"
        pr="5%"
        sx={{
          width: "100%",
          height: "calc(75vh - 84px)",
          minHeight: "500px",
          backgroundColor:"#9747ff80",
          flexWrap: "nowrap",
          boxShadow: "var(--tw-shadow)",
          borderBottom: "var(--tw-border)"
        }}>
          <Grid item xs={6} pt="8%">
            <Grid>
              <Typography color="secondary" variant="h1" sx={{maxWidth: "70%"}}>
                Hire the <Box component="span" sx={{color: "#290A38"}}>Top 1%</Box> of Accounting Talent
              </Typography>
              <Typography color="primary" py="16px" variant="subtitle1">
                Ace Global is your best solution to expand your team.
              </Typography>
              <Typography color="primary" variant="subtitle2">
                Partner with us to hire growth-oriented accountants at unparalleled rates, seamlessly adapting to your time zone and boasting the industry&apos;s highest retention rate.
              </Typography>
              <Grid
                container
                direction={{ xs: "column", md: "row" }}
                py="30px"
                gap="32px"
                flexWrap="nowrap">
                <Button variant="contained" sx={{backgroundColor: "#000000", color: "#ffffff"}}>
                  Hire Talent
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container pt="6%" item xs={6} alignItems="flex-start" justifyContent="center">
            <Grid component="img" src={accountantsSrc} sx={{height: "auto", width: "auto" }} />
          </Grid>
      </Grid>
  );
};
