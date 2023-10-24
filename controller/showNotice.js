const Notice = require("../model/Notice.js");

exports.showAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    // Send the notices in the response
    res.status(200).json(notices);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving notices" });
  }
};
