const jwt = require("jsonwebtoken");

const ValidateCookie = (req, res, next) => {
  const token = req.cookies.portfolioCRCookie;

  try {
    if (token === undefined) {
      return res.status(401).json({ error: "Access denied" });
    }
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    req.user = decoded;

    return next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = ValidateCookie;
