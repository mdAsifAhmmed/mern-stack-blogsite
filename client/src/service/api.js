import axios from "axios";

const URL = "http://localhost:8000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("error while calling createPost api", Error);
  }
};

export const getAllPosts = async (param) => {
  try {
    let respons = await axios.get(`${URL}/posts/${param}`);
    return respons.data;
  } catch (error) {
    console.log("Error while calling getAllPosts api", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPosts api", error);
  }
};

export const upDatePost = async (id, post) => {
  try {
    await axios.post(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log("Error while calling update post api", error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/delet/${id}`);
  } catch (error) {
    console.log("Error whhile delete post", error);
  }
};

export const uploadImages = async (data) => {
  console.log(data);
  try {
    return await axios.post(`${URL}/file/upload`, data);
  } catch (error) {
    console.log("upload images not fine", error);
  }
};
