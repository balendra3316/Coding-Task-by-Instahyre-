const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { name, phoneNumber, email, password } = req.body;
  try {
    const userExists = await User.findOne({ phoneNumber });
    if (userExists) {
      return res.status(400).json({ message: 'Phone number already registered' });
    }
    const user = new User({ name, phoneNumber, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
