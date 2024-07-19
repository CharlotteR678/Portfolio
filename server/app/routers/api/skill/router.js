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
} = require("../../../controllers/SkillActions");

const ValidateCookie = require("../../../services/ValidateCookie");

const ValidateSkill = require("../../../services/ValidateSkill");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", ValidateCookie, read);

// Route to add a new item
router.post("/", ValidateCookie, ValidateSkill, add);

router.put("/:id", ValidateCookie, ValidateSkill, edit);

router.delete("/:id", ValidateCookie, destroy);

/* ************************************************************************* */

module.exports = router;
