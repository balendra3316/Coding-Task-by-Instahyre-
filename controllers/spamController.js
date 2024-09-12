const Spam = require('../models/Spam');

exports.markSpam = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const spamEntry = new Spam({ phoneNumber, markedBy: req.user.id });
    await spamEntry.save();
    res.status(200).json({ message: 'Number marked as spam' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
