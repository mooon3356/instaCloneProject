/*eslint-disable*/
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "axios";

const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const idPattern = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
const pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
const userNamePattern = /^[가-힣]{2,4}$/;
const phonePattern = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;

// var idPattern = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
//       var pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
//       var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//       var phonePattern = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;

const SignUp = () => {
  // 회원가입 컴포넌트
  const history = useHistory();
  let [userInfo, setUserInfo] = useState({
    email: null,
    userName: null,
    userId: null,
    password: null,
  });
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userId, setuserId] = useState(null);
  const [password, setPassword] = useState(null);

  // input 태그들에서 onChange 이벤트가 발생될 때마다, state 값을 바꿔주는 함수
  const handleUserInfo = (value, name) => {
    let copyUserInfo = { ...userInfo };

    if (name === "email") {
      console.log(emailPattern.test(value));
      if (emailPattern.test(value) === true || phonePattern.test(value) === true) {
        copyUserInfo.email = value;
        setUserInfo({ ...copyUserInfo });
        setEmail("✓");
      } else {
        if (emailPattern.test(value) === false) {
          setEmail("❌");
        }
        if (phonePattern.test(value) === false) {
          setEmail("❌");
        }
      }
    } else if (name === "userName") {
      if (userNamePattern.test(value) === true) {
        copyUserInfo.userName = value;
        setUserInfo({ ...copyUserInfo });
        setUserName("✓");
      } else {
        setUserName("❌");
      }
    } else if (name === "userId") {
      if (idPattern.test(value)) {
        copyUserInfo.userId = value;
        setUserInfo({ ...copyUserInfo });
        setuserId("✓");
      } else {
        setuserId("❌");
      }
    } else if (name === "password") {
      if (pwPattern.test(value) === true) {
        copyUserInfo.password = value;
        setUserInfo({ ...copyUserInfo });
        setPassword("✓");
      } else {
        setPassword("❌");
      }
    }
  };

  // 서버에 요청보내는 코드
  const send = (userInfo) => {
    axios
      .post("https://localhost:4000/signup", {
        email: userInfo.email,
        password: userInfo.password,
        username: userInfo.userName,
        mobile: "010-4386-1234",
      })
      .then((res) => {
        console.log("hi");
        history.push("/");
      });
  };

  // 회원가입 정보들 전송하는 코드
  const handleSubmit = (e) => {
    if (email === "✓" && userName === "✓" && userId === "✓" && password === "✓") {
      e.preventDefault();
      console.log("send is going to be use");
      send(userInfo);
    } else {
      alert("정보를 정확하게 입력해주세요.");
      e.preventDefault();
    }
  };

  return (
    <div className="body">
      <div className="signUp_stage">
        <div className="signUp_title">Instagram</div>
        <div className="smallTitle">
          <div>Sign up to see photos and videos</div>
          <div>from your friends.</div>
        </div>
        <Button color="primary">Log in with Facebook</Button>
        <div className="orLine">
          <div className="line"></div>
          <span className="or">OR</span>
          <div className="line"></div>
        </div>
        <form className="form" onSubmit={handleSubmit} name="loginform">
          <div className="inputs">
            <div>
              <input
                placeholder="휴대폰 번호 또는 이메일 주소"
                name="email"
                onChange={(e) => {
                  handleUserInfo(e.target.value, e.target.name);
                }}
              ></input>
              <span className="valid">{email}</span>
            </div>
            <div>
              <input
                placeholder="성명"
                name="userName"
                onChange={(e) => {
                  handleUserInfo(e.target.value, e.target.name);
                }}
              ></input>
              <span className="valid">{userName}</span>
            </div>
            <div>
              <input
                placeholder="사용자 이름"
                name="userId"
                onChange={(e) => {
                  handleUserInfo(e.target.value, e.target.name);
                }}
              ></input>
              <span className="valid">{userId}</span>
            </div>
            <div>
              <input
                placeholder="비밀번호"
                type="password"
                name="password"
                onChange={(e) => {
                  handleUserInfo(e.target.value, e.target.name);
                }}
              ></input>
              <span className="valid">{password}</span>
            </div>
          </div>
          {/* <button type="submit">Sign Up</button> */}
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
        <div className="policy">By signing up, you agree to our Terms , Data Policy and Cookies Policy.</div>
      </div>
      <div className="question_account_login">
        Have an account?{" "}
        <Link to="/" className="login">
          Log in
        </Link>
      </div>
      <div>Get the app.</div>
      <div className="downLoadLink"></div>
    </div>
  );
};

export default SignUp;

const send = (userInfo) => {
  fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json);
};
