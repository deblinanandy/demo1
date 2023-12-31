const adminModel = require('../model/adminModel.js');
const bcrypt = require('bcrypt');

const Adminloging = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await adminModel.findOne({ email });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: 'User not found'
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(200).json({
        success: false,
        message: 'Invalid password'
      });
    }

    // If both email and password are correct, you can send a success response.
    res.status(200).json({
      success: true,
      message: 'Login successful'
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Error: " + error.message
    });
  }
};

module.exports = Adminloging;
