/*eslint-disable*/
import React , {useState} from 'react'

const SignUp = () => {

    let data = [];
    let [userInfo,setUserInfo]= useState({email : null, userName : null, userId : null, password : null });
    

    const handleUserInfo = (value, name) => {
        let copyUserInfo = {...userInfo}
        
        if(name === "email"){
            copyUserInfo.email = value
            setUserInfo({...copyUserInfo})
        }
        else if(name === "userName"){
        copyUserInfo.userName = value
            setUserInfo({...copyUserInfo})
        }
        else if(name === "userId") {
            copyUserInfo.userId = value
            setUserInfo({...copyUserInfo})
        }
        else if(name === "password") {
            copyUserInfo.password = value
            setUserInfo({...copyUserInfo})
        }
    }

    const handleSubmit = (e) => {
       // 서버에 전송 후, userInfo를 초기화
       e.preventDefault()
       data.push(userInfo)
       console.log(data)
    }
    
    return (
        <div className="body">
            <div className="stage">  {/* 회원가입 폼 감싸있는 태그 */}
                <div className="title">Instagram</div>
                <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
                <button className="loginButton">facebook으로 로그인</button>
                <div>------ 또는 ------</div>
                <form className="form" onSubmit={handleSubmit} name = "loginform" >
                    <input placeholder="휴대폰 번호 또는 이메일 주소" name="email" onChange={(e) => {handleUserInfo(e.target.value, e.target.name)}}></input>
                    <input placeholder="성명" name="userName" onChange={(e) => {handleUserInfo(e.target.value, e.target.name)}}></input>
                    <input placeholder="사용자 이름" name="userId" onChange={(e) => {handleUserInfo(e.target.value, e.target.name)}}></input>
                    <input placeholder="비밀번호" name="password" onChange={(e) => {handleUserInfo(e.target.value, e.target.name)}}></input>
                    <button type="submit" >가입</button>
                    {data}
                </form>
                <div>가입하면 instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</div>
                <div>계정이 있으신가요? 로그인</div>
                <div>앱을 다운로드하세요.</div>
                <div className="downLoadLink">
                    <button>App Store에서 다운로드 하기</button><button>구글 플레이</button>
                </div>
                <fotter></fotter>
            </div>

        </div>
    )
}

export default SignUp
