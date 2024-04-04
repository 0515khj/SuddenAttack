import { useDispatch, useSelector } from "react-redux";
import { cartsEdit, deletselection, removeCart, undeletselection ,} from "../../store/modules/cartSlice";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";



 
const CartItem = ({item}) => {
  const{id , image , title , price}=item

  const dispatch = useDispatch();
  const [cnt , setCnt]=useState(1)
  let [ischk, setIschk] = useState(false)
  
  

 

  const plus = e =>{
    setCnt(cnt+1)
  }
  const minus = () =>{
    if(cnt === 0) return 
    setCnt(cnt-1)
  }

  let countEdit = () => {
    dispatch(cartsEdit({id,cnt}))
  }

  const checkboxclick = e =>{
    setIschk(e.target.checked);
    if(e.target.checked){
      dispatch(deletselection(id))
    }else{
      dispatch(undeletselection(id));
    }
  }

  useEffect(()=>{
    if(!ischk ){
      countEdit()}
  },[cnt , !ischk])

 
    return (
      <article>   
          <input type="checkbox" checked={ischk} onChange={checkboxclick}/>       
          <img src={image}  alt={title} />

          <div>
            <h3>
              {title}
            </h3>
              <p className="amount">   {/* 수량  */}
              <button onClick={minus}> <FiMinus/> </button>
                            {cnt}
              <button onClick={plus}> <GoPlus /> </button>
              </p>
              <p className="discount">x</p> {/* 할인 */}
              <p className="delivery">무료</p>{/* 배송비 */}


            <span className="sum"> {price} </span>  {/* 합계 */}
          </div>
          <button className="del" onClick={()=>dispatch(removeCart(id))} > 삭제 </button>   
        </article>
    );
};

export default CartItem;