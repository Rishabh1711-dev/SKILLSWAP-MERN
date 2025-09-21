
const mongoose = require('mongoose');

const meetupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skill: { type: String, required: true },
  date: { type: Date, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Meetup = mongoose.model('Meetup', meetupSchema);
module.exports = Meetup;