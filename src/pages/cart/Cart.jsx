 
import './Cart.css'
import CartList from '../../components/cart/CartList';
import { useSelector } from 'react-redux';
import CartEmpty from '../../components/cart/CartEmpty';
import { CartWrap } from './Cart1';
 

const Cart = () => {  
    const {carts} = useSelector(state => state.cart)

   
    return (
        <CartWrap>
        {/* <div className="cart-box"> */}
           <div className="inner">
            {
                carts.length > 0 ? <CartList/> : <CartEmpty/>
            }
             
           </div>
        {/* </div> */}
            </CartWrap>
    );
};

export default Cart;