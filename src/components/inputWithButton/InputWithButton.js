import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const StyledTextField = styled(TextField)({
  ".MuiInputBase-root": {
    fontSize: "14px",
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  color: "#3e0075",
});

const StyledButton = styled(Button)({
  borderRadius: "20px",
  textTransform: "none",
  fontWeight: "bold",
  padding: "8.5px 14px",
});

const paletteBgColorMapping = {
  primary: "#f5edff",
  secondary: "#ffffff",
  tertiary: "#f5edff",
};

export const InputWithButton = ({
  size = "small",
  placeholder,
  value,
  onChange,
  buttonText,
  palette = "primary",
}) => {
  const [open, setOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorOpen(false);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: value,
          message: "He/She showed Interest in Ace Global",
          to_name: "Dinesh",
        },
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setOpen(true);
          onChange("");
        },
        (error) => {
          setErrorOpen(true);
        }
      );
  };
  return (
    <>
      <FormGroup
        row
        sx={{
          backgroundColor: paletteBgColorMapping[palette],
          borderRadius: "20px",
          width: "fit-content",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
      >
        <StyledTextField
          size={size}
          variant="outlined"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          palette={palette}
        />
        <StyledButton
          size={size}
          disabled={!value}
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: palette === "tertiary" ? "#3caff2" : "#8039df",
            "&:hover": {
              opacity: 0.9,
            },
          }}
          onClick={onSubmit}
        >
          {buttonText}
        </StyledButton>
      </FormGroup>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          We will reach out to you shortly...
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        onClose={handleErrorClose}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Something went wrong.Please try again shortly...
        </Alert>
      </Snackbar>
    </>
  );
};
