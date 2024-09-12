const mongoose = require('mongoose');

const spamSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  markedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isSpam: { type: Boolean, default: true }
});

module.exports = mongoose.model('Spam', spamSchema);
