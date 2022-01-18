import React from "react";
import { Grid } from "@material-ui/core";
import Banner from "./Banner";
import Posts from "./Posts";
import Catagories from "./Catagories";
const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>

          <Catagories />
        </Grid>
        <Grid container item lg={10} xs={12} sm={10}>
        <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
