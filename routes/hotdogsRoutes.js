const express = require("express");
const router = express.Router();

const ctrls = require("../controllers/index");
const { validation } = require("../middlewares/index");
const { hotdogsJoiSchema } = require("../validation-schemas/index");

router.post("/hotdog", validation(hotdogsJoiSchema), ctrls.addCtrl);

router.get("/", ctrls.getAllCtrl);
router.get("/hotdog/:id", ctrls.getOneCtrl);

router.put("/hotdog/:id", validation(hotdogsJoiSchema), ctrls.updateCtrl);

router.delete("/hotdog/:id", ctrls.deleteCtrl);

module.exports = router;
