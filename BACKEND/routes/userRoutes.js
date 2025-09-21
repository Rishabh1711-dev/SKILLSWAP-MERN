import express from "express";
import { register, login, getUsers, getUserById } from "../controllers/userControllers.js";

const router = express.Router();

// Auth routes
router.post("/register", register);
router.post("/login", login);

// User routes
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
