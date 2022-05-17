const express =require("express");


const account =require("./account")
const payment =require("./payment")
const deposit =require("./deposit")
const withdraw =require("./withdraw")
const accounting =require("./accounting")
const router =express.Router();

router.use("/account",account)
router.use("/payment",payment)
router.use("/deposit",deposit)
router.use("/withdraw",withdraw)
router.use("/accounting",accounting)
module.exports=router;