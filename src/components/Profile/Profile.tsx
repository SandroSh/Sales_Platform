import { useSelector } from 'react-redux';
import './profile.css';
import { RootState } from '../../state/store';
import Navbar from '../Navbar/Navbar';
import CartProduct from '../CartProduct/CartProduct';


const Profile = () => {

  const selectedProducts = useSelector((state: RootState) => state.cartCounter.items);
  const itemsQuantity = useSelector((state: RootState) => state.cartCounter.value);

  return (
    <>
      <Navbar />
      <div className='selected-items-container'>
        <div>
          <div className='main-info'>
            <h1>You Have {selectedProducts?.length ? itemsQuantity : '0'} items in your cart</h1>
            <h1>Total : {selectedProducts?.length ? selectedProducts?.reduce((acc, currentValue) => currentValue.product.price * currentValue.quantity + acc, 0).toFixed(2) : 0}$</h1>
          </div>
          <div className='products-container'>
              {
                selectedProducts?.map((product, index) => (
                    <CartProduct item={product} key={index} />
                ))
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile