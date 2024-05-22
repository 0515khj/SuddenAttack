import styled from 'styled-components'

export const NoticeListWrap  = styled.div` 
    
.noticeTable { width: 100%; 
    caption { position:absolute; left:0; top:0; text-indent:-9999px}
    .num { width: 10%; }
    .title { width: auto; }
    .date { width: 15%; }
    
    th,  td{ height: 45px; vertical-align: middle; 
        border: 1px solid #999; }
    th { border-bottom: none; font-weight: 700;  }  

    td{ text-align: center;
        &:nth-child(2){ text-align: left; padding-left: 20px; } 
    }  
    p{
        width:100%;
    }

} 

@media (max-width:479px) {
  width:98%;
    th,  td{ font-size:10px;}
}

`

export const NoticeDetailWrap = styled.div` 
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700; margin-bottom:50px }

    .con {  font-size: 20px; line-height: 1.7; border-top:1px solid #999 ;
        border-bottom:1px solid #999 ; position:relative;
             margin-bottom: 20px;  
       h3 {
        font-size: 20px; font-weight: 500 ; padding-bottom: 15px;  border-bottom:1px solid #dcdcdc ; margin-bottom: 15px ;
        background: #999; border-top:2px solid #000; 
    }
       .txt {
        font-size:18px; margin-bottom: 15px;
        height:300px;
        white-space:pre-line;
       }
       .date { font-size: 16px; position:absolute; right:100px; }
       .good { position:absolute;right:0 ; font-size:16px;}
       span{color:#999}
       .nd { border-bottom:1px solid #dcdcdc; margin-bottom: 20px; padding: 20px 0; 
    display:flex; position: relative; 
        /* &::after {
            content:'';
            display:block;
            width:1px;
            height:10px;
            background: #000;
            position:absolute; right:0;
        } */
}
    }
    button {  width: 200px; height: 50px; background: #000; color:#fff; cursor: pointer; border:none ; }


    @media (max-width:479px) {
        width:100%;
        .inner { padding:0;}
    h2 {margin:100px 0 100px; }

    .con {  
            width:96%;
        font-size: 15px; 
       h3 {
        width:100%;
        font-size: 15px;  padding-bottom : 15px; padding-left: 15px;
        
    }
       .txt {
        font-size:15px; 
       }
    }
    button {  width: 100px; }


    }
`