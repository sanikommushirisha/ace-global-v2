import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import { theme } from "./theme";
import "./index.css";

const container = document.getElementById("root");
//@ts-expect-error
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CssBaseline>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </CssBaseline>
  </React.StrictMode>
);
