var express = require('express');
var router = express.Router();

const postModel = require("../model/post");

router.post("/", async (req, res) => {
  const { title, content} = req.body; // 비구조화 할당으로 받아주고
  const post = new postModel({ // 포스트 모델은 지금 클래스로 정의되었음    쓰고 싶다면 앞에 new를 넣어야 함
    title : title, // 필요한 변수들과 값을 모아놓고 쓴다는거야
    content : content,
  });
  try {
    const result = await post.save(); // 주의 할점 save는 비동기식임 언제 완료가 될지 모름 
    res.status(200).json({ // 저장되지 않은 데이터를 응답할 수 있기에 그래서 async와 await를 사용하면 됨
      message : "upload success!",
      data : result,
    });
    
  } catch (error) {
    res.status(500).json({
      message :error,
    });
  }
});


// 전체 게시물을 조회하는 걸 만들거임
router.get('/', async(req, res) => {
  try {
    const result = await postModel.find({}); // find(조건 넣으면 됨)
    res.status(200).json({
      message : "read all",
      data : result,
    });
  } catch (error) {
    res.status(500).json({
      message : "error",
    });
  }
});

// 특정하나를 찾고 싶다
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
   const result = await postModel.findById(id);
   res.status(200).json({
    message : "detail",
    data : result,
   }); 
  } catch (error) {
    res.status(500).json({
      message : error,
    });
  } 
});


//update
router.put('/:id', async(req,res) => {
  const { id } = req.params;
  const {title, content} = req.body;
  try {
    //  매개변수로 id를 셋팅하고
    const result = await postModel.findByIdAndUpdate(id, { // 아뒤로 찾고 업뎃
      title : title,
      content : content,
    }, {
      new :  true, // 압데이트 한거를 담으려면 이렇게 하면 된다 
    });
    res.status(200).json({
      message : "update success",
      data : result,
    });
  } catch (error) {
    res.status(500).json({
      message : error,
    });
  }
});


//delete 하기
router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message : "delete success",
    });
  } catch (error) {
    res.status(500).json({
      message : error,
    });
  }
});





module.exports = router;

const logincheck = require("../modules/logincheck");
// 로긴 체크 를 요청해서 받는거야 
// 여기 라우터로 들어갈때 로긴 체크를 하고 들어간다는 거야

const upload = require('../modules/imageUpload');



// router.get('/', logincheck, (req, res)=> {
//   res.status(200).json({
//     message : "login 성공",
//   });
// });

// // 데이터 전송때문에 post
// router.post("/upload", upload.single("img"), (req, res) => {
//   const file = req.file;
//   console.log(file);
//   res.status(200).json({
//     message : "upload success",
//   });
// });
// ------------------------------------------------------------------------------------------
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 어떻게 하냐
// req는 요청
// res는 응답

// router.get('/', (req, res) => {
//   res.json({
//     message : "Success",
//   });
// });

// router.get('/main', (req, res) => {
//   res.json({
//     message : "Main Success",
//   });
// });

// router.get('/main2', (req, res) => {
//   console.log(req.body);
// });

// router.post('/mainpost', (req, res) => {
//   const data =  req.body.data;
//   // res.send는 문자열을 응답할때
//   // res.send("문자열이 응답됩니다.");
//   // res.json json객체를 응답할때 쓰임
//   // res.json({
//   //   message : "json 응답"
//   // });
//   // res.render는 사용자들이 볼 수 있는 view 파일 형식을 넣게 된다
//   res.render('index');

// });
// ---------------------------------------------------------------------------------------------------

// let arr = [];

// // GET Method

// router.get('/read', (req, res) => {
//   res.status(200).json({
//     message : "asd",
//   });
// });

// // POST Method

// router.post('/create', (req, res) => {
//   console.log(req.body);
//   // 비구조화 할당을 통해서 상수에 할당이 가능하다
//   const { data } = req.body;
//   arr.push(data);
//   res.status(200).json({
//     message : "success",
//     result: arr,
//   });
// });

// // Put Method
// // 0번째의 데이터를 가지고 싶다면 
// router.put('/update/:id', (req, res) => {
//   const  { id } = req.params;
//   const {data} = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message : "update",
//     result : arr,
//   });
// });


// // Delete Method
// router.delete("/delete/:id", (req, res)=> {
//   const {id} = req.params;
//   // console.log(id);
//   // 배열에 지우는 건 splice로 지우면 된다
//   arr.splice(id, 1);
//   // 잘 삭제 되었나?
//   res.status(200).json({
//     message : "del success",
//     result : arr,
//   });

// });


// ---------------------------------------------------------------------------------------------------


