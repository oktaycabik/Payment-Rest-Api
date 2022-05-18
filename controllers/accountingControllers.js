const { accountings } = require("../models/accounting");

const getAccounting = (req, res, next) => {
  const accountHistory = accountings.filter(
    (ac) => ac.accountNumber == req?.params?.id
  );

  res.status(200).json({
    success: true,
    data: accountHistory,
  });
};

module.exports = {
  getAccounting,
};
