const express = require("express");
const path = require("path");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const UserRouter = require("./user/router");
const ProjectRouter = require("./project/router");
const SkillRouter = require("./skill/router");
const ProjectSkillRouter = require("./projectSkill/router");
const AuthActions = require("./auth/router");

router.use(
    "/images",
    express.static(path.join(__dirname, "../../../public/assets/images"))
  );

router.use("/user", UserRouter);
router.use("/project", ProjectRouter);
router.use("/skill", SkillRouter);
router.use("/project-skill", ProjectSkillRouter);
router.use("/auth", AuthActions);



/* ************************************************************************* */

module.exports = router;
