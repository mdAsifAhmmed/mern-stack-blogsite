import React from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { Link, useLocation } from "react-router-dom";
import { getAllPosts } from "../../service/api.js";
const Posts = () => {
  const [posts, setPosts] = React.useState([]);
  const { search } = useLocation();
  // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  React.useEffect(() => {
    const fetchData = async () => {
      var data = await getAllPosts(search);
      // console.log(data);
      setPosts(data);
    };
    fetchData();
  }, [search]);
  return posts.map((post, id) => (
    <Grid item lg={3} sm={4} xs={12} key={id}>
      <Link
        to={`/detail/${post._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Post post={post} />
      </Link>
    </Grid>
  ));
};

export default Posts;
