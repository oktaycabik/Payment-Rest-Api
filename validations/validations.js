const Joi = require("joi");

const createValidationAccount = Joi.object({
  ownerName: Joi.string().required().regex( /[a-zA-ZğüşöçİĞÜŞÖÇ]+$/),
  accountNumber: Joi.number(),
  accountType: Joi.string().required().alphanum(),
  currencyCode: Joi.string().required().alphanum(),
});
const createValidationDeposit = Joi.object({
  accountNumber: Joi.number(),
  amount: Joi.number().positive().required(),
});
const createValidationWithdraw = Joi.object({
  accountNumber: Joi.number(),
  amount: Joi.number().positive().required(),
});
const createValidationPayment = Joi.object({
  senderAccount: Joi.number().required(),
  receiverAccount: Joi.number().required(),
  amount: Joi.number().positive().required(),
});

module.exports = {
  createValidationAccount,
  createValidationDeposit,
  createValidationWithdraw,
  createValidationPayment,
};
