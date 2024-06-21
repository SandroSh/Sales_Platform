import { Link } from 'react-router-dom'
import './contact.css'
import FacebookIcon from '../../assets/FacebookIcon.svg'
import GmailIcon from '../../assets/GmailIcon.svg'


const Contact = () => {
  return (
    <div className="contact-container">
    <h2>Contact Us</h2>
    <form >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
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
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
        />
      </div>
      <Link to='/'>
      <button type="submit">Submit</button>
      </Link>
    
    </form>

    <div style={{margin:'5px 0'}}>
      <h3 style={{margin:'10px 0'}}>Subscribe newsletter</h3>
      <input type="text" placeholder='enter your mail' />
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', marginTop:'20px'}}>
        <button style={{width:'40%'}}>Subscribe</button>
        <img src={FacebookIcon} alt="facebook icon"style={{width:'40px'}} />
        <img src={GmailIcon} alt="gmail icon" style={{width:'40px'}}/>
      </div>
    </div>

  </div>

  )
}

export default Contact