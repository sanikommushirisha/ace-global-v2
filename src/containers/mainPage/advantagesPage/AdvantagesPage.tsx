import React from "react";
import { AdvantagePage } from "./AdvantagePage";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

//@ts-ignore
import specialitiesSrc from "src/images/specialities.svg";
//@ts-ignore
import accountantsSrc from "src/images/accountants.svg";
//@ts-ignore
import savingsSrc from "src/images/savings.svg";
//@ts-ignore
import excellencySrc from "src/images/excellency.svg";
//@ts-ignore
import communitySrc from "src/images/community.svg";
//@ts-ignore
import globalHiringSrc from "src/images/globalHiring.svg";
//@ts-ignore
import starSrc from "src/images/star.svg";
//@ts-ignore
import calculatorSrc from "src/images/calculator.svg";
//@ts-ignore
import expensesSrc from "src/images/expenses.svg";
//@ts-ignore
import rocketSrc from "src/images/rocket.svg";
//@ts-ignore
import atomSrc from "src/images/atom.svg";
//@ts-ignore
import friendshipSrc from "src/images/friendship.svg";

import { BlueButton, YellowButton } from "src/components/button";

export const AdvantagesPage = () => {
  const specialities = [
    {
      title: "Audit assistance"
    },
    {
      title: "Book-keeping"
    },
    {
      title: "Tax planning"
    },
    {
      title: "Risk-management"
    },
    {
      title: "SOX audit compliance"
    },
    {
      title: "PCAOB audit"
    }
  ];

  const ADVANTAGES = [
    {
      imgSrc: specialitiesSrc,
      splitImgSrc: starSrc,
      backgroundColor: "rgba(255, 194, 35, 0.5)",
      children: (
        <Grid>
          <Typography variant="h3" sx={{ color: "#FFC223" }}>
            100+ Specialties
          </Typography>
          <Typography variant="subtitle2" pt="32px">
            Trust us to fulfill all your accounting talent needs across diverse domains and
            disciplines. Our extensive range of accounting solutions covers a wide spectrum of
            expertise and services, such as:
          </Typography>
          <Box sx={{ flexGrow: 1 }} pt="16px">
            <Grid container rowSpacing={2} columnSpacing={24}>
              {specialities.map((speciality, index) => (
                <Grid xs={6} key={index}>
                  <BlueButton fullWidth>{speciality.title}</BlueButton>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid container direction="row" py="16px" justifyContent="center">
            <Box width="50%">
              <YellowButton fullWidth>Many More</YellowButton>
            </Box>
          </Grid>
        </Grid>
      )
    },
    {
      imgSrc: accountantsSrc,
      splitImgSrc: calculatorSrc,
      backgroundColor: "rgba(61, 255, 173, 0.5)",
      children: (
        <Grid>
          <Typography variant="h3">
            <Box component="span" sx={{ color: "#00CD76" }}>
              Accountants
            </Box>{" "}
            who understand and embrace your firm
          </Typography>
          <Typography variant="subtitle2" pt="32px">
            Bid farewell to hand-holding contractors and welcome accountants who truly immerse
            themselves in your firm’s growth. Our team of professionals goes beyond the surface
            level, diligently attending to every detail, from reporting and preparation to analysis.
            With a relentless focus on delivering an exceptional user experience, they breathe life
            into your business services and ensure timely delivery at every stage.
          </Typography>
        </Grid>
      )
    },
    {
      imgSrc: savingsSrc,
      splitImgSrc: expensesSrc,
      backgroundColor: "rgba(151, 71, 255, 0.50)",
      children: (
        <Grid>
          <Typography variant="h3">
            Optimise{" "}
            <Box component="span" sx={{ color: "#9747FF" }}>
              Operational expenses
            </Box>
          </Typography>
          <Typography variant="subtitle2" pt="32px">
            Hiring top-notch accountants shouldn&apos;t break the bank. Rest assured, we handle any
            business challenge and deliver exceptional accounting services that provide value for
            your investment, ensuring financial success while keeping costs in check.
          </Typography>
        </Grid>
      )
    },
    {
      imgSrc: excellencySrc,
      splitImgSrc: rocketSrc,
      backgroundColor: "rgba(255, 194, 35, 0.50)",
      children: (
        <Grid>
          <Typography variant="h3">
            We&apos;re all about{" "}
            <Box component="span" sx={{ color: "#FFC223" }}>
              speed and quality
            </Box>
          </Typography>
          <Typography variant="subtitle2" pt="32px">
            Leave the hassle of finding your ideal accounting teammate to us. We prioritize speed
            and quality, ensuring seamless talent recruitment for you. Focus on what you do best,
            confident that we&apos;ll handle the rest!
          </Typography>
        </Grid>
      )
    },
    {
      imgSrc: communitySrc,
      splitImgSrc: atomSrc,
      backgroundColor: "rgba(255, 80, 227, 0.50);",
      children: (
        <Grid>
          <Typography variant="h3">
            Feel the power of{" "}
            <Box component="span" sx={{ color: "#FF1DDB" }}>
              5000+ community members
            </Box>
          </Typography>
          <Typography variant="subtitle2" pt="32px">
            We understand the importance of cultivating a happy and dedicated accounting community
            that stays with us for the long run. Experience the transformative power of a united
            community and witness the positive impact it has on your business&apos;s success.
          </Typography>
        </Grid>
      )
    },
    {
      imgSrc: globalHiringSrc,
      splitImgSrc: friendshipSrc,
      backgroundColor: "rgba(188, 242, 255, 0.75);",
      children: (
        <Grid>
          <Typography variant="h3">
            <Box component="span" sx={{ color: "#1D97B6" }}>
              Global hiring
            </Box>{" "}
            has never been easier
          </Typography>
          <Typography variant="subtitle2" pt="32px">
            We are a one-stop-shop solution for talent, HR, technology, benefits, and office space
            for accounting firms in the USA. Let us handle hiring, training, onboarding, and
            managing global talent while you relax, unwind, and focus on achieving your goals.
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
            flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
            {...advantage}>
            {advantage.children}
          </AdvantagePage>
        );
      })}
    </Grid>
  );
};
