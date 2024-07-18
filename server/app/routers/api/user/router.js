const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  add,
  edit,
  destroy,
  disconect,
  checkLog,
} = require("../../../controllers/UserActions");

const ValidateUser = require("../../../services/ValidateUser");

const ValidateLogin = require("../../../services/ValidateLogin");


// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", ValidateUser, add);

router.put("/:id", ValidateUser, edit);

router.delete("/:id", destroy);

router.post("/logout", disconect);

router.post("/login", ValidateLogin, checkLog);

/* ************************************************************************* */

module.exports = router;
