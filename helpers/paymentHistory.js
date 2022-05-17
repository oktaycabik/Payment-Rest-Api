const {nanoid} = require("nanoid")
const { accountings } = require("../models/accounting");

const paymentHistory = (data, _transactionType) => {
  accountings.push({
    id:nanoid(),
    accountNumber: data.body.accountNumber,
    amount: data.body.amount,
    transactionType: _transactionType,
    createdAt: new Date(),
  });
};

module.exports = {
  paymentHistory,
};
