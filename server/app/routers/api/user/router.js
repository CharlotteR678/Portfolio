const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, add, edit, destroy, disconect, checkLog} = require("../../../controllers/UserActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

router.put("/:id", edit);

router.delete("/:id", destroy);

router.post("/logout", disconect);

// Route to check the login
router.post("/login", checkLog);

/* ************************************************************************* */

module.exports = router;