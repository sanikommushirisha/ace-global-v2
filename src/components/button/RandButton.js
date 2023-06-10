import React from "react";
import MuiButton from "@mui/material/Button";

export const RandButton = () => {
  const buttonRef = React.useRef();
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    console.log("triggered Click");
    buttonRef.current.click();
    setShow(false);
  }, []);
  return show && <MuiButton ref={buttonRef}>RandButton</MuiButton>;
};
