const { accounts } = require("../models/account");
const { nanoid } = require("nanoid");
const newAccount = (req, res, next) => {
  const { currencyCode, ownerName, accountType } = req.body;

  accounts.push({
    id: nanoid(),
    accountNumber: new Date().getTime(),
    currencyCode,
    ownerName,
    accountType,
    balance: 0,
  });
  res.status(201).json({
    data: accounts,
  });
};

const getAccount = (req, res, next) => {
  const account = accounts.find((ac) => ac.accountNumber == req.params?.id);
  const balance = parseFloat(account.balance).toFixed(2);
  const numBalance = Number(balance);

  res.status(200).json({
    success: true,
    data: {
      accountNumber: account.accountNumber,
      currencyCode: account.currencyCode,
      ownerName: account.ownerName,
      accountType: account.accountType,
      balance: numBalance,
    },
  });
};
module.exports = {
  getAccount,
  newAccount,
};
