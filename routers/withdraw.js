const express = require("express");
const { newWithdraw } = require("../controllers/withdrawControllers");
const { checkAccountType } = require("../middlewares/checkAccountType");
const { checkBalanceDeposit } = require("../middlewares/checkBalance");
const validate = require("../middlewares/validate");
const schemas = require("../validations/validations");
const router = express.Router();

router.post("/",checkAccountType,validate(schemas.createValidationWithdraw),checkBalanceDeposit, newWithdraw);

module.exports = router;
