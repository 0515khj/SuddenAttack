import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart, removeCart } from "../../store/modules/cartSlice";

const ProductItem = ({item}) => {
    const {id , image , title,description,price} = item

    const {carts} = useSelector(state => state.cart)

    const dispatch = useDispatch()
    
    return (
        <article>
             <div>
                <img src={image} alt={title}  />
             </div>
             <h3> {title} </h3>
             <h4> {description} </h4>
             <p> 
                {
                    carts.find(x => x.id === id) ?
                    <button onClick={()=>dispatch(removeCart(item.id))} className="off"> 취소 하기 </button>
                    :
                    <button onClick={()=>dispatch(addCart(item))}> 상품 담기 </button>

                }
                
                <span> {price} 원</span>
             </p>
        </article>
    );
};

export default ProductItem;