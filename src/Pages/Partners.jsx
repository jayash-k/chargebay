import { React, useState, useEffect, useRef } from 'react'
import "./Partners.css"

import { FiPlus, FiX } from 'react-icons/fi';

import multifamilybannerimg from "../Images/multifamilyhero.png"

import MegaMenus from '../Components/MegaMenus'
import AnimatedSection from '../Components/AnimatedSection'
import Header from '../Components/header'
import Footer from "../Components/Footer"

const Partners = () => {
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

    const collabdata = [
        {
            title: 'Electrical Contractors',
            description: 'ChargeBay helps businesses expand into:',
            content: [
                'EV charging.',
                'Build revenue streams.',
                'Provide clients with a positive experience.',
                'Allowing them to focus on generating new business.',
            ],
            firstcard: "first-accordion-item"
        },
        {
            title: 'Energy & Property Consultants',
            description: 'Showcase your solution-based selling skills and strengthen client relationships by:',
            content: [
                'Offering an EV charging solution with advanced energy management.',
                'Maximum uptime.',
                'Customisable access controls.',
                'All without proprietary hardware or vendor lock-in.'
            ],
        },
        {
            title: 'Equipment Resellers',
            description: 'Partner with ChargeBay to expand your offerings and access quality EV hardware and turnkey solutions. Our customizable features ensure a smooth transition to EV charging infrastructure.',
            content: []
        },

        {
            title: 'Equipment Manufacturers',
            description: "As a manufacturer of Open Charge Point Protocol (OCPP)-compliant EV chargers, you're looking to expand your reach. Our mission is to provide clients with the best options available, and we're excited to hear about your OCPP-compliant chargers. We welcome the opportunity to learn more about your products and explore potential collaborations.<br />Don't have an OCPP-compliant charger? No problem, reach out to discuss it further, we are more than happy to expand across protocols",
            content: []
        },

        {
            title: 'PropTech Companies',
            description: 'Partner with our EV charging software to improve your building management software offerings.\nOur expertise in:',
            content: ['Energy management,', 'Including distributed energy integrations,', 'Load management, and', 'Bidirectional charging,', 'ChargeBay will help you prepare for the future of energy management.'],
            lastcard : 'last-accordion-item',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <main>
                <section id='hero-header' style={{ backgroundImage: `url(${multifamilybannerimg})` }}>
                    <header>
                        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
                    </header>
                    <section className="partners-hero">
                        <AnimatedSection animation="flyIn" length={100} direction='left'>
                            <div className="partners-hero-content">
                                <h1>Become a ChargeBay Partner for <br/>Developing Superior <span className='highlight-green'>One-Stop</span> EV Charging Ecosystems</h1>
                                <p>With ChargeBay's EV charging solution, you can seamlessly provide an exceptional charging experience to your customers, allowing you to concentrate on your core business and leave the charging worries to us.</p>
                                <button className='learn-more transperant'><span>Contact Now</span></button>
                            </div>
                        </AnimatedSection>
                    </section>
                </section>

                <section className="accordion-container">
                    <h2>
                        Who do We <span className="highlight">Partner</span> with?
                    </h2>
                    <p>
                        Together, let’s collaborate to provide the best EV-charging ecosystem for our future customers.
                    </p>
                    <div className='accordion-item-container'>
                        {collabdata.map((item, index) => (
                            <div key={index} className={`accordion-item ${item.firstcard} ${item.lastcard} ${activeIndex === index ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => handleToggle(index)}>
                                    <span>{item.title}</span>
                                    <span className='accordion-item-icon'>{activeIndex === index ? <FiX size={20} /> : <FiPlus size={20} />}</span>
                                </div>
                                <div className="accordion-content">
                                    <p>{item.description}</p>
                                    <ul>
                                        {item.content.map((line, idx) => (
                                            <li key={idx}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3>We empower partners in the evolving electric vehicle industry through comprehensive support, <span className='highlight-black'>including 24/7 support, resources, and training.</span><br />
                        We <span className='highlight-black'>collaborate with professionals</span> across North America to ensure their success in the dynamic EV landscape with our <span className='highlight-black'>24/7 support.</span> </h3>
                </section>

                <section className='impact-section'>
                    <h3>Ready to Make an Impact, <span className='highlight-green'>Together?</span></h3>
                    <p>
                        Our company seeks passionate collaborators to meet the growing demand for accessible EV charging infrastructure. Your expertise aligns with our goal of providing support. Let's collaborate to create a sustainable future for EV charging
                    </p>
                    <button className='learn-more transperant'><span>Contact Now</span></button>
                </section>

                <section className="doubts getintouchdoubts">
                    <h2>Got more doubts?</h2>
                    <button className="learn-more-white"><span>All Questions</span></button>
                </section>

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
            </main >
        </>
    )
}

export default Partners