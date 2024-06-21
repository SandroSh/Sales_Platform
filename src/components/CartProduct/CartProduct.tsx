import './cartProduct.css'
import { ItemType } from '../../state/product/productSlice'




const CartProduct = ({ item }: { item: ItemType }) => {
  let product = item.product;
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <div className='product-info'>
        <p className="product-price" style={!product.isInSale ? { margin: '10px auto 0 auto' } : {}}>${product.price.toFixed(2)}</p>
        {product.isInSale && <span className="product-sale" style={!product.inStock ? { backgroundColor: 'goldenrod' } : {}} >{product.inStock ? 'In Sale' : 'Not In Stock'}</span>}
      </div>
      <div className='product-info' style={!product.isInSale ? { margin: '18px 0' } : {}}>
        <p>Quantity:{item.quantity}</p>
        <p>Total:{(product.price * item.quantity).toFixed(2)}$</p>
      </div>
    </div>
  )
}

export default CartProduct