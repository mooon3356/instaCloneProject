const express = require("express");
const cors = require("cors");

let dataBase = [
  {
    email: "abcde@gmail.com",
    userName: "Kim",
    userId: "abcde",
    password: "123456",
  },
  {
    email: "abcde1@gmail.com",
    userName: "Kim",
    userId: "abcde",
    password: "123456",
  },
];

const app = express();

app.use(express.json()); // express에서 제공하는 json 화 시켜주는 코드

app.use(cors());

app.get("/", function (req, res, next) {
  res.status(200).send(dataBase);
});

//로그인 버튼 누를 시, 서버 데이터 안의 정보들과 비교하여 응답을 해주는 코드
app.get("/:email/:password", function (req, res) {
  let data =
    dataBase.find((el) => el.email === req.params.email) !== undefined &&
    dataBase.find((el) => el.password === req.params.password) !== undefined;
  res.send(data);
});

app.post(
  "/",
  function (req, res) {
    const data = req.body;
    dataBase.push(data);
    next();
  },
  function (req, res, next) {
    res.status(201).send("완료!");
  }
);

app.listen(3000, () => {
  console.log("server listen 3000");
});

module.exports = app;

// app.use(express.urlencoded({ extended: true })); // bodyParser 기능을 함 --> 오류 관련 코드
