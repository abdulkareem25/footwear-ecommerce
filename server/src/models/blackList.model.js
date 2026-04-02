const mongoose = require('mongoose');

const blackListSchema = mongoose.Schema({
  token: {
    type: String,
    require: [true, "Token is required"]
  }
}, {
  timestamps: true
});

const blackListModel = mongoose.model('blackList', blackListSchema);

module.exports = blackListModel;