import React from "react";
import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput from "react-phone-input-2";
import { Grid, InputLabel } from "@mui/material";

export const TelInputField = ({
  labelProps = {},
  fullWidth = false,
  label,
  value,
  onChange
}: any) => {
  return (
    <Grid container direction="column" flexWrap="nowrap">
      <InputLabel {...labelProps} sx={{ color: "rgba(41, 10, 56, 0.75)", fontWeight: 600 }}>
        {label}
      </InputLabel>
      <PhoneInput
        country={"us"} // Set the default country here
        value={value}
        onChange={onChange}
        inputStyle={{ width: fullWidth ? "100%" : "auto" }}
      />
    </Grid>
  );
};

export default TelInputField;
