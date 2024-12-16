import { React, useState } from 'react'
import "./UnderConstructionPage.css"
import Header from '../Components/header'

import underconstruction from "../Images/underconstruction.png"

import MegaMenus from '../Components/MegaMenus'

function UnderConstructionPage() {

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


    const handleMailto = (e) => {
        e.preventDefault();

        // Get form values
        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const inquiry = e.target.inquiry.value;
        const message = e.target.message.value;

        // Construct the mailto URL
        const subject = encodeURIComponent(`Inquiry: ${inquiry}`);
        const body = encodeURIComponent(
            `Full Name: ${fullName}\nEmail: ${email}\nMessage:\n${message}`
        );

        // Open the mailto link
        window.location.href = `mailto:operations@chargebay.app?subject=${subject}&body=${body}`;
    };


    return (
        <>
            <header className="underconstructionbody">
                <header>
                    <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
                </header>
                {activeNavItem && (
                    <MegaMenus
                        activeNavItem={activeNavItem}
                        setIsNavItemHover={setActiveNavItem}
                        toggleForm={toggleForm}
                    />
                )}
                <section className="underconstruction">
                    <h1>This page is under Construction...<br></br>
                        <button onClick={() => {
                            window.history.back();
                        }} className="learn-more transperant"><span>Go Back</span></button>
                    </h1>
                    <img src={underconstruction} alt="" />
                </section>
            </header>

            {isOpen && (
                <div className="contact-form-overlay">
                    <div className={`contact-form ${closing ? "slide-out" : "slide-in"}`}
                        onAnimationEnd={onAnimationEnd}>
                        <button onClick={handleClose} className="close-button" aria-label="Close form">
                            ✕
                        </button>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleMailto}>
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
                                    <option value="Interested in Hosting a station">Interested in Hosting a station</option>
                                    <option value="Interested for multi-family housing solutions">Interested for multi-family housing solutions</option>
                                    <option value="Interested to become a distributor">Interested to become a distributor</option>
                                    <option value="Interested to become an installer">Interested to become an installer</option>
                                    <option value="⁠General Inquiry">⁠General Inquiry</option>
                                    <option value="⁠Urgent Inquiry">⁠Urgent Inquiry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" style={{ maxWidth: '90%', textWrap: 'wrap' }}>
                                    Please provide all pertinent details about your inquiry
                                </label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="submit-button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default UnderConstructionPage