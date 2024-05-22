import styled from 'styled-components'

export const NoticeWrap = styled.div` 
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700; margin-bottom:50px }

    @media (max-width:478px) {
        h2 { display:flex; text-align:center; margin-left: 125px;
            font-size:30px; }
}
`