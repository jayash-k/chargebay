import { React, useEffect, useState } from 'react'

import "./ContactPage.css"
import "./CalculatorPage.css"

import calculatorbanner from "../Images/calculatorbanner.png"
import calculatorPower from "../Images/calculator page charging img.png"

import AnimatedSection from '../Components/AnimatedSection';
import MegaMenus from '../Components/MegaMenus';
import Header from '../Components/header'
import Footer from '../Components/Footer'

import CalculatorSection from "../Components/CalculatorSection"

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
            <main>
                <section id="hero-header" style={{ backgroundImage: `url(${calculatorbanner})` }}>
                    <header>
                        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
                    </header>


                    <section className="multifamily-hero">
                        <AnimatedSection animation="flyIn" length={100} direction='left'>
                            <div className="multifamily-hero-content">
                                <h2>Let ChargeBay calculate your costs and revenue</h2>
                                <p style={{ marginBottom: '2rem' }}>Use the ChargeBay's Charging Calculator below to estimate the benefits based on your requirements for this value-added amenity</p>
                                <button className='learn-more transperant'
                                onClick={()=>{
                                    
                                    if(isMobileView){
                                        window.scrollBy({top : 1750,behavior: 'smooth'})
                                    }
                                    else{
                                        window.scrollBy({top : 1450,behavior: 'smooth'})
                                    }    

                                }}><span>Let's Calculate</span></button>
                            </div>
                        </AnimatedSection>
                    </section>
                </section>

                <section className='calculator-page-section-2'>
                    <h1 className="unique-model-header">
                        The ChargeBay Charging Calculator {"(C3)"}
                    </h1>
                    <AnimatedSection animation='flyIn' direction='down'>
                        <div className="unique-model-models">
                            <div className="unique-model-card">
                                <img src={calculatorPower} draggable='false' alt="" />
                                <p>
                                    Estimate revenue by selecting subscription type, installation type, cost, charger power, and usage via dropdowns and sliders.
                                </p>
                            </div>
                            <div className="unique-model-card">
                                <img src={calculatorPower} draggable='false' alt="" />
                                <p>
                                    Before adjusting the variable values, make sure to select the appropriate charger and number of ports.
                                </p>
                            </div>
                            <div className="unique-model-card">
                                <img src={calculatorPower} draggable='false' alt="" />
                                <p>
                                    Compare different usage, energy cost, and price settings to find the optimal balance for your property.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                {/* <div class="calculator-page-calculator-container">
                    <h1 class="calculator-page-calculator-heading">
                        To gain access to the calculator, please provide us with a brief introduction of yourself.
                    </h1>
                    <div class="calculator-page-calculator-grid">
                        <div class="calculator-page-calculator-input-group">
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div class="calculator-page-calculator-input-group">
                            <label for="last-name">Last Name</label>
                            <input type="text" id="last-name" placeholder="Enter your last name" />
                        </div>
                        <div class="calculator-page-calculator-input-group">
                            <label for="company">Company</label>
                            <input type="text" id="company" placeholder="Enter your company name" />
                        </div>
                        <div class="calculator-page-calculator-input-group">
                            <label for="phone">Phone</label>
                            <input type="text" id="phone" placeholder="Enter your phone number" />
                        </div>
                        <div class="calculator-page-calculator-input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div class="calculator-page-calculator-input-group calculator-page-calculator-full-width">
                            <label for="description">Description</label>
                            <textarea id="description" placeholder="Enter your description"></textarea>
                        </div>
                    </div>
                    <div class="calculator-page-calculator-terms">
                        <input type="checkbox" id="terms" />
                        <label for="terms">I agree to the Privacy Policy and Terms of Services.</label>
                    </div>
                    <div class="calculator-page-calculator-buttons">
                        <button class="calculator-page-calculator-button">Next</button>
                        <button class="calculator-page-calculator-button reset">Reset</button>
                    </div>

                </div> */}
                <section>
                    <CalculatorSection />
                </section>


                <section className='calculator-page-instruction'>
                    <h1>Instructions</h1>
                    <ul>
                        <li>If you choose to integrate ChargeBay's software with your own OCPP-based chargers then our software bundle subscription will be at a flat fee starting at $15/charger/month. Subscription is negotiable with revenue split.</li>
                        <li>Currently we provide calculations for only our 11.5kW hardware+software bundle subscription. Contact us for other packages.</li>
                        <li>If you are using your own electrical installers then the calculator will assume it to be zero by default.</li>
                    </ul>
                </section>

                <AnimatedSection animation='flyIn' direction='down'>
                    <section className="doubts getintouchdoubts">
                        <h2>Got more doubts?</h2>
                        <a href="/Q&A"><button className="learn-more-white transperant"><span>All Questions</span></button></a>
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
                )
                }
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
            </main >
        </>
    )
}

export default GetInTouch