const express = require("express");
const router = express.Router();

const userRegistrationController = require("../controller/userRegistrationController.js");
const Admincontrolle = require("../controller/Admincontroller.js");
const Adminloging = require("../controller/Adminloging.js");
const userLoging = require("../controller/userLoging.js");
const getAllLoginDetails = require("../controller/getAllLoginDetails.js");
const deleteAllLoginDetails = require("../controller/cleanLoginFormData .js");
const checkinController = require("../controller/checkinController.js");
const getAllCheckdetails = require("../controller/getAllCheckdetails.js");
const deleteCheck = require("../controller/deleteCheck.js");
//const getAllUserDetails = require("../controller/getallUserDetails.js");
const {
  createNotice,
  getAllNotices,
  getNoticeById,
  updateNotice,
  deleteAllNotices,
} = require('../controller/createNotice.js'); // Import your controller functions

router.get('/', (req, res) => {
   res.send(`<h3>Login app routing</h3>`);
});

router.post('/register', userRegistrationController);
router.post('/adminregister', Admincontrolle);
router.post('/adminlog', Adminloging);
router.post('/userlog', userLoging);
router.get('/userlogdetils', getAllLoginDetails);
router.get('/deleteuser', deleteAllLoginDetails);
router.post('/check', checkinController);
router.get('/allcheck', getAllCheckdetails);
//router.get('/alluser', getAllUserDetails);
router.delete('/delete', deleteCheck);
router.post('/notices', createNotice); // Create a new notice
router.get('/allnotices', getAllNotices); // Get all notices
router.get('/notices/:noticeId', getNoticeById); // Get a single notice by ID
router.put('/upnotices/:noticeId', updateNotice); // Update a notice by ID
router.delete('/deletenotices', deleteAllNotices); // Delete a notice by ID

module.exports = router;
