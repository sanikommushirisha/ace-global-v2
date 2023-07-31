import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { AceGlobalLocations } from "./AceGlobalLocations";
import { useNavigate } from "react-router-dom";

export const RemotePage = () => {
  const navigate = useNavigate();
  const navigateToContactPage = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };
  return (
    <Grid
      container
      sx={{ backgroundColor: "#FFF4ED" }}
      pl="10%"
      py="5%"
      gap="32px"
      direction={{ sm: "column", md: "row" }}>
      <Grid item sm={12} md={6}>
        <Typography variant="h3" color="primary">
          Remote work revolution, with{" "}
          <Box component="span" sx={{ color: "#6E00A1" }}>
            Local Office
          </Box>
        </Typography>
        <Typography color="primary" py="32px">
          Experience the best of both worlds with Ace Global. With us, you enjoy the perfect blend
          of harmonious work-life balance and valuable in-person connections. Through our offices in
          India, we elevate talent across Asia but also simplify in-person meetings with the local
          customer success team in California, USA.
        </Typography>
        <Button color="primary" variant="contained" onClick={navigateToContactPage}>
          Hire Talent
        </Button>
      </Grid>
      <Grid container justifyContent="center" sm={12} md={5}>
        <AceGlobalLocations />
      </Grid>
    </Grid>
  );
};
