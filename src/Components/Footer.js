// Footer.js
import { Link } from 'react-router-dom';
// Footer.js
import React from 'react';
import './Footer.css';
import { Button } from './Button';
import Popup from 'reactjs-popup';
import ContactUsPopup from './ContactUsPopup';

function Footer({ openContactUsPopup }) {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>BookMyShow</p>
        <p className='footer-subscription-text'>
          Buy Tickets at a Reasonable Price
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Popup
              trigger={<button onClick={openContactUsPopup}>Contact</button>}
              modal
              nested
            >
              {(close) => <ContactUsPopup handleClose={close} />}
            </Popup>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              BookMyShow
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>BookMyShow © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
