import styled from "styled-components"

export const ProductSearchWrap = styled.div`
margin-bottom:30px; position:relative;
 form {
    display: flex;
    justify-content: space-between;
    p {        
        input[type=text] { width:350px; box-sizing:border-box; height:45px; padding:10px; border:1px solid #999; }
        button { width:100px; height:45px; vertical-align:top; }
        select { width:200px; height:45px; box-sizing:border-box; padding:10px;  border:1px solid #999; }
        span { margin-left:15px; cursor: pointer;}
    }
 }

 @media (max-width:478px) {
    width:390px;
    form {
    display: flex;
    justify-content: space-between;
    p {        
        input[type=text] { width:150px; box-sizing:border-box; 
            height:45px; padding:10px; border:1px solid #999; }
        button { width:50px; height:45px; vertical-align:top; }
        select { width:100px; height:45px; 
            box-sizing:border-box; padding:10px;  
            border:1px solid #999;
            option{
                font-size:15px;
            }
        }
        span { margin-left:15px; cursor: pointer; font-size:15px;}
    }
 }

 }
`