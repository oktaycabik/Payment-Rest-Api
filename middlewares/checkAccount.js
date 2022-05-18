const { accounts } = require("../models/account");

const checkAccount = (req, res, next) => {
  const account = accounts.find((acc) => acc.accountNumber == req.params.id);
  if (!account) {
    res.status(400).json({
      success: false,
      message: "account not found",
    });
    return;
  }
  return next();
};

module.exports = {
  checkAccount,
};
