import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

export const AccountingProfessionalCard = ({ imgSrc, title, description }: any) => {
  return (
    <Card
      sx={{
        "&.MuiPaper-root": {
          borderRadius: "25px"
        }
      }}>
      <Grid
        container
        direction="column-reverse"
        padding="32px"
        sx={{
          height: "275px",
          width: "auto",
          backgroundImage: `url(${imgSrc})`,
          flexWrap: "nowrap",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          alignItems: "center"
        }}>
        <Typography color="secondary" variant="h4">
          {title}
        </Typography>
      </Grid>
      <CardContent>
        <Typography color="primary" fontWeight={550}>
          {description}
        </Typography>
      </CardContent>
      <Grid mx="32px" mb="32px" mt="16px">
        <Button variant="contained" color="primary" fullWidth>
          Know More
        </Button>
      </Grid>
    </Card>
  );
};
