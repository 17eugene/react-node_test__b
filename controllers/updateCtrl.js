const db = require("../db");

const updateCtrl = async (req, res, next) => {
  const id = req.params.id;
  const { name, title, description, url } = req.body;

  try {
    const hotdog = await db.query(`SELECT * FROM hotdogs where id=${id}`);

    if (!hotdog.rows[0]) {
      const error = new Error("Item not found");
      error.status = 404;
      throw error;
    }

    const updHotdog = await db.query(
      `UPDATE hotdogs set name=$1, title=$2, description=$3, url=$4 where id=$5 RETURNING *`,
      [name, title, description, url, id]
    );

    if (!updHotdog) {
      const error = new Error("Item not found");
      error.status = 404;
      throw error;
    }

    res.status(200).json(updHotdog.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = updateCtrl;
