import { Grid } from "@mui/material";
import React from "react";

import starSrc from "src/images/star.png";

type Props = {
  imgSrc: string;
  backgroundColor: string;
  children: React.ReactNode;
  flexDirection: "row" | "row-reverse";
  splitImgSrc: string;
};

export const AdvantagePage = ({
  imgSrc,
  backgroundColor,
  children,
  flexDirection = "row",
  splitImgSrc
}: Props) => {
  return (
    <Grid
      container
      sx={{
        position: "relative"
      }}>
      <Grid
        container
        sx={{
          borderBottom: "var(--tw-border)",
          flexDirection,
          backgroundColor,
          overflow: "hidden"
        }}>
        <Grid
          item
          xs={6}
          py="64px"
          sx={{
            borderRight: flexDirection === "row" ? "var(--tw-border)" : "none"
          }}>
          <Grid container direction="row" alignItems="center" justifyContent="center">
            <Grid component="img" src={imgSrc} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          p="64px"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "center",
            borderRight: flexDirection === "row-reverse" ? "var(--tw-border)" : "none",
            backgroundColor: "#ffffff",
            paddingLeft: flexDirection === "row" ? "64px" : "10%",
            paddingRight: flexDirection === "row-reverse" ? "64px" : "10%"
          }}>
          {children}
        </Grid>
        <Grid container position="absolute" top="48%" left="48%" width="auto">
          <Grid component="img" src={splitImgSrc} />
        </Grid>
      </Grid>
    </Grid>
  );
};
