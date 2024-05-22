import styled from 'styled-components'

export const NoticeWrap = styled.div` 
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700; margin-bottom:50px }

    @media (max-width:479px) {
        h2 { display:flex; justify-content:center;
            margin-bottom:100px;}
}
`