import React from "react";
import { Box, Grid, Typography } from "@mui/material";

//@ts-ignore
import stepSrc from "src/images/step1.svg";
//@ts-ignore
import step2Src from "src/images/step2.svg";
//@ts-ignore
import step3Src from "src/images/step3.svg";
//@ts-ignore
import step4Src from "src/images/step4.svg";
//@ts-ignore
import step5Src from "src/images/step5.svg";

export const HiringPage = () => {
  const stepSrcs = [stepSrc, step2Src, step3Src, step4Src, step5Src];
  const steps = [
    {
      description: "Define hiring needs and specific accounting roles."
    },
    {
      description: "Screening interview based on qualifications and experience."
    },
    {
      description: "Technical assessments to evaluate relevant skills."
    },
    {
      description: "Panel interviews with partners."
    },
    {
      description: "Welcome to our team!"
    }
  ];
  return (
    <Grid container direction="column" flexWrap="nowrap" py="10%" px="10%">
      <Grid container direction="row" flexWrap="nowrap">
        <Grid item md={8} lg={6}>
          <Typography color="primary" variant="h1">
            Take Your Hiring Game to{" "}
            <Box component="span" sx={{ color: "rgba(255, 194, 35, 0.75)" }}>
              New Heights
            </Box>
          </Typography>
          <Typography color="primary" variant="subtitle2" pt="16px">
            Our commitment to brilliance drives us to go the extra mile to attract the best talent.
            Our rigorous screening process ensures that we hand pick only the finest accountants as
            your teammates. We strive to bring you exceptional accounting professionals who are
            dedicated to your success.
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" flexWrap="nowrap" sx={{ overflowY: "scroll" }} py="32px">
        <Grid container direction="column" flexWrap="nowrap" minWidth="1200px">
          <Grid container direction="row" pt="32px" pb="32px">
            <Grid container direction="row" position="relative" width="100%">
              <Grid
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                  gridGap: "32px",
                  gridAutoRows: "1fr",
                  width: "100%"
                }}>
                {stepSrcs.map((stepSrc, index) => (
                  <Grid key={index} sx={{ zIndex: 1 }}>
                    <Grid component="img" src={stepSrc} />
                  </Grid>
                ))}
              </Grid>
              <Grid
                position="absolute"
                sx={{ border: 0, height: "1px", background: "black", top: "45%", width: "85%" }}
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
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
                        width: "75px",
                        backgroundColor: "rgba(255, 194, 35, 0.75)",
                        borderRadius: "5px",
                        padding: "8px",
                        textAlign: "center"
                      }}>{`Step ${index + 1}`}</Typography>
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
