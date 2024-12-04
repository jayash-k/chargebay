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
                            <img src={logo} alt="ChargeBay Logo" style={{userSelect :'none',pointerEvents : "none"}} className="logo-img" draggable='false'/>
                        </div>

                        <span className="email" ><br />
                            <div style={{ marginRight: '.5rem' }}>Contact :</div>
                            <div >
                                <a href='tel:+17575242743' style={{ textDecoration: 'none' }}>+1 (757)-524-2743</a>
                            </div>
                        </span>
                        <span className="email"><br />
                            <div style={{ marginBottom: '1.2rem' }}>Email <span style={{ marginLeft: '.8rem', marginRight: '.5rem' }}>:</span></div>
                            <div >
                                <li><a href={`mailto:${email1}`} onClick={handleEmailClick}>{email1}</a></li>
                                <li><a href={`mailto:${email2}`} onClick={handleEmailClick}>{email2}</a></li>
                            </div>
                        </span>
                        <a href="https://www.google.com/maps/search/?api=1&query=3702+Spectrum+Blvd+Ste+165+Tampa+FL+33612+USA" style={{textDecoration : 'none'}}><span className="address" style={{ marginTop: '1.2rem' }}><br />3702 Spectrum Blvd. Ste. 165<br />Tampa, FL 33612, USA</span></a>
                    </div>
                    <div className="footer-middle">
                        <div className="footer-links">
                            <ul>
                                <li><a href="/drivers">Drivers</a></li>
                                <li><a href="/Q&A#hostQA">Hosts</a></li>
                                <li><a href="/reseller">The Company</a></li>
                                <li><a href='/T&C'>Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <ul>
                                <li><a href="/reseller">Host a Station</a></li>
                                <li><a href="/products">Our Solution</a></li>
                                <li><a href="/reseller">Our Partners</a></li>
                                <li><a href='/privacy-policy'>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right">
                        <span className="host-text">Are you a host?<br /></span>
                        <a href="/log-in"><button className="learn-more login-button"><span>Log in</span></button></a>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-bottom">
                    <div className="legal-links">
                        <a href="/T&C">Terms of Service</a>
                        <span className="separator">|</span>
                        <a href="/T&C">Security</a>
                        <span className="separator">|</span>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <span className="separator">|</span>
                        <span className="copyright">© 2012 All Rights Reserved.</span>
                    </div>
                    <div className="social-icons">
                        <a href="/facebookLink" className="social-icon"><img src={fb} alt="Facebook" /></a>
                        <a href="/twiterLink" className="social-icon"><img src={twiter} alt="Twitter" /></a>
                        <a href="https://www.linkedin.com/company/chargebay-usa/" className="social-icon"><img src={linkedin} alt="LinkedIn" /></a>
                        <a href="https://youtube.com/@chargebay?si=LSIMoaOYpKfMYdN_" className="social-icon"><img src={yt} alt="YouTube" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer