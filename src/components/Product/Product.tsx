import { useDispatch } from 'react-redux';
import { ProductType } from '../../constants/data';
import './product.css';
import { addItem, increment } from '../../state/product/productSlice';


const Product = ({ product }: { product: ProductType }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
    dispatch(addItem(product))
  }

  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <div className='product-info'>
        <p className="product-price" style={!product.isInSale ? { margin: '10px auto 0 auto' } : {}}>${product.price.toFixed(2)}</p>
        {product.isInSale && <span className="product-sale" style={!product.inStock ? { backgroundColor: 'goldenrod' } : {}} >{product.inStock ? 'In Sale' : 'Not In Stock'}</span>}
      </div>
      <button className='add-cart-button' style={!product.isInSale ? { marginTop: '28px' } : !product.inStock ? { backgroundColor: 'gray', cursor: 'initial' } : {}} onClick={handleClick} disabled={!product.inStock ? true : false}>Add to Cart</button>
    </div>
  );
};

export default Product;
