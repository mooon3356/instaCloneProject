const express = require("express");
const cors = require("cors");
const session = require('express-session');
const logger = require('morgan');
const https = require('https')
const fs = require('fs')
const usersRouter = require('./routes/user')

const app = express();

app.use(
  session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: 'localhost',
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    },
  })
);
app.use(logger('dev'));
app.use(express.json()); // express에서 제공하는 json 화 시켜주는 코드
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTION'],
  credentials: true,
}));


app.use('/',usersRouter);
//이거의 용도?

//로그인 버튼 누를 시, 서버 데이터 안의 정보들과 비교하여 응답을 해주는 코드



//https 서버 생성.
const server = https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
    },
    app
  )
  .listen(4000);


module.exports = server;

//-----------------------------------------------------------------------------------------//
// 서버에서 데이터 처리했을 때 코드

// app.use(express.urlencoded({ extended: true })); // bodyParser 기능을 함 --> 오류 관련 코드

// app.get("/", function (req, res, next) {
//   res.status(200).send(dataBase);
// });

// app.get("/:email/:password", function (req, res) {
//   let data =
//     dataBase.find((el) => el.email === req.params.email) !== undefined &&
//     dataBase.find((el) => el.password === req.params.password) !== undefined;
//   res.send(data);
// });

// app.post(
//   "/",
//   function (req, res, next) {
//     const data = req.body;
//     dataBase.push(data);
//     next();
//   },
//   function (req, res, next) {
//     res.status(201).send("완료!");
//   }
// );


