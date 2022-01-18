import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
const useStyle = makeStyles({
  container: {
    height: 350,
    margin: 10,
    border: "1px solid rgba(224,224,224,1)",
    borderRadius: 10,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
  detiels: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});
const Post = ({ post }) => {
  const classes = useStyle();
  const url =
    post.picture ||
    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
  return (
    <Box className={classes.container}>
      <img src={url} alt="images" className={classes.image} />
      <Typography className={classes.text}>
        {post.Typographycategories}
      </Typography>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Typography className={classes.text}>{post.username}</Typography>
      <Typography className={classes.detiels}>{post.description} </Typography>
    </Box>
  );
};

export default Post;
