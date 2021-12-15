const db = require("../db");

const getOneCtrl = async (req, res, next) => {
  const id = req.params.id;

  try {
    const hotdog = await db.query(`SELECT * FROM hotdogs where id=$1`, [id]);

    if (!hotdog.rows[0]) {
      const hotdogError = new Error("Item not found");
      hotdogError.status = 404;
      throw hotdogError;
    }

    res.status(200).json({
      message: "success",
      code: 200,
      data: hotdog.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getOneCtrl;
