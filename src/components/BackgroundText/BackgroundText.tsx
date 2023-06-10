import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
  color?: string;
  text: string;
  fontSize: number;
  height: number;
};

export const BackgroundText = ({
  children,
  text,
  fontSize,
  height,
  color = "#221654",
  ...restProps
}: Props) => {
  return (
    <Box
      sx={{
        minHeight: {
          xl: `${height}px`,
          lg: `${0.8 * height}px`,
          md: `${0.7 * height}px`,
          sm: `${0.5 * height}px`,
          xs: `${0.25 * height}px`
        },
        width: "100%",
        display: "flex",
        position: "relative"
      }}>
      <Typography
        component="div"
        sx={{
          color,
          width: "100%",
          position: "absolute",
          opacity: "0.1",
          fontSize: {
            xl: fontSize,
            lg: 0.8 * fontSize,
            md: 0.7 * fontSize,
            sm: 0.5 * fontSize,
            xs: 0 * fontSize
          },
          lineHeight: {
            xl: `${height}px`,
            lg: `${0.8 * height}px`,
            md: `${0.7 * height}px`,
            sm: `${0.5 * height}px`,
            xs: `${0.25 * height}px`
          },
          textAlign: "center",
          textTransform: "uppercase",
          ...restProps
        }}>
        {text}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>
        {children}
      </Box>
    </Box>
  );
};
