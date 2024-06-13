import { Link } from 'react-router-dom';
import ProfileImage from '../../assets/profileImage.jpg'
import SignOutIcon from '../../assets/SignOutIcon.svg'
import GeorgianFlag from '../../assets/FlagOfGeorgia.svg'
import BritainFlag from '../../assets/FlagOfGreatBritian.svg'
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [langBool, setLangBool] = useState<boolean>(true);
  return (
    <nav className="navbar navbar-top">
      <div className='text-wrapper'>
        <div className="navbar-logo">BRYuer</div>
        <div style={{ display: 'flex', alignItems: 'center', }}>
          <ul className="navbar-links">
            <Link to={'/'}>
              <li>Home</li>
            </Link>
            <Link to={'/profile'}>
              <li>profile</li>
            </Link>
            <Link to={'/contact'}>
              <li>Contact</li>
            </Link>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <img src={ProfileImage} alt="Profile Image" style={{ width: '50px', aspectRatio: '1', borderRadius: '50%' }} />
            <div style={{ marginLeft: '10px', color: 'white' }}>Rebeca James</div>
          </div>
          <div className='language-signOut-cont'>
            <img src={langBool ? GeorgianFlag : BritainFlag} alt="Georgian/Britain Flag" onClick={() => setLangBool(!langBool)} style={{ width: '40px', aspectRatio: '1', cursor: 'pointer' }} />
            <Link to={'/signup'}>
              <img src={SignOutIcon} alt="Sign Out Icon" style={{ width: '30px', marginLeft: '20px' }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
