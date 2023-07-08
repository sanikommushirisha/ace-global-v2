import React, { Suspense, lazy } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./mainPage/MainPage";
import { AboutPage } from "./aboutPage/AboutPage";
import { Blogs } from "./blogs/Blogs/Blogs";

export const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <Grid
          display="flex"
          minHeight="calc(100vh - 70px)"
          justifyContent="center"
          alignItems="center">
          <CircularProgress />
        </Grid>
      }>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
      <Routes>
        <Route path="resources">
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:blogId" element={<Blogs />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
