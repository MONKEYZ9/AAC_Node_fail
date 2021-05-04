const logincheck = (req, res, next) => {
    const userlogin = false;
    if(userlogin) {
      next();
  
    }else {
      res.status(400).json({
        message : "login fail"
      });
    }
}

module.exports = logincheck;