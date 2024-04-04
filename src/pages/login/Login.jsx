/* import { useRef, useState } from "react";
import { LoginWrap  } from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/modules/authSlice";
 
const Login = () => {
    const [ user , setUser ] = useState({
        email:'', password:''
    })
    const { email , password } = user 
    const emailRef = useRef()

    const navigate = useNavigate();
    const dispatch  = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault() 
        if( !email || !password ) return
        if(email === 'abc@naver.com' && password === 'a1234') {
            dispatch(login(user))
            navigate('/')
    }          
        setUser({            
            email:'',
            password:''
        })
        emailRef.current.focus()
    }
    
    const onInput = (e) => {
        const { name, value } = e.target 
        setUser({
            ...user ,
            [name]:value, 
        })
    }
    
    return (
        <LoginWrap>
            <div className="inner">
            <h2>로그인 페이지 입니다.   </h2>
            <form onSubmit={ onSubmit }>
                <p>
                    <label>이메일 </label>  
                    <input type="email" ref={emailRef}  value={email} name="email" onChange={onInput} placeholder="로그인정보:aaa@naver.com"
                   />
                </p>                
                <p>
                    <label>비밀번호 </label>  
                    <input type="password"  value={password} name="password" onChange={onInput} placeholder="로그인정보:a1111" />
                </p>
                <p><button type="submit">로그인</button></p>
            </form>
            </div>

        </LoginWrap>
    );
};

export default Login; */

import { useRef, useState } from "react";
import { LoginWrap  } from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/modules/authSlice";
 
const Login = () => {
    const [ user , setUser ] = useState({
        email:'', password:''
    })
    const { email , password } = user 
    const emailRef = useRef()

    const navigate  = useNavigate()
    const dispatch  = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault() 
        if( !email || !password ) return
        setUser({            
            email:'',
            password:''
        })
        dispatch(login(user))
        navigate('/')
        emailRef.current.focus()
    }
    
    const onInput = (e) => {
        const { name, value } = e.target 
        setUser({
            ...user ,
            [name]:value, 
        })
    }
    
    return (
        <LoginWrap>
            <div className="inner">
            <h2>로그인 페이지 입니다.   </h2>
            <form onSubmit={ onSubmit }>
                <p>
                    <label>이메일 </label>  
                    <input type="email" ref={emailRef}  value={email} name="email" onChange={onInput} placeholder="로그인정보:aaa@naver.com"
                   />
                </p>                
                <p>
                    <label>비밀번호 </label>  
                    <input type="password"  value={password} name="password" onChange={onInput} placeholder="로그인정보:a1111" />
                </p>
                <p><button type="submit">로그인</button></p>
            </form>
            </div>

        </LoginWrap>
    );
};

export default Login;