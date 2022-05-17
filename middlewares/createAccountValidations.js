const createAccountValidations = (req, res, next) => {
    const {accountType,currencyCode} =req.body
    
    if(accountType!==process.env.INVIDUAL && accountType!==process.env.CORPORATE){
      res.status(400).json({
          success:false,
          message:"you can only create an 'individual' and 'corporate' account"
      })
      return;
    }
    else if(currencyCode!==process.env._TRY && currencyCode!==process.env._USD && currencyCode!==process.env._EUR){
        res.status(400).json({
            success:false,
            message:"currency code can only be 'TRY', 'USD' and 'EUR'"
        })
        return;
    }
    return next()
};

module.exports = {
  createAccountValidations,
};
