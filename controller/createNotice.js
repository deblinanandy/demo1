const Notice = require("../model/Notice.js");

// Function to create a new notice
exports.createNotice = async (req, res) => {
  try {
    const { title, content, author, imageUrl, linkUrl } = req.body;

    // Create a new notice
    const notice = new Notice({
      title,
      content,
      author,
      imageUrl,
      linkUrl,
    });

    // Save the notice
    await notice.save();

    return res.status(201).json(notice);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ error: error.message }); // Return the error message in the response
  }
};

// Function to get all notices
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().populate("author", "email");
    return res.status(200).json(notices);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving notices" });
  }
};

// Function to get a single notice by ID
exports.getNoticeById = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.noticeId).populate(
      "author",
      "email"
    );

    if (!notice) {
      return res.status(404).json({ error: "Notice not found" });
    }

    return res.status(200).json(notice);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving notice" });
  }
};

// Function to update a notice by ID
exports.updateNotice = async (req, res) => {
  try {
    const updatedNotice = await Notice.findByIdAndUpdate(
      req.params.noticeId,
      {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        linkUrl: req.body.linkUrl,
      },
      { new: true }
    );

    if (!updatedNotice) {
      return res.status(404).json({ error: "Notice not found" });
    }

    return res.status(200).json(updatedNotice);
  } catch (error) {
    return res.status(500).json({ error: "Error updating notice" });
  }
};

// Function to delete all notices
exports.deleteAllNotices = async (req, res) => {
  try {
    // Delete all notices from the 'notices' collection
    const result = await Notice.deleteMany({});

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "No notices found" });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: "Error deleting all notices" });
  }
};
