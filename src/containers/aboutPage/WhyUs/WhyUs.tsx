import { Grid, Typography } from "@mui/material";
import React from "react";

export const WhyUs = () => {
  const steps = [
    {
      title: "A Decade of Experience",
      description: "Define hiring needs and specific accounting roles."
    },
    {
      title: "Scale Efficiently",
      description: "Screening interview based on qualifications and experience."
    },
    {
      title: "Timely Delivery",
      description: "Technical assessments to evaluate relevant skills."
    },
    {
      title: "Flexible Pricing",
      description: "Panel interviews with partners."
    }
  ];
  return (
    <Grid
      container
      direction="column"
      flexWrap="nowrap"
      py="96px"
      px="10%"
      sx={{ backgroundColor: "#FAF5F2" }}>
      <Grid container direction="row" flexWrap="nowrap">
        <Grid item md={8} lg={6}>
          <Typography color="primary" variant="h1">
            Why Ace Global?
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" flexWrap="nowrap" sx={{ overflowY: "scroll" }} py="32px">
        <Grid
          container
          direction="column"
          flexWrap="nowrap"
          minWidth={{ md: "1200px", sm: "auto", xs: "auto" }}>
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "repeat(4, minmax(0, 1fr))", xs: "auto", sm: "auto" },
              gridTemplateRows: {
                xs: "repeat(4, minmax(0, 1fr))",
                sm: "repeat(4, minmax(0, 1fr))",
                md: "auto"
              },
              gridGap: "32px",
              gridAutoRows: "1fr"
            }}>
            {steps.map((step, index) => (
              <Grid item key={index} height="100%">
                <Grid
                  container
                  height="100%"
                  direction="column"
                  flexWrap="nowrap"
                  py="32px"
                  px="16px"
                  sx={{
                    backgroundColor: "rgba(255, 194, 35, 0.15)",
                    border: "1px solid #290A38",
                    borderRadius: "5px",
                    boxShadow: "8px 8px #ffcd00"
                  }}>
                  <Grid item>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{
                        backgroundColor: "rgba(255, 194, 35, 0.75)",
                        borderRadius: "5px",
                        padding: "8px",
                        textAlign: "center",
                        margin: "0px 16px"
                      }}>
                      {step.title}
                    </Typography>
                    <Typography pt="20px">{step.description}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
