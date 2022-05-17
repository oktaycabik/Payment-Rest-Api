const { accounts } = require("../models/account");

const checkBalanceDeposit = (req, res, next) => {
  const account = accounts.find(
    (acc) => acc.accountNumber === req.body.accountNumber
  );
  if (account.balance < req.body.amount) {
    res.status(400).json({
      success: false,
      message: `you do not have enough balance your balance:${account.balance} ${account.currencyCode}`,
    });
    return;
  }
  return next();
};

const checkBalancePayment = (req, res, next) => {
  const account = accounts.find(
    (acc) => acc.accountNumber === req.body.senderAccount
  );

  if (account.balance < req.body.amount) {
    res.status(400).json({
      success: false,
      message: `you do not have enough balance your balance:${account.balance} ${account.currencyCode}`,
    });
    return;
  }
  return next();
};

module.exports = {
  checkBalanceDeposit,
  checkBalancePayment,
};
