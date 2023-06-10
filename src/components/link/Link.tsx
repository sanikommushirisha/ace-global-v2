import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";

export const Link = ({
  children,
  to,
  size = "medium",
  ...restProps
}: {
  to: string;
  size?: "small" | "medium";
  children: React.ReactNode;
}) => {
  return (
    <RouterLink to={to} {...restProps}>
      <Typography
        color="primary"
        sx={{
          textTransform: "none",
          fontWeight: size === "small" ? "550" : "500",
          fontSize: size === "small" ? "0.875rem" : "1rem",
          lineHeight: size == "small" ? "1rem" : "1.5rem",
          letterSpacing: "0.02857em"
        }}>
        {children}
      </Typography>
    </RouterLink>
  );
};
