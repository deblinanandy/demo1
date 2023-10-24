const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Please enter your password"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
