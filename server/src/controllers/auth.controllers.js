const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListModel = require('../models/blackList.model');


async function signUp(req, res) {

  const { username, email, password } = req.body;

  let user = await User.findOne({
    $or: [
      { username },
      { email }
    ]
  });

  if (user) {
    return res.status(400).json({
      message: "User already exists."
    });
  };

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    username,
    email,
    password: hashedPassword
  });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '2.5d' }
  )

  res.cookie('token', token);

  res.status(201).json({
    message: "User created successfully.",
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  })
};

async function signIn(req, res) {

  const { username, email, password } = req.body;

  let user = await User.findOne({
    $or: [
      { username },
      { email }
    ]
  }).select('+password');

  if (!user) {
    return res.status(400).json({
      message: "Invalid Credentials"
    });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(400).json({
      message: "Invalid Credentials"
    });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '2.5d' }
  );

  res.cookie('token', token);

  res.status(200).json({
    message: "User signed in successfully.",
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  })
};

async function getMe(req, res) {

  const userId = req.user.id;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found."
    });
  }

  res.status(200).json({
    message: "User found.",
    user
  });
};

async function signOut(req, res) {

  const { token } = req.cookies;

  res.clearCookie('token');

  await blackListModel.create({
    token
  });

  res.status(200).json({
    message: "User signed out successfully."
  });
}

module.exports = {
  signUp,
  signIn,
  getMe,
  signOut
};