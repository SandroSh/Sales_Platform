import { Link } from 'react-router-dom';
import ProfileImage from '../../assets/profileImage.jpg'
import SignOutIcon from '../../assets/SignOutIcon.svg'
import GeorgianFlag from '../../assets/FlagOfGeorgia.svg'
import BritainFlag from '../../assets/FlagOfGreatBritian.svg'
import './navbar.css';
import { useState } from 'react';
import CartIcon from '../../assets/CartIcon.svg'
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import GoToIcon from '../../assets/newWindow.svg';
const Navbar = () => {
  const [langBool, setLangBool] = useState<boolean>(true);

  const cartItemsQuantity = useSelector((state: RootState) => state.cartCounter.value)
  const items = useSelector((state: RootState) => state.cartCounter.items)

  return (
    <nav className="navbar navbar-top">
      <div className='text-wrapper'>
        <Link to={'/'} className="navbar-logo">
          <div >BRYuer</div>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', }}>
          <ul className="navbar-links">

            <Link to={'/profile'}>
              <li>profile</li>
            </Link>
            <Link to={'/contact'}>
              <li>Contact</li>
            </Link>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <img src={ProfileImage} alt="Profile Image" style={{ width: '50px', aspectRatio: '1', borderRadius: '50%' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <div style={{ marginLeft: '10px', color: 'white' }}>Rebeca James</div>
              <a href="https://www.kiu.edu.ge/">
                <img src={GoToIcon} alt="new window icon" style={{width:'18px', aspectRatio:'1', marginLeft:'8px'}} />
              </a>

            </div>
          </div>

          <div className='language-signOut-cont'>
            <div className='cart-container'>
              <img src={CartIcon} alt="Cart Icon" />
              <div style={cartItemsQuantity === 0 ? { display: 'none' } : {}} ><p>{cartItemsQuantity}</p></div>
            </div>
            <img src={langBool ? GeorgianFlag : BritainFlag} alt="Georgian/Britain Flag" onClick={() => setLangBool(!langBool)} style={{ width: '40px', aspectRatio: '1', cursor: 'pointer' }} />
            <Link to={'/signin'}>
              <img src={SignOutIcon} alt="Sign Out Icon" style={{ width: '30px', marginLeft: '20px' }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
