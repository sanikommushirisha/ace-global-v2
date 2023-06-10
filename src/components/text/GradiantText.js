import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const GradiantText = styled(Typography)({
  backgroundClip: "text",
  color: "transparent",
  backgroundImage:
    "linear-gradient(90.13deg,#d1aad7 .11%,#c88bc4 25.06%,#7b8fdd 50%,#86bff2 74.8%,#bbdef2 99.76%)",
});
