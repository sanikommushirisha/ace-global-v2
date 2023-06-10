import React from "react";
import { Typography, MenuItem, Grid } from "@mui/material";

import { Link } from "src/components/link";

type Props = {
  items: Array<{ link: string; title: string }>;
};
export const HeaderItems = ({ items }: Props) => {
  return (
    <Grid width="300px">
      {items.map((item) => (
        <MenuItem key={item.title}>
          <Typography width="100%">
            <Link to={item.link}>{item.title}</Link>
          </Typography>
        </MenuItem>
      ))}
    </Grid>
  );
};
