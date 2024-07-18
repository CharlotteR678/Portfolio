const tables = require("../../database/tables");

const URL = `http://${process.env.DB_HOST}:${process.env.APP_PORT}/api`;

const browse = async (req, res, next) => {
  try {
    const users = await tables.project.readAll();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const animal = await tables.project.read(req.params.id);
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
    const insertId = await tables.project.create(user);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const project = { ...req.body, id: req.params.id };
  try {
    await tables.project.update(project);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.project.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// Add image
const editPicture = async (req, res, next) => {
  try {
    const userId = req.params.id;
    // Give the path which will be stored in the database
    const filePath = `${URL}/images/${req.file.filename}`;
    if (req.file !== null || req.file !== undefined) {
      await tables.project.editImagePath(userId, filePath);
      res.status(204).json(filePath);
    } else {
      res.status(400).json({
        validationErrors: [{ message: "Aucun fichier téléchargé." }],
      });
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
  editPicture,
};
