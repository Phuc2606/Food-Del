import React from 'react'
import './Footer.css'
import logo from '../../assets/frontend_assets/logo.png'
import facebook_icon from '../../assets/frontend_assets/facebook_icon.png'
import twitter_icon from '../../assets/frontend_assets/twitter_icon.png'
import linkedin_icon from '../../assets/frontend_assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="footer-social-icons">
                    <img src={facebook_icon} alt="" />
                    <img src={twitter_icon} alt="" />
                    <img src={linkedin_icon} alt="" />
                    
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+84-848-943-999</li>
                    <li>phuc26062005@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copy right 2024 phuc26062005@gmail.com - All Right Reserveds</p>
    </div>
  )
}

export default Footer
