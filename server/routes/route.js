import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  upDatePost,
  deletePost,
} from "../controllar/post_controller.js";
import { uploadImages } from "../controllar/image_controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);
router.post("/update/:id", upDatePost);
router.delete("/delet/:id", deletePost);
router.post("/file/upload", upload.single("file"), uploadImages);
export default router;
