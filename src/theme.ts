import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const typography = {
  fontFamily: `'Work Sans', sans-serif !important`,
  h1: {
    fontSize: "52px",
    fontWeight: 800,
    lineHeight: 1.124
  },
  h2: {
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: 1.167
  },
  h3: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.2
  },
  subtitle1: {
    fontSize: "24px",
    fontWeight: 600
  },
  subtitle2: {
    fontSize: "20px",
    fontWeight: 500
  },
  body2: {
    fontSize: "12px",
    lineHeight: 1.167,
    fontWeight: 600
  }
};

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#290A38"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  typography,
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
    fontSize: "28px"
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "52px",
    lineHeight: 1.124
  }
};

theme.typography.h2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "24px"
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: 1.167
  }
};

theme.typography.h3 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 1.2
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.2
  }
};

theme.typography.subtitle1 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "16px"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
    fontWeight: 600
  }
};

theme.typography.subtitle2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    fontWeight: 500
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    fontWeight: 500
  }
};

theme.typography.body2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "12px"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "12px",
    fontWeight: 600
  }
};

export { theme };
