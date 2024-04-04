import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartFooter = () => {



    const navigate=useNavigate();
    const {carts , cartTotal} = useSelector(state => state.cart)


    return (
        <div>
            <div className="bottom">

            <p><strong>상품구매금액 {cartTotal} + 배송비 O (무료) = 합계 : <span style={{color:"goldenrod"}}>{cartTotal}</span> </strong></p>

        </div>

            <div className="ft">
<button onClick={()=>navigate(`/product`)} >쇼핑하러가기</button>
<button onClick={navigate} >선택상품 삭제</button>
<button onClick={()=>navigate(`/product`)} >장바구니 비우기</button>
</div>
        </div>
    );
};

export default CartFooter;