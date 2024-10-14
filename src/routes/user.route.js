const {
  addUserController,
  showForm,
  getAllUsersController,
} = require("../controllers/user.controller.js");

const router = require("express").Router();
router.get("/", showForm);
router.post("/home", addUserController);
router.get("/allUsers", getAllUsersController);
module.exports = router;
