import React from "react";
import { Grid, Typography } from "@mui/material";

import { BackgroundText } from "src/components/BackgroundText";

import accountingProfessional from "src/images/accounting-professional.png";
import cpa from "src/images/cpa.png";
import virtualAssitant from "src/images/virtual-assistant.png";
import { AccountingProfessionalCard } from "./AccountingProfessionalCard";

const accountinProfessionals = [
  {
    imgSrc: accountingProfessional,
    title: "ACCOUNTANTS",
    description:
      "Outsource professional accountants who will be able to handle all financial transactions, data entry, audits, compliance, and more."
  },
  {
    imgSrc: cpa,
    title: "CPAs",
    description:
      "Our skilled Certified Public Accountant will deliver the most senior-level skillset to drive process excellence in your firm."
  },
  {
    imgSrc: virtualAssitant,
    title: "VIRTUAL  ASSISTANT",
    description:
      "From clearing your inbox to scheduling meetings to data entry, if you’re buried in time-consuming administrative tasks, hiring a virtual assistant can help."
  }
];
export const AccountingProfessionalsPage = () => {
  return (
    <Grid
      pt="160px"
      py="84px"
      container
      sx={{ backgroundColor: "#ffffff", justifyContent: "center" }}>
      <BackgroundText text="PROFESSIONAL" fontSize={200} height={200} color="#2C2C2C">
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ color: "#2C2C2C", gap: "16px" }}>
          <Typography variant="h1" maxWidth={{ xs: "100%", sm: "60%" }} minWidth="50%">
            TOP ACCOUNTING PROFESSIONALS
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
        Ace Global helps you access qualified and skilled talent, and control costs by offering you
        outsourced accounting solutions and automation to amplify firm&apos;s growth. Here&apos;s
        how you can build your remote team.
      </Typography>
      <Grid
        pt="64px"
        px="10%"
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(3, minmax(0, 1fr))", xs: "none" },
          gridTemplateRows: { xs: "repeat(3, minmax(0, 1fr))", md: "none" }
        }}
        gap="32px">
        {accountinProfessionals.map(({ imgSrc, title, description }) => (
          <AccountingProfessionalCard
            key={imgSrc}
            imgSrc={imgSrc}
            title={title}
            description={description}
          />
        ))}
      </Grid>
    </Grid>
  );
};
