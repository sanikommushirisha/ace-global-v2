import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";

import { AppRoutes } from "src/containers/appRoutes";
import { Footer } from "./containers/footer/Footer";
import { Header } from "./containers/header/Header";

function App() {
  return (
    <Grid width="100%" height="100vh">
      <Helmet>
        <html lang="en" />
        <title>Ace Global- Outsourced Accounting Talent Solutions</title>
        <meta
          name="description"
          content="Ace Global offers cost-effective, reliable, and secure outsourced accounting services to CPAs, EAs, and accounting firms to help them scale efficiently."
        />
        <link rel="canonical" href="https://aceglobal.ai"></link>
      </Helmet>
      <Header />
      <AppRoutes />
      <Footer />
    </Grid>
  );
}

export default App;
