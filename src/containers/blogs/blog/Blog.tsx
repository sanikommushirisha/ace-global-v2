import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgress, Grid, Typography } from "@mui/material";

export const Blog = () => {
  const params = useParams();
  const blogId = params?.blogId;

  const [blog, setBlog] = React.useState<any>(null);
  React.useEffect(() => {
    axios
      .get(`https://sanikommushirisha.wpcomstaging.com/wp-json/wp/v2/posts/${blogId}`)
      .then((response) => setBlog(response.data));
  }, []);
  return blog ? (
    <Grid px="10%" py="32px" minHeight="100vh">
      {blog?.title?.rendered && (
        <Typography variant="h4" color="primary" py="16px">
          <div dangerouslySetInnerHTML={{ __html: blog?.title.rendered }} />
        </Typography>
      )}
      {blog?.content?.rendered && (
        <div dangerouslySetInnerHTML={{ __html: blog?.content.rendered }} />
      )}
    </Grid>
  ) : (
    <Grid container py="128px" width="100vw" justifyContent="center" minHeight="100vh">
      <CircularProgress />
    </Grid>
  );
};

export default Blog;
