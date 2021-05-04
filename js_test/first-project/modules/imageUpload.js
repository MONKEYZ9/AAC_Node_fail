const multer = require('multer'); // 패키지 부른다음
// 이렇게 하면 upload라는 폴더를 만들고 파일도 암호화해서 보여준다 그래서
// 다시 만들어줄꺼야


// 이렇게 하면 
const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        // 콜백 함수 맨 처음에는 에러가 들어간다
        callback(null, 'public/images/')
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname);
    },
});

const upload = multer({storage : storage});




module.exports = upload;