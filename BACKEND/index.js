import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // Import jsonwebtoken
import User from "./User.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT||5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Database Connection ---
// This will be replaced by your .env file in a real deployment
const MONGO_URI =process.env.MONGO_URI ; 
const JWT_SECRET =process.env.JWT_SECRET;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- API Routes ---

// ## REGISTER ##
app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ email, username, password: hashedPassword });
    const savedUser = await newUser.save();

    // Create a token for the new user
    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ token, message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error during registration.", error });
  }
});

// ## LOGIN ##
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Create and send a token upon successful login
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token, message: "Login successful." });
  } catch (error) {
    res.status(500).json({ message: "Server error during login.", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});