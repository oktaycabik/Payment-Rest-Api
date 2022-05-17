const express = require("express");
const { getAccount, newAccount } = require("../controllers/accountControllers");
const { createAccountValidations } = require("../middlewares/createAccountValidations");
const validate = require("../middlewares/validate");
const schemas = require("../validations/validations");
const router = express.Router();

router.get("/:id", getAccount);
router.post("/",validate(schemas.createValidationAccount),createAccountValidations, newAccount);
module.exports = router;
 