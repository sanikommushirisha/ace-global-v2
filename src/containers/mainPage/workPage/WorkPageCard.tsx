import React from "react";
import { Button, Card, Grid, Typography } from "@mui/material";

export const WorkPageCard = ({ imgSrc, title, url }: any) => {
  return (
    <Card
      sx={{
        "&.MuiPaper-root": {
          borderRadius: "36px"
        }
      }}>
      <Grid
        container
        direction="column-reverse"
        sx={{
          height: "600px",
          width: "auto",
          backgroundImage: `url(${imgSrc})`,
          flexWrap: "nowrap",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          alignItems: "center",
          padding: "48px",
          gap: "32px"
        }}>
        <Button variant="contained" color="secondary" fullWidth>
          Know More
        </Button>
        <Typography color="secondary" variant="h4" width="50%">
          {title}
        </Typography>
      </Grid>
    </Card>
  );
};
