import styled from 'styled-components'

export const VisualWrap = styled.section`
    width:100%; height:600px; position:relative ; overflow:hidden ;
    display:flex;
    align-items:center;
    justify-content:center;
    
    @media all and (max-width:478px) {
        width:100%; height:400px;
       
    }
`

export const MainWrap = styled.div`
    
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700 }

    @media all and (max-width:478px) {
        .img{
            img{width: 300px;}
        }
    }
`