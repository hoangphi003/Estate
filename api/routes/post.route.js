import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  getPosts,
  deletePost,
  getPost,
  updatePost,
  addPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

export default router;
