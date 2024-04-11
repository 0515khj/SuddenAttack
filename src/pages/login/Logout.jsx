import { useNavigate } from "react-router-dom";
import { LogoutWrap } from "./LoginStyle";
import { useDispatch, useSelector } from "react-redux"; 
import { logout } from "../../store/modules/authSlice";

const Logout = () => {
    const { authed , user } = useSelector(state  => state.auth )
     
    const navigate  = useNavigate()
    const dispatch  = useDispatch()

    const onGo = ()  => {
        dispatch( logout() ) 
        navigate(`/login`)
    }

    return (
        <LogoutWrap>
             <div className="inner">
                {
                    authed && user ? 
                    <>
                    <h2>방문해 주셔서 감사합니다.</h2>
                    <h3><span> { user.username }님</span> </h3>
                     
                    <p> <button onClick={ onGo }>로그아웃</button> </p>
                </> :
                <>
                    <h2> 로그인 정보를 찾을수 없습니다. </h2>
                </>
                }
                    
            </div>
        </LogoutWrap>
    );
};

export default Logout;