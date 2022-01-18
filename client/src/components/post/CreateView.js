import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { createPost, uploadImages } from "../../service/api";
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

const CreateView = () => {
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const history = useHistory();
  const [post, setPost] = useState(intialValues);
  const [file, setFile] = useState("");

  const handlechange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };

  useEffect(() => {
    const getImg = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        console.log(file.name);
        await uploadImages(data);
      }
    };
    getImg();
  }, [file]);

  return (
    <Box className={classes.container}>
      <img className={classes.images} src={url} alt="images" />
      <Box className={classes.blogContentCreateWrapper}>
        <FormControl className={classes.form}>
          <label htmlFor="uploadImg">
            <AddCircle color="action" fontSize="large" />
            <p>{file.name}</p>
          </label>

          <input
            type="file"
            id="uploadImg"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
          <InputBase
            onChange={(e) => handlechange(e)}
            placeholder="Title"
            className={classes.textfield}
            name="title"
          />
          <Button
            onClick={() => savePost()}
            variant="contained"
            color="primary"
          >
            Publish
          </Button>
        </FormControl>
        <TextareaAutosize
          rowsMin={5}
          placeholder="Tell your story...."
          className={classes.textarea}
          onChange={(e) => handlechange(e)}
          name="description"
        />
      </Box>
    </Box>
  );
};

export default CreateView;
