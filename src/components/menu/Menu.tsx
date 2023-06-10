import React from "react";
import { Button, Paper, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { usePopupState, bindHover, bindPopover } from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";

export const Menu = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  return (
    <Grid item>
      <Button
        fullWidth
        color="primary"
        {...bindHover(popupState)}
        endIcon={
          popupState.isOpen ? (
            <ArrowDropUpIcon onClick={() => {}} />
          ) : (
            <ArrowDropDownIcon onClick={() => {}} />
          )
        }>
        {title}
      </Button>
      <HoverPopover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        disableScrollLock>
        <Paper
          sx={{
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: "10%",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }}>
          {children}
        </Paper>
      </HoverPopover>
    </Grid>
  );
};
