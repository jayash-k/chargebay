import React from 'react'
import "./Footer.css"

import logo from "../Images/Logo White.png"
import fb from "../Images/fb logo.png"
import twiter from "../Images/x logo.png"
import linkedin from "../Images/in logo.png"
import yt from "../Images/yt logo.png"

function Footer() {
    const email1 = "Manan@chargebay.app";
    const email2 = "operations@chargebay.app";

    const handleEmailClick = (email) => (e) => {
        e.preventDefault(); // Prevent the default link behavior
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
    };
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={logo} alt="ChargeBay Logo" className="logo-img" />
                        </div>
                        <span className="address" >3702 Spectrum Blvd. Ste. 165<br />Tampa, FL 33612, USA</span>
                        <span className="email" style={{marginTop : '.8rem'}}><br />
                        <div style={{marginRight: '.5rem'}}>Contact :</div>
                            <div >
                                <a href='/contact-us' style={{textDecoration : 'none'}}>+1 (757)-524-2743</a>
                            </div>
                        </span>
                        <span className="email"><br />
                        <div style={{marginRight: '1.5rem'}}>Email:</div>
                            <div >
                                <li><a href={`mailto:${email1}`} onClick={handleEmailClick}>{email1}</a></li>
                                <li><a href={`mailto:${email2}`} onClick={handleEmailClick}>{email2}</a></li>
                            </div>
                        </span>
                    </div>
                    <div className="footer-middle">
                        <div className="footer-links">
                            <ul>
                                <li><a href="/Q&A#driversQA">Drivers</a></li>
                                <li><a href="/Q&A#hostQA">Hosts</a></li>
                                <li><a href="/reseller">The Company</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <ul>
                                <li><a href="/reseller">Host a Station</a></li>
                                <li><a href="/products">Our Solution</a></li>
                                <li><a href="/reseller">Our Partners</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right">
                        <span className="host-text">Are you a host?<br /></span>
                        <button className="learn-more login-button"><span>Log in</span></button>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-bottom">
                    <div className="legal-links">
                        <a href="#">Terms of Service</a>
                        <span className="separator">|</span>
                        <a href="#">Security</a>
                        <span className="separator">|</span>
                        <a href="#">Privacy Policy</a>
                        <span className="separator">|</span>
                        <span className="copyright">© 2012 All Rights Reserved.</span>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><img src={fb} alt="Facebook" /></a>
                        <a href="#" className="social-icon"><img src={twiter} alt="Twitter" /></a>
                        <a href="#" className="social-icon"><img src={linkedin} alt="LinkedIn" /></a>
                        <a href="#" className="social-icon"><img src={yt} alt="YouTube" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer