const mongoose = require('mongoose');

if(!process.env.DB_URI) {
  console.error("DB_URI is not defined in environment variables");
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database Connected...");
  } catch (err) {
    console.error(err.message);
  };
};

module.exports = connectDB;