/* import { JoinWrap  } from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { singup } from "../../store/modules/authSlice";
import { useRef } from "react";
import Spinner from "../../components/Spinner";

const Join = () => {
    const [ user , setUser ] = useState({
        username:'',
        tel:'',
        email:'',
        password:''
    })
    const [ isSpinner , setIsSpinner] = useState( true )


    const nameRef  = useRef()

    const { username, tel , email, password } = user 
    const navigate  = useNavigate()
    const dispatch  = useDispatch()

    const onInput =  e  => {
        const { name , value } = e.target 
        setUser({
            ...user ,
            [name]:value
        })
    }
    const onSubmit =  e  => {
        e.preventDefault()
        if( !username || !tel ) return 
        dispatch( singup(user))
        navigate(`/login`)
        setUser({ username:'', tel:'', email:'', password:'' })
        nameRef.current.focus()
    }

    useEffect( () => {
        const timer  = setTimeout( () => {
            setIsSpinner( false)
        }, 600 )
        return() => {
            clearTimeout( timer )
        }
    }, [] )


   
    return (
        <>  
            {
                isSpinner && <Spinner />
            }       
            <JoinWrap>
                <div className="inner">
                <h2> 회원가입 </h2>
                <form onSubmit={ onSubmit }>
                    <p>
                        <label> 이름 </label>  
                        <input type="text"  placeholder="김현진" ref={nameRef} name="username" value={username} onChange={onInput} />
                    </p>                
                    <p>
                        <label> 전화번호 </label>  
                        <input type="tel" name="tel" value={tel} onChange={onInput}placeholder="010-6543-9118" />
                    </p>                
                    <p>
                        <label>이메일 </label>  
                        <input type="email" name="email" value={email} onChange={onInput}  placeholder="aaa@naver.com" />
                    </p>                
                    <p>
                        <label>비밀번호 </label>  
                        <input type="password" name="password" value={password} onChange={onInput} placeholder="a1111" />
                    </p>
                    <p><button type="submit">회원가입</button>
                       <button onClick={()=>navigate(-1)} >취소</button></p>
                </form>
                </div>

            </JoinWrap>
        </>
    );
};

export default Join; */

import { JoinWrap  } from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { singup } from "../../store/modules/authSlice";
import { useRef } from "react";
import Spinner from "../../components/Spinner";

const Join = () => {
    const [ user , setUser ] = useState({
        username:'',
        tel:'',
        email:'',
        password:''
    })

    const { username, tel , email, password } = user;

    const nameRef  = useRef()
    
    
    const navigate  = useNavigate()
    const dispatch  = useDispatch()
    
    const [ isSpinner , setIsSpinner] = useState( true )

    useEffect( () => {
        const timer  = setTimeout( () => {
            setIsSpinner( false)
        }, 600 )
        return() => {
            clearTimeout( timer )
        }
    }, [] )

    const onInput =  e  => {
        const { name , value } = e.target 
        setUser({
            ...user ,
            [name]:value
        })
    }
    const onSubmit =  e  => {
        e.preventDefault()
        if( !username || !tel || !email || !password ) return 
        dispatch( singup(user))
        navigate(`/login`)
        setUser({ username:'', tel:'', email:'', password:'' })
        nameRef.current.focus()
    }



   
    return (
        <>  
            {
                isSpinner && <Spinner />
            }       
            <JoinWrap>
                <div className="inner">
                <h2> 회원가입 </h2>
                <form onSubmit={ onSubmit }>
                    <p>
                        <label> 이름 </label>  
                        <input type="text"  placeholder="김현진" ref={nameRef} name="username" value={username} onChange={onInput} />
                    </p>                
                    <p>
                        <label> 전화번호 </label>  
                        <input type="tel" name="tel" value={tel} onChange={onInput}placeholder="010-6543-9118" />
                    </p>                
                    <p>
                        <label>이메일 </label>  
                        <input type="email" name="email" value={email} onChange={onInput}  placeholder="aaa@naver.com" />
                    </p>                
                    <p>
                        <label>비밀번호 </label>  
                        <input type="password" name="password" value={password} onChange={onInput} placeholder="a1111" />
                    </p>
                    <p><button type="submit">회원가입</button>
                       <button onClick={()=>navigate(-1)} >취소</button></p>
                </form>
                </div>

            </JoinWrap>
        </>
    );
};

export default Join;
