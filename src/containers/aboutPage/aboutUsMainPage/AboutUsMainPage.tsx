import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";

//@ts-ignore
import aboutUsSrc from "src/images/about-us-landing-page.svg";

export const AboutUsMainPage = () => {
  const navigate = useNavigate();
  const navigateToContactPage = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };
  return (
    <Grid
      container
      justifyContent="center"
      pl="10%"
      pr="5%"
      py="5%"
      sx={{
        width: "100%",
        minHeight: "500px",
        backgroundColor: "#FAF5F2",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        flexWrap: "nowrap",
        boxShadow: "var(--tw-shadow)",
        borderBottom: "var(--tw-border)",
        gridGap: "64px"
      }}>
      <Grid item lg={7} md={7}>
        <Grid>
          <Typography color="primary" variant="h1" sx={{ maxWidth: { sm: "70%", xs: "100%" } }}>
            Here&apos;s Something{" "}
            <Box component="span" sx={{ color: "#9747FF" }}>
              About us...
            </Box>{" "}
          </Typography>
          <Typography color="primary" py="16px" variant="subtitle2">
            In 2019, Ace Global started its journey with a mission: <b>to bring people together </b>{" "}
            by breaking down those pesky geo-barriers and connecting top talent with high-growth CPA
            Firms In the USA.
          </Typography>
          <Typography color="primary" variant="subtitle2">
            At Ace Global, we&apos;re not your average talent outsourcing firm. We&apos;re the
            masterminds behind a grand vision where growth and collaboration flourish like never
            before.
          </Typography>
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            py="30px"
            gap="32px"
            flexWrap="nowrap">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#000000", color: "#ffffff" }}
              onClick={navigateToContactPage}>
              Hire Talent
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        lg={5}
        md={5}
        display={{ sm: "none", md: "block" }}
        alignItems="flex-start"
        justifyContent="center">
        <Grid component="img" src={aboutUsSrc} sx={{ height: "100%", maxWidth: "100%" }} />
      </Grid>
    </Grid>
  );
};
