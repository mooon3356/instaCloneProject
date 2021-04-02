/*eslint-disable*/
import React , {useState} from 'react'
import { Link } from "react-router-dom";


const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const idPattern = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
const pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
const userNamePattern =  /^[가-힣]{2,4}$/;
const phonePattern = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;

const SignUp = () => {

    let data = [];
    let [userInfo,setUserInfo]= useState({email : null, userName : null, userId : null, password : null });
    const [email, setEmail] = useState(null)
    const [userName, setUserName] = useState(null)
    const [userID, setUserID] = useState(null)
    const [password, setPassword] = useState(null)

    
    const handleUserInfo = (value, name) => {
        let copyUserInfo = {...userInfo}

        
        if(name === "email"){
            console.log(emailPattern.test(value))
            if(emailPattern.test(value) === true || phonePattern.test(value) === true){
                copyUserInfo.email = value
                setUserInfo({...copyUserInfo})
                setEmail('✓')
            } else {
                if(emailPattern.test(value) === false){   
                    setEmail('❌')
                }
                if(phonePattern.test(value) === false){
                    setEmail('❌')
                }
            }
        }
        else if(name === "userName"){
            if(userNamePattern.test(value) === true) {
              copyUserInfo.userName = value
              setUserInfo({...copyUserInfo}) 
              setUserName('✓')
            } else {
               setUserName('❌')
            }
        }
        else if(name === "userId") {
            if(idPattern.test(value)) {
              copyUserInfo.userId = value
              setUserInfo({...copyUserInfo})
              setUserID('✓')
            } else {
                setUserID('❌')
            }
        }
        else if(name === "password") {
            if(pwPattern.test(value) === true){
              copyUserInfo.password = value
              setUserInfo({...copyUserInfo})
              setPassword('✓')
            }else{
              setPassword('❌')
            }
        }
    }

    const send = (userInfo) => {
        fetch('http://localhost:3000',{
         method: 'POST',
         body: JSON.stringify(userInfo),
         headers : {
             'Content-Type': 'application/json'
         },
     })
     .then(res => res.json())
     .then(json => json)
 }

    const handleSubmit = (e) => {
       // 서버에 전송 후, userInfo를 초기화
        send(userInfo)
    }
   
   return (
       <div className="body">
            <div className="stage">  {/* 회원가입 폼 감싸있는 태그 */}
                <div className="title">Instagram</div>
                <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
                <button className="loginButton">facebook으로 로그인</button>
                <div>------ 또는 ------</div>
                <form className="form" onSubmit={handleSubmit} name = "loginform" >
                    <div>
                        <input placeholder="휴대폰 번호 또는 이메일 주소" name="email" onChange={(e) => {handleUserInfo(e.target.value, e.target.name)}}></input>
                        {/* {email === true ? <span className = "check">{'✓'}</span> : <span style={{display: 'none'}} className = "fail">{'❌'}</span> }  */}
                        <span>{email}</span>
                    </div>
                    <div>
                        <input placeholder="성명" name="userName" onChange={(e) => {handleUserInfo(e.target.value, e.target.name)}}></input>
                        {/* {email === true ? <span className = "check">{'✓'}</span> : <span style={{display: 'none'}} className = "fail">{'❌'}</span> }  */}
                        <span>{userName}</span>
                    </div>
                    <div>
                      <input placeholder="사용자 이름" name="userId" onChange={(e) => {handleUserInfo(e.target.value, e.target.name)}}></input>
                        {/* {email === true ? <span className = "check">{'✓'}</span> : <span style={{display: 'none'}} className = "fail">{'❌'}</span> }  */}
                        <span>{userID}</span>
                    </div>
                    <div>
                        <input type = "password" placeholder="비밀번호" name="password" onChange={(e) => {handleUserInfo(e.target.value, e.target.name)}}></input>
                        {/* {email === true ? <span className = "check">{'✓'}</span> : <span style={{display: 'none'}} className = "fail">{'❌'}</span> }  */}
                        <span>{password}</span>
                    </div>
                    
                    <button type="submit" >가입</button>
                    {data}
                </form>
                <div>가입하면 instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</div>
                <div>
                    계정이 있으신가요? <Link to ="/">로그인</Link>
                </div>
                <div>앱을 다운로드하세요.</div>
                <div className="downLoadLink">
                    <a>
                    <img src = {"https://www.millie.co.kr/common/images/common/icon-app-strore-badge.png"} width = "150" height = "100" />
                    </a>
                    <a>
                    <img src = {"https://play.google.com/intl/ko/badges/static/images/badges/ko_badge_web_generic.png"} width = "150" height = "110" />
                    </a>
                    {/* <button >App Store에서 다운로드 하기</button><button>구글 플레이</button> */}
                </div>
                <footer>개요</footer>  
            </div>
            
        </div>
    )
}

export default SignUp
// const requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: JSON.stringify(data),
//   redirect: 'follow'
// };

// fetch('http://localhost:3000/', requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
