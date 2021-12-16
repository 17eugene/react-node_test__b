const db = require("../db");

const getAllCtrl = async (req, res, next) => {
  try {
    // const allHotdogs = await db.query(`SELECT * FROM hotdogs`);

    res.send("Hello");
    // res.status(200).json(allHotdogs.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllCtrl;
