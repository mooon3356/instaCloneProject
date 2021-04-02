/*eslint-disable*/
import React, {useState} from 'react'
import { Link,useHistory } from "react-router-dom";
import Modal from "react-modal"
import FacebookLogin from 'react-facebook-login';

// import { Button } from 'react-bootstrap';
import { Button } from '@material-ui/core';

//목표: 정보들을 전송 시, 데이터 안의 정보들과 비교하여 ID 값과 비밀번호 값이 같다면, 로그인 성공 화면을 보여준다.

// 1. 브라우저에서 전송을 한다.
// 2. 전송된 데이터를 dataBase와 비교를 한다.

// userInfo = {"email" : "abcde@gmail.com", "userName" : "Kim", "userId" : "abcde", "password" : "123456" }
// 위의 객체는 우리가 로그인 화면에서 입력했을 시, 만들어주는 객체

//위의 객체를 데이터베이스 배열에 돌려서 
// const successId = dataBase.filter(data => data === userInfo)


const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modal, setModal] = useState(true)

    const responseFacebook = (response) => {
        console.log(response);
      }
    
    const handleSubmit = e => {
        e.preventDefault();
        // // if(dataBase.filter((el)=>el.email === email).length >= 1 && dataBase.filter((el) => el.password === password).length >= 1) {
        //     if(dataBase.find((el)=> el.email === email) !== undefined && dataBase.find((el)=> el.password === password) !== undefined){
        //   console.log('로그인 성공하셨습니다.') 
        // } else {
        //   console.log('잘못 입력하셨습니다.')
        // }
        
        fetch(`http://localhost:3000/${email}/${password}`)
            .then(response => response.json())
            .then(result => {
                if(result === true){
                    history.push("/main");  //push로 하면 내가 원하는 경로 창으로 이동 , Link를 했을 때는 버튼을 클릭해서 이동
                    // history.goBack(); //뒤로가기
                } else {
                    console.log('hi')
            }})
            .catch(error => console.log('error', error));

    }

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            setEmail(e.target.value)
        } else if(e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }
    
    return (
        <div className="body">
             <div className="stage">  {/* 회원가입 폼 감싸있는 태그 */}
                 <div className="title">Instagram</div>
                    <form className="form" onSubmit={handleSubmit} name = "loginform">
                       <input placeholder="전화번호, 사용자 이름 또는 이메일" name="email" onChange ={((e) => {handleChange(e)})}></input>
                       <input  type= "password"placeholder="비밀번호" name="password" onChange={((e) => {handleChange(e)})}></input>
                        <button type="submit" >Log in</button>

                        {/* <Button variant="primary">Primary</Button> */}
                     {/* {data} */}
                 </form>
                 <div className="loginWith">
                    <div className="line"></div>
                    <span className="or">OR</span>
                    <div className="line"></div>
                 </div>

                <Button color="primary">Log in with Facebook</Button>

                 <p className="question_password">Forgot password?</p>
            </div>
                 <div className="question_account"> Don't have an account?
                     <Link to ="/SignUp">Sign up</Link>
                 </div>
                 <div className="downLoadLink">
                    <a>
                    <img src = {"https://www.millie.co.kr/common/images/common/icon-app-strore-badge.png"} width = "150" height = "100" />
                    </a>
                    <a>
                    <img src = {"https://play.google.com/intl/ko/badges/static/images/badges/ko_badge_web_generic.png"} width = "150" height = "110" />
                    </a>
                 </div>
                
             <footer>개요</footer>  
         </div>
     )
}

export default SignIn
