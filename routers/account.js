const express = require("express");
const { getAccount, newAccount } = require("../controllers/accountControllers");
const { checkAccount } = require("../middlewares/checkAccount");
const { createAccountValidations } = require("../middlewares/createAccountValidations");
const validate = require("../middlewares/validate");
const schemas = require("../validations/validations");
const router = express.Router();

router.get("/:id",checkAccount, getAccount);
router.post("/",validate(schemas.createValidationAccount),createAccountValidations, newAccount);
module.exports = router;
 