
import { ProductType } from '../../constants/data';
import './product.css';

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <div className='product-info'>
        <p className="product-price" style={!product.isInSale ? {margin:'10px auto 0 auto'}:{}}>${product.price.toFixed(2)}</p>
        {product.isInSale && <span className="product-sale">Sale</span>}
      </div>
      <button className='add-cart-button' style={!product.isInSale ? {marginTop:'28px'}:{}}>Add to Cart</button>
    </div>
  );
};

export default Product;
