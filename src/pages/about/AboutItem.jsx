import { useState } from "react";
import { AboutItemWrap } from "./AboutStyle";
import { FaHeart } from "react-icons/fa6";


const AboutItem = ({item}) => {

    const [on , setOn] =useState(false)

    const toggle =()=>{
        setOn(!on)
    }
    const {name , per , win , rank , text,img}=item
    return (
        <AboutItemWrap>
            <li>
                <div className="inner">

                <div className="inner2">
                  <div className="pic">
                <img src={img} alt="" />
                  </div>

                  <div className="info">
                <p>{name}</p>
                <p><span>클랜원</span>{per}<span>명 승률</span> {win}% {rank}<span>위</span></p>
                  </div>

                      <button className="heart" onClick={toggle} style={{color : on ? "red":""  }}><FaHeart /></button>
                </div>
                
                <p className="innertxt">
                    <em>{text}</em>
                    </p>
                </div>
            </li>
        </AboutItemWrap>
    );
};

export default AboutItem;