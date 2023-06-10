import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const fontSizeVariantMapping = { small: "body2", medium: "body1" };
export const IconAppendedText = ({
  size = "medium",
  title,
  children,
  color = "#28004d",
  ...restProps
}) => {
  return (
    <>
      <Grid as="span">
        <CheckIcon
          fontSize={size}
          sx={{
            verticalAlign: "middle",
            display: "inline-block",
            color,
          }}
        />

        <Typography
          variant={fontSizeVariantMapping[size]}
          color="textPrimary"
          as="span"
          sx={{
            verticalAlign: "middle",
            overflowWrap: "break-word",
            paddingLeft: "8px",
          }}
          {...restProps}
        >
          {children || title}
        </Typography>
      </Grid>
    </>
  );
};
