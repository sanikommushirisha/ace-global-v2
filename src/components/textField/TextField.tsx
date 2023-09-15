import React from "react";
import {
  Box,
  FormHelperText,
  InputLabel,
  InputLabelProps,
  OutlinedInput,
  OutlinedInputProps
} from "@mui/material";

interface Props extends OutlinedInputProps {
  helperText?: string | null | undefined;
  labelProps?: InputLabelProps;
}
export const TextField = ({ labelProps = {}, helperText, label, ...restProps }: Props) => {
  return (
    <Box component="form" noValidate autoComplete="off" height="100%">
      <InputLabel {...labelProps} sx={{ color: "rgba(41, 10, 56, 0.75)", fontWeight: 600 }}>
        {label}
      </InputLabel>
      <OutlinedInput {...restProps} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Box>
  );
};
