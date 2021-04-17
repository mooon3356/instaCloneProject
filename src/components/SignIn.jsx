/*eslint-disable*/
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal";
import FacebookLogin from "react-facebook-login";
import { Button } from "@material-ui/core";
const axios = require("axios");

// import { Button } from 'react-bootstrap';

//목표: 정보들을 전송 시, 데이터 안의 정보들과 비교하여 ID 값과 비밀번호 값이 같다면, 로그인 성공 화면을 보여준다.
// 1. 브라우저에서 전송을 한다.
// 2. 전송된 데이터를 dataBase와 비교를 한다.

// userInfo = {"email" : "abcde@gmail.com", "userName" : "Kim", "userId" : "abcde", "password" : "123456" }
// 위의 객체는 우리가 로그인 화면에서 입력했을 시, 만들어주는 객체

// 로그인 컴포넌트
const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // .then((res) => {
  //   this.props.loginHandler(true);
  //   return axios.get('https://localhost:4000/users/userinfo', {
  //     withCredentials: true,
  //   });
  // })

  // 로그인 버튼 클릭 시, 실행되는 코드
  const handleSubmit = (e) => {
    axios
      .post(
        "https://localhost:4000/signin",
        {
          email: email,
          password: password,
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((res) => {
        history.push("/main")
        return axios
          .get("https://localhost:4000/user", {
            withCredentials: true,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => alert('제대로 입력해주세요.'));
  };

  // input들에 태그에 변화가 일어나면, 실행되는 코드
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="body">
      <div className="signIn_stage">
        <div className="signIn_title">Instagram</div>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          name="loginform"
        >
          <input // 첫 번째 input tag
            placeholder="Phone number, username, or email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input // 두 번째 input tag
            type="password" // 브라우저에 패스워드를 가려줌
            placeholder="Password"
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Log in
          </Button>
        </form>
        <div className="orLine">
          <div className="line"></div>
          <span className="or">OR</span>
          <div className="line"></div>
        </div>
        <Button color="primary">Log in with Facebook</Button>
        <p className="question_password">Forgot password?</p>
      </div>
      <div className="question_account">
        <span className="question_account_text">Don't have an account?</span>
        <Link to="/SignUp" className="question_account_signup">
          Sign up
        </Link>
      </div>
      <div className="downLoadLink"></div>

      <footer className="footer">Get the app.</footer>
    </div>
  );
};

export default SignIn;

// 이미지 링크
{
  /* <img src="https://www.pikpng.com/pngl/m/144-1445686_app-store-available-on-apple-google-store-logo.png" alt="App Store - Available On Apple Google Store Logo Clipart@pikpng.com"/>                     */
}
{
  /* <img src = {"https://play.google.com/intl/ko/badges/static/images/badges/ko_badge_web_generic.png"} width = "150" height = "110" /> */
}

// const responseFacebook = (response) => { // Facebook 로그인 api를 사용하기 위한 코드
//   console.log(response);
// };

// https://serverless-stack.com/chapters/redirect-on-login-and-logout.html
// 스택오버플로우
// What is the best way to redirect a page using react-router
//
// https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router

// 기존 요청 코드
// fetch(`http://localhost:3000/${email}/${password}`) // 이메일, 패스워드를 보내는 방식을 바꿔야됨
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);
//         if (result === true) {
//           console.log("result is true");
//           history.push("/main"); //history.push를 사용하여 내가 원하는 경로 창으로 이동
//         } else {
//           alert("로그인 정보가 틀렸습니다.");
//         }
//       })
//       .catch((error) => console.log("error", error));

//

// axios
//       .post(
//         "https://localhost:4000/signin",
//         {
//           email: email,
//           password: password,
//         },
//         { "Content-Type": "application/json", withCredentials: true }
//       )
//       .then((res) => {
//         return axios.get("https://localhost:4000/user", {
//           withCredentials: true,
//         });
//       })
//       .catch((err) => alert(err));
