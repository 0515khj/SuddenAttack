import { Link } from "react-router-dom"; 
import { NavWrap, TopMenu } from "./HeaderStyle";
import { useSelector } from 'react-redux'
import { useState } from "react";

const NavBar = () => {
    const {carts} = useSelector(state => state.cart)
    const { authed , user } = useSelector(state  => state.auth )
    const [start , setStart] =useState(false)

    const onOn = () => {
        setStart(true);
    }

    const onOff = () => {
        setStart(false);
    }

    const st = () =>{
        alert('서비스 점검중 입니다.')
    }
   
    
    return (
        <>
        <NavWrap className="nav">
            <ul>             
                <li><Link to={"/about"}>CLAN</Link></li>
                <li><Link to={"/product"}>MARKET</Link></li>
                <li><Link to={"/notice"}>FORUM</Link></li>
                <li><Link to={"/customer"}>CUSTOMER</Link></li>
                <li><Link to="/cart">
                        Cart <span> {carts.length} </span>
                    </Link> </li>               
            </ul>
            <p className="go" onClick={st} onMouseOver={onOn} onMouseOut={onOff}>{start ? "START":"게임시작"}
             </p>

             


        </NavWrap>

        <TopMenu className="top-menu">
             <li><Link to={"/join"}>회원가입</Link></li>
                    {
                    authed ?
                    <li><Link to={"/logout"}>로그아웃</Link></li>
                    :
                    <li><Link to={"/login"}>로그인</Link></li>
                }
                {
                    authed ?
                    <li style={{color:"#3F51B5"}}>{user.username}님</li>
                    :
                    <li style={{color:"yellow"}}></li>
                }
       </TopMenu>        
        </>
    );
};

export default NavBar;