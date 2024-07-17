const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const animal = await tables.user.read(req.params.id);
    if (animal == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(animal);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const saltRounds = 10;
  const user = req.body;

  try {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    const insertId = await tables.user.create(user);

    delete req.body.password;
    const IsAdmin = true;

    const token = jwt.sign({ sub: insertId, IsAdmin }, process.env.APP_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("portfolioCRCookie", token, {
      httpOnly: true,
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const user = { ...req.body, id: req.params.id };
  try {
    await tables.user.update(user);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.user.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const checkLog = async (req, res, next) => {
  // Retrieve user email and password from HTTP request body
  const { mail, password } = req.body;
  try {
    // Retrieve user information from the database according to email address
    const user = await tables.user.login(mail);

    // Check that the user exists and that the password is correct
    if (
      user !== null &&
      user !== undefined &&
      (await bcrypt.compare(password, user.password)) === true
    ) {
      const IsAdmin = true;
      // Generate JWT token
      const token = jwt.sign(
        { sub: user.id, IsAdmin },
        process.env.APP_SECRET,
        { expiresIn: "1d" }
      );

      // Remove password from request body
      delete req.body.password;

      // Set the token in cookie
      res.cookie("cretchomCookie", token, {
        httpOnly: true,
        sameSite: "Strict",
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json();
    } else {
      res.status(401).json({ error: "unauthorized access" });
    }
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
  checkLog,
};
