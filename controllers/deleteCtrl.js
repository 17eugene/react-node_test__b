const db = require("../db");

const deleteCtrl = async (req, res, next) => {
  const id = req.params.id;

  try {
    const hotdog = await db.query(`SELECT * FROM hotdogs where id=$1`, [id]);

    if (!hotdog.rows[0]) {
      const error = new Error("Item not found");
      error.status = 404;
      throw error;
    }

    const deletedHotdog = await db.query(`DELETE FROM hotdogs where id=$1`, [
      id,
    ]);

    res.status(204).json(deletedHotdog.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCtrl;
