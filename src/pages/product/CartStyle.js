import styled from 'styled-components'

export const ProductWrap = styled.div` 
    .inner { padding:100px 0 }
    h2 {  margin-bottom:50px; font-weight:700; }

    .cart-box { display: flex; justify-content: space-between; flex-wrap: wrap;  
        article { width: 23%; border: 1px solid #999; padding: 20px; 
            box-sizing: border-box; margin-bottom: 30px; text-align: center; 
            div {margin-bottom: 25px; }
            img { width: 100%;  height:170px; }
            h3 {font-size: 16px; margin-bottom: 10px;}
            h4 {font-size: 20px; line-height: 1.3; font-weight: 300;margin-bottom: 20px; }
            p { width: 90%; margin: auto; display: flex; justify-content: space-between; align-items: center; margin-top: 10px;
                button { background: #333; padding: 8px 45px; vertical-align: middle; color:#fff;
                &.off { background: tomato; padding: 8px 45px; vertical-align: middle;  }
                span { font-size: 18px; }
                }
            }
        }
    }

    @media (max-width:479px) {
    h2 {  display:flex;
        justify-content:center; margin-bottom:100px; }
    .cart-box { display: block;flex-wrap: wrap;  
        article { width: 100%; margin-left:0px;
            img { width: 80%;  height:150px; }
        }
    }
    }

`