import styled from "styled-components";

export const CartListWrap = styled.div`
position: relative;
.cart-list {  width: 100%;  }
.cart-list article { display: flex; border: 1px solid #fff; align-items: center; justify-content: space-between; margin-bottom: 15px; padding: 10px; font-size: 20px; width: 100%; }
.cart-list article img { width: 120px; }
.cart-list article div { display: flex; width: 60%;}
.cart-list article div h3 {margin-right: 30px; width:130px; }
.cart-list .del { width:90px; height:50px;}
.bottom { margin-top: 50px; font-size: 20px;  position:absolute; right:0;
    
}
article {
    .amount{ width:120px;
         margin-left:90px;                          //수량
        button{ background: none;
                border:none;
             width:50px;}}
    .discount {
        margin-left:80px ;
    }
    .delivery { margin-left: 135px;}
    .sum { margin-left:120px;}
}

.ft { 
    button{
        margin-top: 20px;
        width:150px; height:50px; 
        border: 1px solid #dcdcdc;
        margin-right:10px; ;
        background: none;
        border-radius:10px;
        &:hover{background: #37474F; color:#fff}
    }
}



.topck {
    margin-left:10px ;
    display:flex;
    flex-wrap:wrap;
    padding-bottom:20px;
    border-bottom: 1px solid #999;
    
    p{font-size:19px;}
    .ck1{margin-left:330px;}    //상품정보
    .ck2{margin-left:230px;}    //수량
    .ck3{margin-left:110px;}    //할인
    .ck4{margin-left:120px;}    //배송비
    .ck5{margin-left:110px;}    //합계
    .ck6{margin-left:190px;}    //선택
}

@media (max-width:479px){
    width:100%;
    .cart-list article { 
        flex-direction: column; 
        align-items: flex-start;
        font-size: 16px; 
    }
    
    .cart-list article img { width: 100px; }
    
    .cart-list article div { 
        width: 100%; 
        flex-direction: column;
    }
    
    .cart-list article div h3 { 
        margin-right: 0; 
        width: 100%; 
        margin-bottom: 10px;
    }
    
    .cart-list .del { 
        width: 80px; 
        height: 40px;
    }
    
    .bottom { 
        width:50%;
        margin-top: 20px; 
        font-size: 16px; 
        position: static;
        text-align: center;
    }
    
    article {
        .amount { 
            width: 100%; 
            margin-left: 0; 
            margin-top: 10px;
        }
        
        .discount {
            margin-left: 0;
            margin-top: 10px;
        }
        
        .delivery { 
            margin-left: 0;
            margin-top: 10px;
        }
        
        .sum { 
            margin-left: 0;
            margin-top: 10px;
        }
    }
    
    .ft { 
        button {
            width: 100px; 
            height: 40px; 
            margin-top: 10px;
        }
    }

    .topck {
        margin-left: 0;
        flex-direction: column;
        padding-bottom: 10px;
        
        .ck1, .ck2, .ck3, .ck4, .ck5, .ck6 {
            margin-left: 0;
            margin-top: 10px;
        }
        
        p { 
            font-size: 16px; 
        }
    }
}
`

export const CartEmptyWrap = styled.div`

   
`