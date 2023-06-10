import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export const RemoteAdvantageCard = ({ imgSrc, title, content }: any) => {
  return (
    <Card
      sx={{
        "&.MuiPaper-root": {
          borderRadius: "36px"
        }
      }}>
      <Grid>
        <Grid
          container
          sx={{
            backgroundImage: `url(${imgSrc})`,
            flexWrap: "nowrap",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            textAlign: "center"
          }}>
          <Typography color="secondary" variant="h4" width="100%" padding="50px 0px">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <CardContent>{content}</CardContent>
    </Card>
  );
};
