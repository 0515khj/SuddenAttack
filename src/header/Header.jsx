
import {  Link  } from "react-router-dom";
import NavBar from "./NavBar"; 
import { HeaderWrap } from "./HeaderStyle";

const Header = () => {
     
    return (
        <HeaderWrap>

            <div className="inner">
                <h1><Link to={"/"}><img src="https://img.sa.nexon.com/assets/common/navigation/logo.png" alt=""/></Link></h1>
                <NavBar />
            </div>

        </HeaderWrap>
    );
};

export default Header;