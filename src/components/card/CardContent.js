import React from 'react';
import Grid from '@mui/material/Grid';

export const CardContent = ({ children, ...restProps }) => {
  return (
    <Grid
      container
      textAlign="start"
      flexDirection="row"
      justifyContent="space-between"
      {...restProps}
    >
      {children}
    </Grid>
  );
};
