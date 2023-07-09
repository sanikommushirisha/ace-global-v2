import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

//@ts-ignore
import founder1 from "src/images/arun.svg";
//@ts-ignore
import founder2 from "src/images/shankar.svg";
//@ts-ignore
import founder3 from "src/images/dinesh.svg";

export const AceFolks = () => {
  const founders = [
    {
      imgSrc: founder2,
      name: "Mr. Narayan Shankar",
      role: "Co-Founder",
      description:
        "Professional with over two  decades of experience in providing regulatory advisory services to various multinational and private banks. Expert in compliance, assurance, and regulatory reporting to various authorities."
    },
    {
      imgSrc: founder1,
      name: "Mr. Arun Kumar",
      role: "Co-Founder",
      description:
        "Skilled in risk management information systems (MIS), Business relationship management, Risk Management, Auditing and financial analysis."
    },
    {
      imgSrc: founder3,
      name: "Mr. Dinesh Challa",
      role: "Co-Founder",
      description:
        "Holds a masters degree in Information Management from Syracuse University, NY. Expertise in Business Analytics, Risk Management, IS Analysis & Audit, and Artificial Intelligence"
    }
  ];
  return (
    <Grid container direction="column" flexWrap="nowrap" px="5%" my="10%">
      <Grid
        sx={{
          backgroundColor: "rgba(255, 207, 80, 0.05)",
          border: "1px solid #290A38",
          borderRadius: "5px",
          boxShadow: "8px 8px #ffcd00",
          padding: { sm: "2.5%", xs: "5%" }
        }}>
        <Grid item container justifyContent="center">
          <Typography
            color="primary"
            variant="h1"
            width={{ sm: "50%", xs: "100%" }}
            textAlign="center">
            Hey, folks! We&apos;re the minds behind{" "}
            <Box component="span" sx={{ color: "#9747FF" }}>
              Ace Global
            </Box>
          </Typography>
          <Typography px="5%" py="5%">
            Over the years, the challenge to source and retain the{" "}
            <Box component="span" sx={{ color: "#9747FF", fontWeight: "600" }}>
              best accounting talent in the USA increased
            </Box>
            . We built{" "}
            <Box component="span" sx={{ color: "#9747FF", fontWeight: "600" }}>
              Ace Global
            </Box>{" "}
            for other{" "}
            <Box component="span" sx={{ color: "#9747FF", fontWeight: "600" }}>
              US CPA firms
            </Box>{" "}
            to ease the complexities of hiring, training , onboarding and supporting accounting
            talent.
          </Typography>
        </Grid>
        <Grid
          item
          py="8px"
          container
          direction={{ md: "row", sm: "column", xs: "column" }}
          alignItems="flex-start"
          flexWrap="nowrap"
          columnGap="64px">
          {founders.map((founder, index) => (
            <>
              <Grid
                key={index}
                item
                container
                direction="column"
                xs={4}
                alignItems="center"
                justifyContent="center"
                sx={{
                  flexWrap: "nowrap"
                }}>
                <Grid py="16px" item px="32px" container justifyContent="center">
                  <Grid component="img" src={founder.imgSrc} />
                </Grid>
                <Grid item pb="8px" width="100%" container justifyContent="center">
                  <Typography
                    p="4px 12px"
                    color="primary"
                    fontWeight={600}
                    sx={{
                      backgroundColor: "rgba(255, 194, 35, 0.25)",
                      borderRadius: "4px",
                      width: { sm: "50%", xs: "100%" },
                      textAlign: "center"
                    }}>
                    {founder.name}
                  </Typography>
                </Grid>
                <Grid item pb="16px" width="100%" container justifyContent="center">
                  <Typography
                    p="4px 12px"
                    color="#9747FF"
                    sx={{
                      backgroundColor: "rgba(151, 71, 255, 0.15)",
                      borderRadius: "4px",
                      width: { sm: "50%", xs: "100%" },
                      textAlign: "center"
                    }}>
                    {founder.role}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography textAlign="center">{founder.description}</Typography>
                </Grid>
              </Grid>
              {index !== founders.length - 1 && <Divider orientation="vertical" flexItem />}
            </>
          ))}
        </Grid>
        <Grid item py="32px" container direction="row" justifyContent="center" flexWrap="nowrap">
          <Button variant="contained">Book a Call</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
