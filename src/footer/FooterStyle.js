import styled from 'styled-components'
 
export const FooterWrap = styled.footer`
     font-size:13px;
    margin-top: 20px;
    /* h2 { padding-top:80px; font-size:20px; color:#fff } */
    .inner { 
        p{margin-right:10px;}
    
        .innertop {display:flex;
        
        li{margin-right:15px;
            font-size:18px;
            cursor: pointer;
            position: relative;
            &:hover{ border-bottom: 1px solid #000;}
        }
        li::after{
            content:'';
            display:block;
            width:1px;
            height:15px;
            background: #e5e5e5;
            position:absolute; top:30%; left: 108%;
            transform:translate(-30%,);
        }
        li:last-of-type::after { background: none;}
    }

    .innermiddle {
        display:flex;
        color:#999;
        margin-top: 5px;
    }
    .innerbottom {
        margin:5px 0;
        color:#999;
        display:flex;
        .bottomp{ border-bottom: 1px solid #999; cursor: pointer; font-weight:600;}
    }
    .innerimg{
        margin-top:15px;
        margin-bottom:20px;
    }

    }

    @media (max-width:478px) {
        font-size:8px;
        height:150px;
        .inner { 
        p{margin-right:5px;}
    
        .innertop {display:flex;
            width:390px;
        
        li{
            margin-right:10px;
            font-size:9px;
            cursor: pointer;
            position: relative;
            &:hover{ border-bottom: 1px solid #000;}
        }
        li::after{
            content:'';
            display:block;
            width:1px;
            height:30px;
            background: #e5e5e5;
            position:absolute; top:10%; left: 108%;
            transform:translate(-30%,);
        }
        li:last-of-type::after { background: none;}
    }

    .innermiddle {
        display:flex;
        color:#999;
        margin-top: 5px;
    }
    .innerbottom {
        width:390px;
        margin:5px 0;
        color:#999;
        display:flex;
        .bottomp{ border-bottom: 1px solid #999; 
            cursor: pointer; font-weight:600;}
    }
    .innerimg{
        img{
            width:70px;
        }
        margin-top:15px;
        margin-bottom:20px;
    }

    }
    }
`