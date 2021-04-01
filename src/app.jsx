import React from 'react';
import './app.css';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn';

// 1. route의 기능
// 2. browserRouter, hashRouter의 기능
// 3. Switch의 기능
// 4. useHistory,useParams 기능


function App() {
  return (
     <Router>
      <Switch>
        <Route exact={true} path="/">
          <SignIn />   
        </Route>
    
  <Route  path ="/SignUp">
      <SignUp />    
    </Route>
    </Switch>
     </Router>
  
  )
}

export default App;



// 오늘 목표 : 인스타그램 클론코딩
// 1. 로그인 창 구현
// 2. 회원가입 창 구현

// 위에 2개를 완성하면 React-router를 사용하여 페이지 이동 구현


//1. 로그인 창 구현

// react-router-dom