import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { AdvantagePage } from "src/containers/common/AdvantagePage";

//@ts-ignore
import remoteRevolutionSrc from "src/images/remote-revolution.svg";
//@ts-ignore
import ourMottoSrc from "src/images/our-motto.svg";
//@ts-ignore
import sparkleSrc from "src/images/sparkle.svg";
//@ts-ignore
import homeSrc from "src/images/home.svg";

export const AboutUsAdvantages = () => {
  const ADVANTAGES = [
    {
      imgSrc: ourMottoSrc,
      splitImgSrc: sparkleSrc,
      backgroundColor: "rgba(255, 194, 35, 0.50)",
      children: (
        <Grid>
          <Typography variant="h3">
            Our{" "}
            <Box component="span" sx={{ color: "#FFC223" }}>
              Motto
            </Box>
          </Typography>
          <Typography variant="subtitle2" pt="32px">
            We want to build a community with a commitment to empower accountants and provide the
            resources and support they need to succeed. We believe that accounting firms deserve
            equal access to the best talent and resources across the globe, and we’re working to
            build the best remote teams for you.
          </Typography>
        </Grid>
      )
    },
    {
      imgSrc: remoteRevolutionSrc,
      splitImgSrc: homeSrc,
      backgroundColor: "rgba(61, 255, 173, 0.5)",
      children: (
        <Grid>
          <Typography variant="h3">
            Join The{" "}
            <Box component="span" sx={{ color: "#00CD76" }}>
              Remote Work Revolution
            </Box>{" "}
            With Us
          </Typography>
          <Typography variant="subtitle2" pt="32px">
            It&apos;s time for you to jump on the bandwagon of remote work. Ace Global can build you
            a flexible remote workforce across Accounting, CPAs, and Virtual Assistants. You will be
            free to select the candidates that fit your needs.
          </Typography>
        </Grid>
      )
    }
  ];

  return (
    <Grid container width="100vw" direction="column" flexWrap="nowrap">
      {ADVANTAGES.map((advantage, index) => {
        return (
          <AdvantagePage
            key={index}
            index={index}
            flexDirection={{
              lg: index % 2 === 0 ? "row" : "row-reverse",
              md: index % 2 === 0 ? "row" : "row-reverse",
              xs: "column",
              sm: "column"
            }}
            {...advantage}>
            {advantage.children}
          </AdvantagePage>
        );
      })}
    </Grid>
  );
};
