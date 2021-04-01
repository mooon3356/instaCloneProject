import React from 'react'
import { Link } from "react-router-dom";

const SignIn = () => {

    
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="body">
             <div className="stage">  {/* 회원가입 폼 감싸있는 태그 */}
                 <div className="title">Instagram</div>
                 <form className="form" onSubmit={handleSubmit} name = "loginform" >
                     <input placeholder="전화번호, 사용자 이름 또는 이메일" name="email"></input>
                     <input placeholder="비밀번호" name="password"></input>
                     <button type="submit" >로그인</button>
                     {/* {data} */}
                 </form>
                <div>-------------------또는------------------</div>
                 <div>Log in with Facebook</div>
                 <div>Forgot password?</div>
                 <div> Don't have an account?
                     <Link to ="/SignUp">Sign up</Link>
                 </div>
                 <div className="downLoadLink">
                     <button>App Store에서 다운로드 하기</button><button>구글 플레이</button>
                 </div>
                 <footer>개요</footer>  
             </div>
             
         </div>
     )
}

export default SignIn
