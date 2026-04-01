const jwt = require('jsonwebtoken');

async function identifyUser(req, res, next) {

  const { token } = req.cookies;


  if (!token) {
    return res.status(401).json({
      message: "Unauthorized."
    });
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
  );

  if(!decoded) {
    return res.status(401).json({
      message: "Invalid token."
    });
  }

  req.user = decoded;

  next();
};


module.exports = identifyUser;