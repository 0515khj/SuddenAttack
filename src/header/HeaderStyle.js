import styled from 'styled-components'

export const HeaderWrap = styled.header`
background:#000;
    .inner { height:120px; }
    h1 {
        position:absolute; left:0; top:50%; transform: translateY(-50%); 
        img{ background-color:#000; }
        a {
            img {
                width:180px;
            }
        }      
    }
    .login {
      position: absolute; right: 150px; top: 10px;
      color:blue;
    }
    @media all and (max-width:479px) {
        .inner { height:80px; }
        h1{
        a{
            img{width: 100px;}
        }
        }
    }
`


export const NavWrap = styled.nav`
    position: relative;
    .go { width:100px; height:50px; text-align:center; 
        line-height:2.5; border-radius:10px; color:#fff; 
        font-size:18px; cursor: pointer; transition:0.3s;
        position:absolute; right:-160px; top:-10px;
        border: 1px solid #fff;
        &:hover{color:tomato;}
    }

   &.nav{ 
    position: absolute; right:0;  top:50% ; transform: translateY(-50%); 
    ul{
        display: flex;
        li {
            margin-left:100px; position:relative ;
            a {
                color:#fff;

                font-size:18px; font-weight: 500;
                transition:0.3s;
                &:hover {
                    color:tomato;
                }
            }
            &:last-child span{ 
                font-size:16px;
                border-radius:50% ;               
                display: block;
                position:absolute ;
                right:-20px; top:-5px; 
                width:20px; height:20px; 
                background-color:#fff ; color:#000;
                text-align:center; line-height:20px ;
            }
        }
    }
}
@media all and (max-width:478px) {
    .go{ position:absolute; right:-15px; top:-35px; width:50px; height:25px;
        font-size:10px;
    }
    &.nav{position:absolute; right:8% ;top:70%;
        ul{
            li{
                margin-left: 10px;
                a{
                    font-size:10px;
                }
            }
        }
    }
    }
`


export const TopMenu  = styled.ul`
    &.top-menu {
        position: absolute; right:0;  top:10px;
        display: flex;
        li {
            margin-left:25px;
            a {
                color:#fff;
                font-size:15px; 
                transition:0.4s;  
                &:hover {color:tomato;}             
            }
        }
    }
    @media all and (max-width:478px) {
    &.top-menu {
        position:absolute; right:14%;
        li{
            a{
                font-size:10px;
            }
        }
    }
    }

`