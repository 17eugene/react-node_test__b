const db = require("../db");

const addCtrl = async (req, res, next) => {
  const { name, title, description, url } = req.body;

  try {
    const hotdog = await db.query(`SELECT * FROM hotdogs where name=$1`, [
      name,
    ]);

    if (hotdog.rows[0]) {
      const error = new Error("Item already exist");
      error.status = 400;
      throw error;
    }

    const newHotdog = await db.query(
      `INSERT INTO hotdogs (name, title, description, url) VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, title, description, url]
    );

    res.status(201).json(newHotdog.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = addCtrl;
