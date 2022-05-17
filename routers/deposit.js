const express = require("express");
const { newDeposit } = require("../controllers/depositControllers");
const { checkAccountType } = require("../middlewares/checkAccountType");
const validate = require("../middlewares/validate");
const schemas = require("../validations/validations");


const router = express.Router();

router.post("/",checkAccountType,validate(schemas.createValidationDeposit),newDeposit)



module.exports = router;