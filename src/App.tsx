import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";

import { MainPage } from "src/containers/mainPage/MainPage";
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
      </Helmet>
      <Header />
      <MainPage />
      <Footer />
    </Grid>
  );
}

export default App;
