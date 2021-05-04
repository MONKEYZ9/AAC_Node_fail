var express = require('express');
var router = express.Router();

const userInfo = {
  lee : {
    password : "123",
  },
  kim : {
    password : "123",
  },
};

router.get("/", (req, res) => {
  const session = req.session;
  res.render('index', {
    username : session.username,
  });
});

// 원래는 post를 사용해야 한다. 로그인이니까 근데 조금 참고 보자 페이지에서 바로 확인 해야 하니까
router.get("/login/:username/:password", (req, res) => {
  const session = req.session; // 세션 사용준비 끝
  const {username, password} = req.params; // 비구조화 할당해주고 난뒤, 

  if(!userInfo[username]) {
    res.status(400).json({
      message : "user not found",
    });
  }
  if(userInfo[username]["password"]===password) {
    session.username = username;
    res.status(200).json({
      message : "user login",
    });
  } else {
    res.status(400).json({
      message : "user pw incorrect"
    });
  }

});

// 로그아웃
router.get('/logout', (req, res) => {
  const sesssion = req.session;
  if(sesssion.username) {
    // 세션을 삭제하고 에러가 발생하면 에러를 콘솔로 찍자
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/users');
      }
    });
  } else {
    res.redirect('/users');
  }
});



module.exports = router;
