import { Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
//@ts-ignore
import aceGlobalFooterLogo from "src/images/aceGlobalFooterLogo.svg";
//@ts-ignore
import backgroundSrc from "src/images/footerBackground.svg";
//@ts-ignore
import indiaSrc from "src/images/india.svg";
//@ts-ignore
import usSrc from "src/images/US.svg";
//@ts-ignore
import linkedInSrc from "src/images/linkedIn.svg";
//@ts-ignore
import twitterSrc from "src/images/twitter.svg";
//@ts-ignore
import emailSrc from "src/images/email.svg";
//@ts-ignore
import callSrc from "src/images/call.svg";
//@ts-ignore
import copyRightIconSrc from "src/images/copyRightIcon.svg";

const locationItems = [
  {
    locationSrc: indiaSrc,
    name: "Janaswamy Associates",
    location: "Maryland Corner, B-603, Sion, 39, T.V.Chidambaram Marg, Sion East, Mumbai, India"
  },
  {
    locationSrc: usSrc,
    name: "HQ - Ace Global",
    location: "San Francisco, CA 94086, USA"
  }
];
export const Footer = () => {
  const socialLinks = [linkedInSrc, twitterSrc, emailSrc, callSrc];
  return (
    <Grid
      container
      direction="column"
      flexWrap="nowrap"
      px="10%"
      pt="128px"
      pb="32px"
      sx={{
        backgroundImage: `url(${backgroundSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
      <Grid container item direction="row" flexWrap="nowrap" pb="16px">
        <Grid item xs={6}>
          <Typography color="secondary" variant="h2" fontWeight="500 !important">
            Quick Links
          </Typography>
          <Divider sx={{ borderColor: "#ffffff", paddingY: "8px", width: "60%" }} />
          <Grid container direction="column" flexWrap="nowrap" gap="8px" py="16px">
            <Typography color="secondary">About Us</Typography>
            <Typography color="secondary">Blogs</Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" flexWrap="nowrap" xs={6}>
          <Grid item container direction="row" flexWrap="nowrap" justifyContent="space-between">
            <Typography color="secondary" variant="h2" fontWeight="500 !important">
              Ace Global
            </Typography>
            <Grid
              component="img"
              src={aceGlobalFooterLogo}
              sx={{ height: "56px", width: "auto" }}
            />
          </Grid>
          <Divider sx={{ borderColor: "#ffffff", paddingY: "8px", width: "100%" }} />
          <Grid container direction="row" flexWrap="nowrap" gap="52px" py="16px">
            {locationItems.map((locationItem, index) => {
              const { locationSrc, location, name } = locationItem;
              return (
                <Grid key={index} container direction="column" flexWrap="nowrap">
                  <Grid container direction="row" item pb="8px" alignItems="center">
                    <Grid src={locationSrc} component={"img"} pr="8px" />
                    <Typography color="secondary" fontWeight="600">
                      {name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="secondary">{location}</Typography>{" "}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid container direction="column" alignItems="center" flexWrap="nowrap">
            <Typography color="secondary" fontWeight="600">
              We are everywhere!
            </Typography>
            <Typography color="secondary">Connect with us</Typography>
            <Grid container direction="row" justifyContent="center">
              {socialLinks.map((link, index) => (
                <IconButton key={index} color="secondary">
                  <Grid component="img" src={link} />
                </IconButton>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        flexWrap="nowrap"
        alignItems="center"
        gap="2px"
        pr="10%">
        <Grid component="img" src={copyRightIconSrc} sx={{ width: "30px", height: "30px" }} />
        <Typography color="secondary">2023 joinaceglobal.com</Typography>
        <Typography color="secondary">All Rights Reserved</Typography>
        <Link sx={{ textDecorationColor: "white" }}>
          <Typography color="secondary" fontWeight="600" component="span">
            Terms & Privacy
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
