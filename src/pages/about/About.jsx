import { AboutWrap } from "./AboutStyle";
import aboutdata from '../../assets/api/aboutdata'
import { useState } from "react";
import AboutList from "./AboutList";


const About = () => {

    const [data , setData]=useState(aboutdata)




    return (
        <AboutWrap>
            <div className="inner">
                    <h2 style={{fontSize:'50px', color:'#757575'}}>SA 클랜</h2>
                <AboutList data={data}/>
             </div>
        </AboutWrap>
    );
};

export default About;