import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#221654"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: 800
    }
  },
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          paddingLeft: "32px",
          paddingRight: "32px"
        },
        outlinedPrimary: {
          fontWeight: "550"
        },
        containedPrimary: {
          fontWeight: "550"
        },
        textPrimary: {
          fontWeight: "550"
        },
        containedSecondary: {
          fontWeight: "550"
        }
      }
    }
  }
});

const theme = responsiveFontSizes(baseTheme);

theme.typography.h1 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "32px"
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "48px"
  }
};

export { theme };
