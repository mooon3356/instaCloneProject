import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// 오늘 목표 : 인스타그램 클론코딩
// 1. 로그인 창 구현
// 2. 회원가입 창 구현

// 위에 2개를 완성하면 React-router를 사용하여 페이지 이동 구현

//1. 로그인 창 구현

// react-router-dom

// git remote add origin https://github.com/mooon3356/instaCloneProject.git

// git init - 이 공간을 저장소로 만들고 싶을 때 사용
