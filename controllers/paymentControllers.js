const {nanoid} = require("nanoid")
const { accounts } = require("../models/account");
const { payments } = require("../models/payment");
const { accountings } = require("../models/accounting");
const newPayment = (req, res, next) => {
  const findReceiverAcc = accounts.find(
    (a) => a.accountNumber === req.body.receiverAccount
  );
  const findSenderAcc = accounts.find(
    (a) => a.accountNumber === req.body.senderAccount
  );
  if (findSenderAcc && findReceiverAcc) {
    payments.push({
      id:nanoid(),
      senderAccount: req.body.senderAccount,
      receiverAccount: req.body.receiverAccount,
      amount: req.body.amount,
    });
    accountings.push({
      id:nanoid(),
      accountNumber: req.body.senderAccount,
      amount: req.body.amount,
      transactionType: "payment",
      createdAt:new Date()
    });
    accountings.push({
      id:nanoid(),
      accountNumber: req.body.receiverAccount,
      amount: req.body.amount,
      transactionType: "payment",
      createdAt:new Date()
    });
    findReceiverAcc.balance = req.body.amount + findReceiverAcc.balance;
    findSenderAcc.balance = findSenderAcc.balance - req.body.amount;
    res.status(201).json({
        success:true,
        data: payments,
      });
  }
  else{
      res.status(400).json({
        success:false,
        message:"No such account found"
      })
  }

 
};

module.exports = {
  newPayment,
};
