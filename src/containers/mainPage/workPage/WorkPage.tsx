import React from "react";
import { Grid, Typography } from "@mui/material";

import { BackgroundText } from "src/components/BackgroundText";

import taxAssistance from "src/images/tax-assistance.png";
import auditAssistance from "src/images/audit-assistance.png";
import soxAssistance from "src/images/sox-assistance.png";
import { WorkPageCard } from "./WorkPageCard";

const workCards = [
  {
    imgSrc: taxAssistance,
    title: "TAX ASSISTANCE"
  },
  {
    imgSrc: auditAssistance,
    title: "AUDIT ASSISTANCE"
  },
  {
    imgSrc: soxAssistance,
    title: "SOX ASSISTANCE"
  }
];
export const WorkPage = () => {
  return (
    <Grid container direction="column">
      <Grid
        container
        sx={{ backgroundColor: "#ffffff", paddingTop: "84px", justifyContent: "center" }}>
        <BackgroundText text="WORK" fontSize={200} height={200} color="#2C2C2C">
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ color: "#2C2C2C", gap: "16px" }}>
            <Typography variant="h1" maxWidth={{ xs: "100%", sm: "60%" }} minWidth="50%">
              WHAT WE DO?
            </Typography>
          </Grid>
        </BackgroundText>
        <Typography
          sx={{
            display: { xs: "none", md: "none", lg: "block" },
            maxWidth: "70%",
            fontWeight: 600,
            textAlign: "center"
          }}>
          Ace Global does everything your accounting firm needs to scale, boost profitability, and
          spend time doing strategic work that will lead to sustainable business growth.
        </Typography>
      </Grid>
      <Grid
        py="64px"
        px="10%"
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "auto auto auto", xs: "none" },
          gridTemplateRows: { xs: "auto auto auto", md: "none" }
        }}
        gap="32px">
        {workCards.map(({ imgSrc, title }) => (
          <WorkPageCard key={imgSrc} imgSrc={imgSrc} title={title} />
        ))}
      </Grid>
    </Grid>
  );
};
