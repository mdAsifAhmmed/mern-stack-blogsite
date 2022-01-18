import React, { useState, useEffect } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { getPost, deletePost } from "../../service/api.js";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  Container: {
    padding: "0 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  images: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  blogContentWrapper: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 8px",
    },
  },
  icons: {
    float: "right",
  },
  icon: {
    border: "1px solid rgba(224,224,224, 1)",
    borderRadius: 10,
    padding: 7,
    margin: "0 2px",
    cursor: "pointer",
  },
  heading: {
    fontSize: 30,
    fontWeight: 600,
    margin: "30px 0 10px 0",
    textAlign: "center",
  },
  subheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
const DetailView = ({ match }) => {
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const history = useHistory();
  const [post, setPost] = useState({});
  // console.log(history.location.pathname.slice(8))
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(history.location.pathname.slice(8));
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, [history]);

  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push("/");
  };

  return (
    <Box className={classes.Container}>
      <img className={classes.images} src={post.picture || url} alt="images" />
      <Box className={classes.blogContentWrapper}>
        <Box className={classes.icons}>
          <Link to={`/update/${post._id}`} className={classes.link}>
            <Edit className={classes.icon} color="primary" />
          </Link>
          <Delete
            onClick={() => deleteBlog()}
            className={classes.icon}
            color="error"
          />
        </Box>
        <Typography className={classes.heading}>{post.title}</Typography>
        <Box className={classes.subheading}>
          <Link to={`/?username=${post.username}`} className={classes.link}>
            <Typography>
              Author:<span style={{ fontWeight: "600" }}>{post.username}</span>
            </Typography>
          </Link>
          <Typography style={{ marginLeft: "auto" }}>
            {new Date(post.createDate).toDateString()}
          </Typography>
        </Box>
        <Typography>{post.description}</Typography>
      </Box>
    </Box>
  );
};

export default DetailView;
