const express = require("express");
const { getAccounting } = require("../controllers/accountingControllers");




const router = express.Router();

router.get("/:id",getAccounting)


module.exports = router;