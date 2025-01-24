import { CartEmptyWrap } from "./CartStyle";


const CartEmpty = () => {
    return (
        <CartEmptyWrap>
            <div className="inner">
            <h2>등록된 상품이 없습니다.</h2>
            </div>
        </CartEmptyWrap>
    );
};

export default CartEmpty;