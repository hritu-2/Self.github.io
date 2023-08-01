import React from 'react'
import './footer.css'
import ContactUs from './ContactUs';
const Footer = () => {
  return (
    <div className='main'>
    <div className='footer-body'>
        <table>
            <tr>
            <td>
                <h2>Help</h2>
                <ul>
                    <li>T&C</li>
                    <li>Privacy Policy.</li>
                    <li>Refunds & Return Policy</li>
                    <li>FAQs</li>
                </ul>
            </td>
            <td>
                <h2>Information</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    </ul>
                    </td>
            <td style={{paddingTop:'20px'}}>
                <h2>Write To Us</h2>
                <ContactUs/>
                </td>
            </tr>
            <tr>
            
            </tr>
        </table>
        <br/>
    </div>
    <hr/>
    <p style={{textAlign:'center'}}>
    ©{new Date().getFullYear()} SECOND HOME INC | All rights reserved | Terms of Service | Privacy
    </p><br/>
</div>
  )
}

export default Footer