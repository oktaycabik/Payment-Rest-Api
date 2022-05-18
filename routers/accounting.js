const express = require("express");
const { getAccounting } = require("../controllers/accountingControllers");
const { checkAccount } = require("../middlewares/checkAccount");




const router = express.Router();

router.get("/:id",checkAccount,getAccounting)


module.exports = router;