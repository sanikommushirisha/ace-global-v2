import { Grid } from "@mui/material";
import React from "react";

type Props = {
  imgSrc: string;
  backgroundColor: string;
  children: React.ReactNode;
  flexDirection: any;
  splitImgSrc: string;
  index: number;
};

export const AdvantagePage = ({
  imgSrc,
  backgroundColor,
  children,
  flexDirection = "row",
  splitImgSrc,
  index
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
          flexWrap: "nowrap",
          backgroundColor,
          overflow: "hidden"
        }}>
        <Grid
          item
          md={6}
          sm={12}
          py={{ sm: "64px", xs: "16px" }}
          px={{ md: "none", sm: "64px", xs: "16px" }}
          sx={{
            borderRight: {
              lg: index % 2 === 0 ? "var(--tw-border)" : "none",
              md: index % 2 === 0 ? "var(--tw-border)" : "none",
              xs: "none",
              sm: "none"
            }
          }}>
          <Grid container direction="row" alignItems="center" justifyContent="center">
            <Grid
              component="img"
              src={imgSrc}
              sx={{
                height: { xs: "100%", sm: "100%", md: "auto" },
                width: { xs: "100%", sm: "100%", md: "auto" }
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          p={{ md: "64px", sm: "32px", xs: "16px" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "center",
            borderRight: {
              lg: index % 2 === 1 ? "var(--tw-border)" : "none",
              md: index % 2 === 1 ? "var(--tw-border)" : "none",
              xs: "none",
              sm: "none"
            },
            backgroundColor: "#ffffff",
            paddingLeft: {
              lg: index % 2 === 1 ? "10%" : "64px",
              md: index % 2 === 1 ? "5%" : "64px"
            },
            paddingRight: {
              lg: index % 2 === 0 ? "10%" : "64px",
              md: index % 2 === 0 ? "5%" : "64px"
            }
          }}>
          {children}
        </Grid>
        <Grid
          container
          position="absolute"
          top="50%"
          left="50%"
          width="auto"
          sx={{
            transform: "translate(-50%, -50%)",
            display: { xs: "none", sm: "none", md: "block" }
          }}>
          <Grid component="img" src={splitImgSrc} />
        </Grid>
      </Grid>
    </Grid>
  );
};
