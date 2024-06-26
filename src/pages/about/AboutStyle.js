import styled from 'styled-components'

export const AboutWrap = styled.div` 
        background: #E0E0E0;
    .inner { padding:100px 0;}
    h2 { font-size:30px; font-weight:700;  margin-bottom:50px }


    @media all and (max-width:478px) {
        .inner { padding:0px;}
            h2 {display:flex; justify-content:center; margin-bottom:50px ;padding-top:50px;}

    }
`

export const AboutListWrap=styled.div`
    ul{display:flex;
        background: #E0E0E0;
        flex-wrap:wrap;
        justify-content:space-between; 
    }

    @media (max-width:478px) {
    }

`
export const AboutItemWrap =styled.div`
li {width:450px;   margin-top: 25px; justify-content:space-between; background: #fff; display:flex; }
    .inner { height:300px;
         border: 1px solid #000;
        .inner2 {
            display:flex; 

        .pic { margin:0px 15px ;  
            img{
                padding-top: 10px;
            }
        }
        .info {font-size:20px;
            p{font-weight:600;}
            span{color:#999; }
        }
        }
        .innertxt{  border-top: 1px solid #999; margin-top: 20px; 
           em{  display:block; text-align:center; line-height:3;
                padding: 20px;
            margin-left: 15px; font-size:20px;
           }
        }
        .heart { background: none; font-size:30px; position:absolute;right:10px; top:10px;}
    }

    @media (max-width:479px) {
        width:100%;
        li {
            width:100%}
    .inner { height:220px;
    }

    }

`