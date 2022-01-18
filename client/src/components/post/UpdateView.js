import React, { useEffect, useState } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { getPost,upDatePost } from "../../service/api";
import { useHistory } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  container: {
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
  blogContentCreateWrapper: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 8px",
    },
  },
  form: {
    display: "flex",
    flexDirection: "row",
    margin: "10px 0",
  },
  textfield: {
    flex: 1,
    margin: "0 10px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "none",
    margin: "10px 0 0 0",
    fontSize: "18px",
    "&:focus-visible": {
      outline: "none",
    },
  },
}));

const intialValues = {
  title: "",
  description: "",
  picture: "",
  username: "asif",
  categories: "All",
  createDate: new Date(),
};

const UpdateView = ({ match }) => {
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const params = useHistory();
  // const history = useHistory();
  const [post, setPost] = useState(intialValues);
  console.log(post.picture);
  const handlechange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const upDateBlog = async () => {
    await upDatePost(params.location.pathname.slice(8), post);
    params.push(`/detail/${params.location.pathname.slice(8)}`);
  };

  useEffect(() => {
    const fatchData = async () => {
      let data = await getPost(params.location.pathname.slice(8));
      setPost(data);
      console.log(data);
    };
    fatchData();
  }, [params]);

  return (
    <Box className={classes.container}>
      <img className={classes.images} src={url} alt="images" />
      <Box className={classes.blogContentCreateWrapper}>
        <FormControl className={classes.form}>
          <AddCircle color="action" fontSize="large" />
          <InputBase
            onChange={(e) => handlechange(e)}
            name="title"
            placeholder="Title"
            value={post.title}
            className={classes.textfield}
          />
          <Button
            onClick={() => upDateBlog()}
            variant="contained"
            color="primary"
          >
            Update
          </Button>
        </FormControl>
        <TextareaAutosize
          onChange={(e) => handlechange(e)}
          name="description"
          rowsMin={5}
          value={post.description}
          placeholder="Tell your story...."
          className={classes.textarea}
        />
      </Box>
    </Box>
  );
};

export default UpdateView;
