import { useDispatch } from "react-redux";
import { ProductSearchWrap } from "./ProductStyle";
import { resetCart, searchCart, sortCart } from "../../store/modules/cartSlice";
import { useEffect, useRef, useState } from "react";

const ProductSearch = () => {
    const dispatch = useDispatch()
    const textRef = useRef()

    
    const onSort = (e) =>{
        e.preventDefault()
        const {value} = e.target
        dispatch(sortCart(value)) //
    }
    
    const [text , setText]=useState('')
    const cp = e => {
            const {value} = e.target
            setText(value)

    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return
        dispatch(searchCart(text)) //
        textRef.current.focus()
    }

    useEffect(()=>{
        dispatch(searchCart('')) //
    },[])

    return (
            <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                <select onChange={onSort}>
                    <option>= 정렬 =</option>
                    <option value="title">제품명</option>
                    <option value="price">가격순</option>
                    <option value="category">카테고리</option>
                </select>
                    <span onClick={()=>dispatch(resetCart())}>초기화</span>
                </p>

                    <p>
                    <input type="text" name="text" value={text} onChange={cp} ref={textRef}/>
                    <button type="submit">검색</button>
                    </p>
                </form>
            </ProductSearchWrap>
    );
};

export default ProductSearch;