// BACKEND/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skillsToTeach: [{ type: String }],
  skillsToLearn: [{ type: String }],
  availability: {
    type: String,
    enum: ['morning', 'afternoon', 'evening', 'weekends'],
    default: 'weekends'
  },
  location: { type: String },
  bio: { type: String }
});

const User = mongoose.model('User', userSchema);
export default User;
