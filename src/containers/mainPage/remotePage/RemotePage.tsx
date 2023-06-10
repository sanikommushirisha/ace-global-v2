import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { BackgroundText } from "src/components/BackgroundText";
import { RemoteAdvantageCard } from "./RemoteAdvantageCard";

import technologySrc from "src/images/technology.png";
import talentSrc from "src/images/talent.png";
import noOverheadSrc from "src/images/no-overhead.png";

const cards = [
  {
    title: "TECHNOLOGY",
    imgSrc: technologySrc,
    items: [
      "Improve your technology & automate your processes.",
      "Operate remotely with the right tools, mindset, and approach.",
      "Implement best tools and practices to develop remote teams all across the world.",
      "Get the latest emerging strategies to improve and prepare your firm for the future of accounting."
    ]
  },
  {
    title: "TALENT ON DEMAND",
    imgSrc: talentSrc,
    items: [
      "Hire experienced accountant at the fraction of local costs.",
      "Attract top talent - No guesswork. No trial and error. No more getting stuck.",
      "No Downtime, No separate office concerns, Hire experts across the world.",
      "Enforce your values and manage your CPA firm’s culture so that you feel good about what you do."
    ]
  },
  {
    title: "0% OVERHEAD",
    imgSrc: noOverheadSrc,
    items: [
      "Setup a scalable firm model.",
      "Quickly grow a scalable accounting firm that you love.",
      "Say goodbye to profit guzzling expenses like office rent, taxes, hardware etc.",
      "Reduce your workload, improve work-life balance, and make time for what’s important outside of work."
    ]
  }
];

export const RemotePage = () => {
  return (
    <Grid width="100%" sx={{ backgroundColor: "#221654" }} py="96px">
      <BackgroundText text="REMOTE" fontSize={250} height={300} color="#FFFFFF">
        <Typography variant="h1" sx={{ maxWidth: "50%", color: "#FFFFFF" }}>
          JOIN THE REMOTE WORK REVOLUTION
        </Typography>
      </BackgroundText>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "auto auto auto", xs: "none" },
          gridTemplateRows: { xs: "auto auto auto", md: "none" }
        }}
        px="10%"
        gap="32px"
        py="64px">
        {cards.map(({ imgSrc, items, title }) => (
          <RemoteAdvantageCard
            key={imgSrc}
            imgSrc={imgSrc}
            title={title}
            content={
              <Grid container gap="16px">
                {items.map((item, index) => (
                  <Grid container direction="row" key={item} flexWrap="nowrap">
                    <Grid pr="12px" pt="4px">
                      <CheckCircleOutlineIcon color="primary" />
                    </Grid>
                    <Typography key={index}>{item}</Typography>
                  </Grid>
                ))}
              </Grid>
            }
          />
        ))}
      </Grid>
      <Grid container px="25%" direction="row" flexWrap="nowrap">
        <Divider
          sx={{
            width: "100%",
            "&.MuiDivider-root": {
              "&::before": {
                backgroundColor: "#ffffff",
                borderTopWidth: "2px"
              },
              "&::after": {
                backgroundColor: "#ffffff",
                borderTopWidth: "2px"
              }
            }
          }}>
          <Grid px="12px">
            <Button fullWidth color="secondary" variant="contained">
              See how it works
            </Button>
          </Grid>
        </Divider>
      </Grid>
    </Grid>
  );
};
