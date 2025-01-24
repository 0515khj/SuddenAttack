import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CartListWrap } from "./CartStyle";
import { useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import { allresetCart, removeselection, totalCart } from "../../store/modules/cartSlice";

const CartList = () => {
   const {carts,cartTotal} = useSelector(state => state.cart)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   
    useEffect(()=>{
        dispatch(totalCart())
    },[carts , dispatch])

    

    const out = () => {
        dispatch(allresetCart())
      };

    const Delselction = () =>{
        dispatch(removeselection());
    }


    return (
        <CartListWrap>
            <div className="inner">
            <h2>C A R T</h2>
            
            <div className="topck">
            <input type="checkbox" name="" id="" />
             <p className="ck1">상품정보</p>
             <p className="ck2">수량</p>
             <p className="ck3">할인</p>
             <p className="ck4">배송비</p>
             <p className="ck5">합계</p>
             <p className="ck6">선택</p>
            </div>

            <div className="cart-list">
                {carts.map(item=><CartItem key={item.id} item={item}/>)}
            </div>

            <div className="bottom">

                <p><strong>상품구매금액 {cartTotal.toLocaleString()} + 배송비 O (무료) = 합계 : <span style={{color:"goldenrod"}}>{cartTotal.toLocaleString()}</span> </strong></p>
            
            </div>

            <div className="ft">
            <button onClick={()=>navigate(`/product`)} >쇼핑하러가기</button>
            <button onClick={Delselction} >선택상품 삭제</button>
            <button onClick={out} >장바구니 비우기</button>
            </div>
            </div>
        </CartListWrap>
    );
};

export default CartList;