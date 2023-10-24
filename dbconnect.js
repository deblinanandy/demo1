const mongoose = require("mongoose");

const Database = async () => {
  try {
    await mongoose.connect('mongodb+srv://test:test@cluster0.bqb3hr6.mongodb.net/dip', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = Database;
