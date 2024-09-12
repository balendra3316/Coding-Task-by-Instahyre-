const User = require('../models/User');
const Spam = require('../models/Spam');

exports.searchByName = async (req, res) => {
  const { name } = req.query;
  try {
    const users = await User.find({ name: new RegExp(name, 'i') });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.searchByPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.query;
  try {
    const user = await User.findOne({ phoneNumber });
    const spamEntry = await Spam.findOne({ phoneNumber });
    res.status(200).json({ user, spam: !!spamEntry });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
