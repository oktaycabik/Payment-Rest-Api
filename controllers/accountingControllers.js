const { accountings } = require("../models/accounting");

const getAccounting = (req, res, next) => {
  const accountHistory = accountings.filter(
    (ac) => ac.accountNumber == req.params.id
  );
  const isAccount = accountHistory.some(
    (acc) => acc.accountNumber == req.params.id
  );
     
  if (isAccount) {
    res.status(200).json({
      success: true,
      data: accountHistory,
    });
  }
  res.status(400).json({
    success: false,
    message: "your account history was not found",
  });
};

module.exports = {
  getAccounting,
};
