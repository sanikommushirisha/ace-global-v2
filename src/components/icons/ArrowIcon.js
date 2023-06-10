import React from 'react';
import Grid from '@mui/material/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const ArrowIcon = ({ color = 'primary' }) => (
  <Grid item>
    <ArrowCircleRightOutlinedIcon
      sx={{ height: '32px', width: '32px', color }}
    />
  </Grid>
);
