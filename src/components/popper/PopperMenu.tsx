/* eslint-disable no-unused-vars */
import React from "react";
import { Paper, Popper, Button, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

type Value = {
  label: string | number;
  value: string;
  disabled?: boolean;
  onClick?: (event: any) => void;
};
type Props = {
  label: string;
  values?: Value[];
  children?: React.ReactNode;
  labelStyles?: any;
  buttonProps?: any;
  showArrowIcons?: boolean;
};

const PopperMenu = ({
  label,
  values,
  buttonProps,
  labelStyles,
  children,
  showArrowIcons = false,
  ...restProps
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Grid>
      <Button
        id={label}
        {...buttonProps}
        onClick={handleClick}
        onMouseEnter={handleClick}
        onMouseLeave={handleClose}
        endIcon={
          open ? <ArrowDropUpIcon onClick={() => {}} /> : <ArrowDropDownIcon onClick={() => {}} />
        }>
        {label}
      </Button>
      <Popper id="mouse-over-popover" open={open} anchorEl={anchorEl} placement="bottom">
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
              right: "50%",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }}>
          {children}
        </Paper>
      </Popper>
    </Grid>
  );
};

export { PopperMenu };
