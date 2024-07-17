const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, add, edit, destroy } = require("../../../controllers/ProjectActions");

const ValidateCookie = require("../../../services/ValidateCookie")

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", ValidateCookie, add);

router.put("/:id", ValidateCookie, edit);

router.delete("/:id", ValidateCookie, destroy);

/* ************************************************************************* */

module.exports = router;
