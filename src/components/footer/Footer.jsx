import React from 'react'
import Logo from "../../assets/currease logo.png";
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo-footer">
                <img src={Logo} alt=""/>
            </div>

            <div className="footer-bottom">
                <h6>Customer Support</h6>
                <h4>+1 65695 545 65</h4>
                <h4>support@cantaricop.com</h4>
                <ul className="menu-footer">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Shop</li>
                </ul>
                <div className="social-media">
                    <h6>© 2023 Cantari Corp.</h6>
                    
                    <span>
                        <h6>Terms of Service</h6>
                        <h6>Privacy policy</h6>
                    </span>
                    <ul className="social-media-icons">
                        <li><i className="fa-brands fa-facebook"></i></li>
                       
                        <li><i className="fa-brands fa-linkedin"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Footer