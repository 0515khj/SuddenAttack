 
import './Cart.css'
import CartList from '../../components/cart/CartList';
import { useSelector } from 'react-redux';
import CartEmpty from '../../components/cart/CartEmpty';
 

const Cart = () => {  
    const {carts} = useSelector(state => state.cart)

   
    return (
        <div className="cart-box">
           <div className="inner">
            {
                carts.length > 0 ? <CartList/> : <CartEmpty/>
            }
             
           </div>
        </div>
    );
};

export default Cart;