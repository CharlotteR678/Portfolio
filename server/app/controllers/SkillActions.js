const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.skill.readAll();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const animal = await tables.skill.read(req.params.id);
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
  const user = req.body;
  try {
    const insertId = await tables.skill.create(user);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const skill = { ...req.body, id: req.params.id };
  try {
    await tables.skill.update(skill);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.skill.delete(req.params.id);

    res.sendStatus(204);
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
};
