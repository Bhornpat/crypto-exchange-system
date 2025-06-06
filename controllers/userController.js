const { User } = require('../models/');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //  ตรวจสอบ email ซ้ำ
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    //  ตรวจสอบ username ซ้ำ
    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password_hash });

    res.status(201).json(user);
  } catch (error) {
    console.error('[Register Error]', error);
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

