import { Link } from 'react-router-dom';
import FacebookIcon from '../../assets/FacebookIcon.svg'
import GmailIcon from '../../assets/GmailIcon.svg'
import './signIn.css';



const Signin = () => {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <div className='other-options'>
        <Link to={'/'}>
          <img src={FacebookIcon} alt="Facebook logo" />
        </Link>
        <Link to={'/'}>
          <img src={GmailIcon} alt="Gmail logo" />
        </Link>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
        <Link to={'/'}>
          <button type="submit">Sign In</button>
        </Link>
      </form>
      <Link to={'/signup'}>
        <p style={{marginTop:'10px'}}>Don't have account? Sign up</p>
      </Link>
    </div>
  );
};

export default Signin;
