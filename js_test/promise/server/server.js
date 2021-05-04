//  require은 해당 패키지를 가져와서 쓸 수 있게
const http = require("http");
// 
// 서버를 생산하고 req 응답보낼때, res 응답 받을 때 하면서 요청과 응답을 받게끔
// http.createServer((req, res) => {
//      res.writeHead(200, {"Content-type" : "text/html"});
//     //             상태코드(200 잘 보냈을때)
//     //              404는 잘 안될때 
//     res.end("<p>Hello World</p>");

// }).listen(3000, () => {
//     console.log("3000번 포트 서버 접속 완료");
// });

http
.createServer((req, res) => {
     if(req.url === "/") {
        res.writeHead(200);
        res.end("main url");
     } else if(req.url === "/upload"){
        res.writeHead(200);
        res.end("upload url");
     } else if(req.url === "/delete") {
        res.writeHead(200);
        res.end("delete url");
     } else {
        res.writeHead(404);
        res.end("NOT found");
     }

})
.listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료");
});


// npm init으로 package.json을 구축해주면 된다 ==> 의존성 관리 및 버전관리를 하는곳
// package name : 패키지 이름

// npm install express express 환경을 구축해주는거
// npm install -D nodemon 여기서 -D는 개발환경에서만 하는 거야
// npm install -g express-generator -g는 어느 곳이든 사용할 수 있게끔 해주는거야 프로젝트 어디서든 다시 설치 할 필요없이 

// express는 빠르고 간편한 웹 프레임워크임(프로그램을 만드는 틀)
// express-generator는 디렉토리를 잘 만들어주게 됨