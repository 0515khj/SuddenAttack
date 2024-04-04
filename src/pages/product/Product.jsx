import { useSelector } from 'react-redux';
import ProductItem from '../../components/product/ProductItem';
import ProductSearch from '../../components/product/ProductSearch';
import { ProductWrap } from './CartStyle';
import { Pagination } from '@mui/material';


const Product = () => {
  const {products}= useSelector(state=>state.cart)
    return (
      <ProductWrap>
        <div className="inner">
        <h2> 플리마켓 </h2>

        <ProductSearch/>
        
        <div className="cart-box">
          {
            products.map(item=> <ProductItem key={item.id} item={item}/>)
          }
        </div>
        </div>
        <Pagination/>
      </ProductWrap>
    );
};

export default Product;