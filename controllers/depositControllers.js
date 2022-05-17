const { paymentHistory } = require("../helpers/paymentHistory");
const {nanoid} = require("nanoid")
const { accounts } = require("../models/account");

const { deposits } = require("../models/deposit");

// para yatırma

const newDeposit = (req, res, next) => {
  const findAcc = accounts.find(
    (a) => a.accountNumber === req.body.accountNumber
  );
 
  if (!findAcc) {
    res.status(400).json({
      success: false,
      message: "No such account found",
    });
  }
  deposits.push({
    id:nanoid(),
    accountNumber: req.body.accountNumber,
    amount: req.body.amount,
  });
  findAcc.balance = findAcc.balance + req.body.amount;

  paymentHistory(req, "deposit");
  res.status(201).json({
    success: true,
    data: deposits,
  });
};

module.exports = {
  newDeposit,
};
