// signin(로그인)
//     목표: 클라이언트에서 유저가 입력한 id와 password를 데이터베이스의 데이터와 비교하여 조건에 따라 응답한다.
//     req에 들어오는 것들 : userId, password
//     1. req에 들어오는 것들을 이용하여 findOne 메소드 사용 -> userInfo
//     2. userInfo가 있다면, '로그인 시켜주자'를 응답
//     3. userInfo가 없다면, '로그인 안됨'을 응답

const {User} = require('../../models');     //models파일의 user.js파일의 modelname을 적는 것.
// console.log(Users)


module.exports = {
    post: async (req,res) =>{
        // console.log(User)
        // console.log(req.body)
        const userInfo = await User.findOne({
            where: { email: req.body.email, password: req.body.password },
          });

          console.log(req.session)
          if(!userInfo) {
              res.status(400).send('로그인 못함')
          }
          else{
            //   req.session.save(function () {
                //   req.session.userId = userInfo.username
                  res.status(200).send({data: userInfo})
            //   })
          }

    }
}

// req.session.save(function () {
//     req.session.userId = userInfo.userId;
//     res.json({ data: userInfo, message: 'ok' });
//   });