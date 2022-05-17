const {nanoid} = require("nanoid")
const { paymentHistory } = require("../helpers/paymentHistory");
const { accounts } = require("../models/account");
const { withdraw } = require("../models/withdraw");

// para çekme

const newWithdraw = (req, res, next) => {
  const findAcc = accounts.find(
    (a) => a.accountNumber === req.body.accountNumber
  );

  if (!findAcc) {
    res.status(400).json({
      success: false,
      message: "No such account found",
    });
  }

  withdraw.push({
    id:nanoid(),
    accountNumber: req.body.accountNumber,
    amount: req.body.amount,
  });
  findAcc.balance = findAcc.balance - req.body.amount;

  paymentHistory(req, "withdraw");
  res.status(201).json({
    success: true,
    data: withdraw,
  });
};

module.exports = {
  newWithdraw,
};
