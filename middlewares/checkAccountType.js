const { accounts } = require("../models/account");

const checkAccountType = (req, res, next) => {
  const account = accounts.find(
    (acc) => acc.accountNumber == req.body.accountNumber
  );
  if (account.accountType !== process.env.INVIDUAL) {
    res.status(400).json({
      success: false,
      message: "only individual accounts can deposit or withdraw funds",
    });
    return;
  }
  return next();
};
const checkAccountTypeForPayment = (req, res, next) => {
  const senderAccount = accounts.find(
    (acc) => acc.accountNumber == req.body.senderAccount
  );

  const receiverAccount = accounts.find(
    (acc) => acc.accountNumber == req.body.receiverAccount
  );
  
  if (senderAccount.accountType !==process.env.INVIDUAL) {
    res.status(400).json({
      success: false,
      message: "only individual accounts can pay",
    });
    return;
  }
  else if(receiverAccount.accountType!==process.env.CORPORATE){
    res.status(400).json({
        success: false,
        message: "only corporate accounts can be paid",
      });
      return;
  }
  return next();
};

module.exports = {
  checkAccountType,
  checkAccountTypeForPayment,
};
