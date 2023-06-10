import React from 'react';
import Grid from '@mui/material/Grid';

export const ImageScroller = ({ children }) => {
  return (
    <Grid
      height="100%"
      width="100%"
      position="relative"
      sx={{ overflow: 'hidden' }}
    >
      <Grid
        sx={{
          top: '0px',
          position: 'absolute',
          left: '0px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          '@keyframes bannermove': {
            '0%': {
              transform: 'translate(0, 0)'
            },
            '100%': {
              transform: 'translate(-50%, 0)'
            }
          },
          animation: 'bannermove 10s linear infinite'
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};
