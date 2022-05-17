const express = require("express");
const { newPayment } = require("../controllers/paymentControllers");
const {
  checkAccountTypeForPayment,
} = require("../middlewares/checkAccountType");
const { checkBalancePayment } = require("../middlewares/checkBalance");
const validate = require("../middlewares/validate");
const schemas = require("../validations/validations");
const router = express.Router();

router.post(
  "/",
  checkAccountTypeForPayment,
  validate(schemas.createValidationPayment),
  checkBalancePayment,
  newPayment
);
module.exports = router;
