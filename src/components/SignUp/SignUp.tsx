import { Link } from 'react-router-dom'
import FacebookIcon from '../../assets/FacebookIcon.svg'
import GmailIcon from '../../assets/GmailIcon.svg'
import './signUp.css'

const SignUp = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className='other-options'>
        <Link to={'/'}>
          <img src={FacebookIcon} alt="Facebook logo" />
        </Link>
        <Link to={'/'}>
          <img src={GmailIcon} alt="Gmail logo" />
        </Link>
      </div>
      <form >
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
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
          <button type="submit">Sign Up</button>
        </Link>
        <Link to={'/signin'}>
          <p style={{marginTop:'10px'}}>Already have an account?, Click Here</p>
        </Link>
      </form>
    </div>
  )
}

export default SignUp