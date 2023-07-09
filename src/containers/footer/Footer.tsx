import { Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
//@ts-ignore
import footerLogo from "src/images/footerLogo.svg";

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
    locationSrc: usSrc,
    name: "HQ - Ace Global",
    location: "San Francisco, CA 94086, USA"
  },
  {
    locationSrc: indiaSrc,
    name: "Janaswamy Associates",
    location: "Maryland Corner, B-603, Sion, 39, T.V.Chidambaram Marg, Sion East, Mumbai, India"
  }
];
export const Footer = () => {
  const socialLinks = [
    { imgSrc: linkedInSrc, href: "https://www.linkedin.com/company/join-ace-global/" },
    { imgSrc: twitterSrc, href: "https://twitter.com/aceglobal_asia" },
    { imgSrc: emailSrc, href: "mailto:hello@joinaceglobal.com" },
    { imgSrc: callSrc }
  ];
  const footerItems = [
    {
      title: "INFORMATION",
      items: [
        {
          title: "About Us"
        },
        {
          title: "Blogs"
        }
      ]
    },
    {
      title: "CASE STUDIES",
      items: [
        {
          title: "Audit Assistance"
        },
        {
          title: "Financial Reporting"
        },
        {
          title: "Tax Assistance"
        },
        {
          title: "HR Assistance"
        }
      ]
    }
  ];
  return (
    <Grid
      container
      direction="column"
      flexWrap="nowrap"
      px="10%"
      pt="10%"
      pb="5%"
      sx={{
        backgroundColor: "#290A38"
      }}>
      <Grid
        container
        item
        direction={{ md: "row", sm: "column", xs: "column" }}
        flexWrap="nowrap"
        pb="16px"
        rowGap="32px">
        <Grid item md={6} sm={12} container direction="column" flexWrap="nowrap">
          <Grid item container direction="row" flexWrap="nowrap" gap="16px">
            <Grid component="img" src={footerLogo} />
            <Typography color="secondary" variant="subtitle1">
              Ace Global
            </Typography>
          </Grid>
          <Divider
            sx={{
              maxWidth: { sm: "60%", xs: "100%" },
              borderColor: "rgba(255, 255, 255, 0.25)",
              paddingY: "8px"
            }}
          />
          <Grid
            container
            direction="column"
            flexWrap="nowrap"
            gap="16px"
            py="16px"
            maxWidth={{ sm: "60%", xs: "100%" }}>
            {locationItems.map((locationItem, index) => {
              const { locationSrc, location, name } = locationItem;
              return (
                <Grid
                  key={index}
                  container
                  direction="row"
                  flexWrap="nowrap"
                  alignItems="flex-start">
                  <Grid container flex={0}>
                    <Grid src={locationSrc} component={"img"} pt="4px" pr="8px" />
                  </Grid>
                  <Grid item direction="row" pb="2px" alignItems="center">
                    <Typography color="secondary" variant="body2">
                      {name}
                    </Typography>
                    <Typography color="secondary" variant="body2" fontWeight={"500 !important"}>
                      {location}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid container direction="row" justifyContent="flex-start">
            {socialLinks.map((link, index) => (
              <IconButton key={index} color="secondary">
                <Link href={link.href}>
                  <Grid component="img" src={link.imgSrc} />
                </Link>
              </IconButton>
            ))}
          </Grid>
        </Grid>
        <Grid container direction="column" item md={6} sm={12} alignItems="flex-start">
          <Typography color="secondary" variant="subtitle1">
            Quick Links
          </Typography>
          <Divider
            sx={{ borderColor: "rgba(255, 255, 255, 0.25)", paddingY: "8px", width: "100%" }}
          />
          <Grid
            container
            direction={{ md: "row", sm: "column", xs: "column" }}
            flexWrap="nowrap"
            gap="48px"
            py="16px"
            justifyContent="flex-end"
            alignItems="flex-start">
            {footerItems.map((footer, index) => (
              <Grid
                container
                key={index}
                item
                direction="column"
                flexWrap="nowrap"
                alignItems="flex-end">
                <Grid container item direction="column" gap="8px">
                  <Typography color="secondary">{footer.title}</Typography>
                  {footer.items.map((item, index) => (
                    <Typography
                      key={index}
                      color="secondary"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: 500
                      }}>
                      {item.title}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.25)", paddingY: "8px", width: "100%" }} />
      <Grid
        item
        container
        direction="column"
        flexWrap="nowrap"
        alignItems="center"
        gap="2px"
        pr="10%"
        py="16px">
        <Grid component="img" src={copyRightIconSrc} sx={{ width: "30px", height: "30px" }} />
        <Typography color="secondary" sx={{ color: "rgba(255, 255, 255, 0.75)" }}>
          2023 joinaceglobal.com | All Rights Reserved
        </Typography>
        <Link sx={{ textDecorationColor: "white" }}>
          <Typography color="secondary" fontWeight="600" component="span">
            Terms & Privacy
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
