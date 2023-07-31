/* eslint-disable react/prop-types */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const Blog = ({ data }: { data: any }) => {
  const navigate = useNavigate();
  const title = data.title.rendered;
  const description = data.excerpt?.rendered;

  const navigateToBlog = () => {
    const blogId = data.id;
    navigate(`/resources/blogs/${blogId}`);
    window.scrollTo(0, 0);
  };
  return (
    <Card sx={{ maxWidth: 400, height: "100%", overflow: "auto" }} onClick={navigateToBlog}>
      <CardActionArea>
        <CardMedia component="img" image={data?.jetpack_featured_media_url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
