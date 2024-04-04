import { useSelector } from 'react-redux';

const ProductList = () => {
    const {products} = useSelector(state => state.cart)
    return (
        <div>
            {
                products.map(item=> item.id)
            }
            
        </div>
    );
};

export default ProductList;