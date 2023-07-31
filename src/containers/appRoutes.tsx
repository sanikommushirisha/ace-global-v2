import React, { Suspense } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./mainPage/MainPage";
import { AboutPage } from "./aboutPage/AboutPage";
import { Blogs } from "./blogs/Blogs/Blogs";
import { Blog } from "./blogs/blog/Blog";
import CaseStudies from "./caseStudies/CaseStudies";
import { ContactUs } from "./contactUs/ContactUs";

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
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Routes>
        <Route path="resources">
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:blogId" element={<CaseStudies />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:blogId" element={<Blog />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
