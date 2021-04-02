const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser')
// const jsonPaser =bodyParser.json();

let dataBase = [{"email" : "abcde@gmail.com", "userName" : "Kim", "userId" : "abcde", "password" : "123456" },
{"email" : "abcde1@gmail.com", "userName" : "Kim", "userId" : "abcde", "password" : "123456" }];

const app = express();

// app.use(express.urlencoded({ extended: true })); // bodyParser 기능을 함 --> 오류 관련 코드
app.use(express.json()); // express에서 제공하는 json 화 시켜주는 코드

app.use(cors());

app.get('/', function(req, res, next) {
    res.status(200).send(dataBase)
})

app.post('/', function(req, res, next) { 
    const data = req.body
    dataBase.push(data)
    next()
}, function(req, res, next) {
    res.status(201).send('완료!')
})

app.get('/:email/:password', function(req, res, next) {
   let data = dataBase.find((el)=>el.email === req.params.email) !== undefined && dataBase.find((el)=>el.password === req.params.password) !== undefined;
      if(!data){
        console.log('data 불일치')
      } else{
        res.status(200).send(data)  
      } 
    
});

app.listen(3000,() => {
    console.log("server listen 3000")
})


module.exports =app;