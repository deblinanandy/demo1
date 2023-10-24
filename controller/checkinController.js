const checkinModel = require("../model/checkinModel.js");

const checkinController = async (req, res) => {
  try {
    const { name, email, designation } = req.body;

    // Check if the user already exists in the database
    const existingUser = await checkinModel.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: 'User already exists'
      });
    }

    // User does not exist, create a new user
    const userData = {
      name,
      designation,
      email,
    };

    const newUser = await checkinModel.create(userData);

    return res.status(201).json({
      success: true,
      message: 'New user account created successfully',
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: 'Error: ' + error.message
    });
  }
};

module.exports = checkinController;
