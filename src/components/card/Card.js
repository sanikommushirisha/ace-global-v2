import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CardImage } from "./CardImage";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "inherit",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  boxShadow: "0 8px 33px rgb(29 2 84 / 64%)",
}));

export const Card = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};
