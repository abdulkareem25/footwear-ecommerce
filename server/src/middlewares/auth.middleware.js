const jwt = require('jsonwebtoken');
const blackListModel = require('../models/blackList.model');
const redisClient = require('../config/cache');

async function identifyUser(req, res, next) {

  const { token } = req.cookies;


  if (!token) {
    return res.status(401).json({
      message: "Unauthorized."
    });
  }

  // const isBlackList = await blackListModel.findOne({ token });

  const isBlackList = await redisClient.get(token);

  if (isBlackList) {
    return res.status(401).json({
      message: "Blacklisted token."
    });
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
  );

  if (!decoded) {
    return res.status(401).json({
      message: "Invalid token."
    });
  }

  req.user = decoded;

  next();
};


module.exports = identifyUser;