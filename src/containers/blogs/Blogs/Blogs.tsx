import React from "react";
import axios from "axios";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";

//@ts-ignore
import blogsSrc from "src/images/blogs.svg";
import { Blog } from "./Blog/Blog";

export const Blogs = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://sanikommushirisha.wpcomstaging.com/wp-json/wp/v2/posts")
      .then((response: any) => setBlogs(response.data));
  }, []);
  return blogs?.length ? (
    <Grid minHeight="100vh">
      <Grid
        container
        justifyContent="center"
        pl="10%"
        pr="5%"
        pt="3%"
        pb="5%"
        sx={{
          width: "100%",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          minHeight: "500px",
          backgroundColor: "#FAF5F2",
          flexWrap: "nowrap",
          boxShadow: "var(--tw-shadow)",
          borderBottom: "var(--tw-border)",
          gridGap: "64px"
        }}>
        <Grid item lg={7} md={7} container alignItems="center" flexWrap="nowrap">
          <Grid>
            <Typography color="primary" variant="h1" sx={{ maxWidth: "70%" }}>
              Blogs & Articles
            </Typography>
            <Typography color="primary" py="16px" variant="subtitle2">
              Ace Global is{" "}
              <b>built to serve the US accounting industry to fill the gap of skilled talent.</b>{" "}
              We&apos;re here to connect you with the best remote talent. Wishlist maximizing your
              profits by offering you skilled experts at local prices
            </Typography>
            <Typography color="primary" variant="subtitle2">
              Just another outsourcing company? - No. At Ace,{" "}
              <b>we approach everything with an Owner Mindset.</b> Everyone on our team is treated
              as an entrepreneur in their own right.{" "}
              <b>Step with us toward the remote work revolution.</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          lg={5}
          md={5}
          display={{ sm: "none", md: "block" }}
          alignItems="flex-start"
          justifyContent="center">
          <Grid component="img" src={blogsSrc} sx={{ height: "100%", maxWidth: "100%" }} />
        </Grid>
      </Grid>
      <Grid px="10%" py="64px">
        <Grid
          display="grid"
          sx={{
            gridTemplateColumns: { xs: "auto", md: "auto auto auto" },
            gap: "32px"
          }}>
          {blogs.map((blog: any) => (
            <Grid key={blog.id} height="500px">
              <Blog data={blog} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid container py="128px" width="100vw" justifyContent="center" minHeight="100vh">
      <CircularProgress />
    </Grid>
  );
};
