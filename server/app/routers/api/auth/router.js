const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const { authActions } = require("../../../controllers/AuthActions");

router.get("/", authActions);

/* ************************************************************************* */

module.exports = router;