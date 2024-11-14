import { React, useState } from 'react'

import "./ContactPage.css"

import contactbannerimg from "../Images/contactbanner.png"

import AnimatedSection from '../Components/AnimatedSection';
import MegaMenus from '../Components/MegaMenus';
import Header from '../Components/header'
import Footer from '../Components/Footer'

const GetInTouch = () => {
    const isMobileView = window.innerWidth <= 768;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const toggleForm = () => {
        if (isOpen) {
            setClosing(true);
        } else {
            setIsOpen(true);
        }
    };

    const handleClose = () => {
        setClosing(true);
    };

    const onAnimationEnd = () => {
        if (closing) {
            setIsOpen(false);
            setClosing(false);
        }
    };
    return (
        <>
            <main>
                <div className='getintouch-hero-bg'>
                    <section id="getintouch-hero-header" style={{ backgroundImage: `url(${contactbannerimg})` }}>
                        <header>
                            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
                        </header>

                        <section className="getintouch-hero">
                            <AnimatedSection animation="flyIn" length={100} direction='left'>
                                <div className="getintouch-hero-content">
                                    <h1>Get in Touch with ChargeBay:
                                        We're Here to <span className='highlight-blue'>Help!</span></h1>
                                </div>
                            </AnimatedSection>
                        </section>
                    </section>
                </div>
                <section className="reach-us">
                    <div className="reach-us-container">
                        <h2>Reach Us</h2>
                        <div className="reach-us-content">
                            <div className="reach-us-contact-info">
                                <div className="reach-us-info-block">
                                    <h3>Email Us</h3>
                                    <p>operations@chargebay.app</p>
                                </div>
                                <div className="reach-us-info-block">
                                    <h3>Call Us</h3>
                                    <p>9876543210</p>
                                </div>
                                <div className="reach-us-info-block">
                                    <h3>Office</h3>
                                    <p>3702 Spectrum Blvd. Ste. 165 <br /> Tampa, FL 33612, USA</p>
                                </div>
                            </div>
                            <form className="reach-us-contact-form">
                                <div className="reach-us-form-row">
                                    <input type="text" placeholder="Full Name" />
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="reach-us-form-row">
                                    <input type="tel" placeholder="Phone No." />
                                    <select defaultValue="">
                                        <option value="" disabled>Type of inquiry</option>
                                        <option value="general">Type 1</option>
                                        <option value="support">Type 2</option>
                                        <option value="sales">Type 3</option>
                                    </select>
                                </div>
                                <textarea placeholder="Please provide all pertinent details about your inquiry"></textarea>
                                <button><span>Send Message</span></button>
                            </form>
                        </div>
                    </div>
                </section>

                <AnimatedSection animation='flyIn' direction='down'>
                    <section className="doubts getintouchdoubts">
                        <h2>Got more doubts?</h2>
                        <button className="learn-more-white"><span>All Questions</span></button>
                    </section>
                </AnimatedSection>
                
                <footer>
                    <Footer />
                </footer>

                {activeNavItem && (
                    <MegaMenus
                        activeNavItem={activeNavItem}
                        setIsNavItemHover={setActiveNavItem}
                        toggleForm={toggleForm}
                    />
                )}
                {isOpen && (
                    <div className="contact-form-overlay">
                        <div
                            className={`contact-form ${closing ? "slide-out" : "slide-in"}`}
                            onAnimationEnd={onAnimationEnd} // Handle animation end event
                        >
                            <button onClick={handleClose} className="close-button" aria-label="Close form">
                                ✕
                            </button>
                            <h2>Get in Touch</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inquiry">What's the nature of your inquiry</label>
                                    <select id="inquiry" name="inquiry" required>
                                        <option value="">Select inquiry type</option>
                                        <option value="Interested in Hosting a station ">Interested in Hosting a station</option>
                                        <option value="Interested for multi-family housing solutions">Interested for multi-family housing solutions</option>
                                        <option value="Interested to become a distributor">Interested to become a distributor</option>
                                        <option value="Interested to become an installer">Interested to become an installer</option>
                                        <option value="⁠General Inquiry">⁠General Inquiry</option>
                                        <option value="⁠Urgent Inquiry">⁠Urgent Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Please provide all pertinent details about your inquiry</label>
                                    <textarea id="message" name="message" rows="4" required></textarea>
                                </div>
                                <button onClick={() => { console.log("Msg Sended") }} className="submit-button">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default GetInTouch