import { React, useState, useRef, useEffect } from 'react'
import "./MultiFamilyHostPage.css"

import AnimatedSection from '../Components/AnimatedSection';
import Header from '../Components/header'
import Footer from '../Components/Footer';

import dropdownarrowgrey from "../Images/dropdownarrrowgrey.svg"
import multifamilybannerimg from "../Images/multifamilyhero.png"
import charger from "../Images/charger.png"

import tenantsimg from "../Images/tenants.png"
import adapterimg from "../Images/adapter.png"
import incomeimg from "../Images/income.png"
import esgimg from "../Images/ESG.png"

import figureout from "../Images/figureout.png"
import featured from "../Images/featured.png"
import businessmodel from "../Images/businessmodel.png"
import casestudyimg from "../Images/case Study.png"

import station from "../Images/charging station.png"
import port from "../Images/charging port.png"

import MegaMenus from '../Components/MegaMenus';

function HousingPage() {

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

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const containerRef = useRef(null);

    const cardData = [
        {
            title: "Attract more Tenants",
            description: "Hosting EV charging stations in multifamily properties offers a valuable amenity that caters to the growing demand for electric vehicle support.",
            image: tenantsimg
        },
        {
            title: "Adapt to cater the future",
            description: "Boost property value, and prepare for EV charging mandates.",
            image: adapterimg
        },
        {
            title: "Increase Net operating Income",
            description: "Increase ROI thruogh paid charging amenities for tenants.",
            image: incomeimg
        },
        {
            title: "Make an Impact",
            description: "Become a green leader and be eligible for ESG credits",
            image: esgimg,
            lastcard: "lastcard"
        }
    ];

    return (
        <>
            <main>
                <section id="hero-header" style={{ backgroundImage: `url(${multifamilybannerimg})` }}>
                    <header>
                        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
                    </header>


                    <section className="multifamily-hero">
                        <AnimatedSection animation="flyIn" length={100} direction='left'>
                            <div className="multifamily-hero-content">
                                <h1>Multi-Family Housing</h1>
                                <p>America's <span className="highlight-green">Most-profitable</span> EV charging ecosystem specialised in Multi- housing EV management.
                                    <br></br>Boost occupancy rates with a unique, reservable EV charging ecosystem that enhances tenant satisfaction with minimal upfront costs, making your property the neighbourhood's top choice.</p>
                            </div>
                        </AnimatedSection>
                    </section>
                </section>

                <section className="consumer-reports">
                    <h1 className="consumer-reports-title">
                        75% EV drivers prefer homes with EV chargers,
                        {!isMobileView ? <br /> : ' '}
                        According to <a href='https://advocacy.consumerreports.org/wp-content/uploads/2020/12/CR-National-EV-Survey-December-2020-2.pdf' className="highlight">Consumer reports</a>
                    </h1>
                    <a href='/contact-us'><button className="learn-more-white contbtn"><span>Contact Our Experts</span></button></a>
                    <div className="consumer-reports-cards-container">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className={`consumer-reports-card ${index === activeCardIndex ? 'active' : ''} ${card.lastcard}`}
                            >
                                <div className={`consumer-reports-card-content `}>
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                                <img src={card.image} alt={card.title} className="consumer-reports-card-image" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="why-chargebay-section">
                    <h2 className="why-chargebay-title">
                        Why should you consider <span className="why-chargebay-highlight">ChargeBay?</span>
                    </h2>
                    <div className="why-chargebay-cards">
                        <div className="why-chargebay-card card1">
                            <h3 className="why-chargebay-card-title">50% of all new cars will be EV by 2030</h3>
                            <p className="why-chargebay-card-source">Source: <a href="https://www.whitehouse.gov/briefing-room/statements-releases/2023/04/17/fact-sheet-biden-harris-administration-announces-new-private-and-public-sector-investments-for-affordable-electric-vehicles/" className="why-chargebay-link">White House</a></p>
                        </div>
                        <div className="why-chargebay-card card1">
                            <h3 className="why-chargebay-card-title">35% of all EV chargers will be at Multi-family developments</h3>
                            <p className="why-chargebay-card-source">Source: <a href="https://www.pwc.com/us/en/industries/industrial-products/library/electric-vehicle-charging-market-growth.html" className="why-chargebay-link">PWC</a></p>
                        </div>
                        <div className="why-chargebay-card card1">
                            <h3 className="why-chargebay-card-title">58% of Renters are willing to pay more to live at a location with EV charging amenities</h3>
                            <p className="why-chargebay-card-source">Source: <a href="https://www.multifamilyexecutive.com/property-management/apartment-trends/stat-of-the-week-ev-charging-stations_o" className="why-chargebay-link">Multi-Family Executive</a></p>
                        </div>
                        <div className="why-chargebay-card card1">
                            <h3 className="why-chargebay-card-title">65% of EV chargers are always occupied at prime times</h3>
                            <p className="why-chargebay-card-source">Source: <a href="#" className="why-chargebay-link">500 Interviews done by ChargeBay Team</a></p>
                        </div>
                    </div>
                </section>

                <section className="problem-section">
                    <h2 className="problem-section-title">
                        Where does the <span className="highlight-red">problem</span> lie?
                    </h2>
                    <p className="problem-section-text">
                        Finding convenient charging spots is a hassle,<br></br>
                        and providing them to 100+ users with a personalised preference is an even,
                        bigger struggle.
                    </p>
                    <p className="problem-section-text">
                        ChargeBay takes the hassle out for you to{' '}
                        <span className="highlight-bold">
                            provide your customers what they expect from you
                        </span>
                        .
                    </p>
                    <p className="problem-section-text">
                        <span className="why-chargebay-highlight">CONVENIENCE...</span> at minimal upfront costs.
                    </p>
                </section>

                <section className="help-section">
                    <div className="help-section-container">
                        <h2 className="help-section-title">How do we help?</h2>
                        <p className="help-section-subtitle">ChargeBay has the potential to</p>

                        <div className="help-section-flex">
                            <div className="help-section-flex-item">
                                <div className="icon-container">
                                    <AnimatedSection animation="scaleIn" delay={.5}>
                                        <img src={port} className="icon charger" draggable='false' />
                                    </AnimatedSection>
                                </div>
                                <h3 className="help-section-flex-item-title">
                                    Either plan and operate a shareable EV charging ecosystem with your residents
                                </h3>
                            </div>

                            <div className="help-section-flex-item">
                                <div className="icon-container">
                                    <AnimatedSection animation="scaleIn" delay={.5}>
                                        <img src={station} className="icon station" draggable='false' />
                                    </AnimatedSection>
                                </div>
                                <h3 className="help-section-flex-item-title">
                                    Make your existing charging infrastructure into an intelligent ecosystem.
                                </h3>
                            </div>
                        </div>

                        <p className="help-section-section-text">
                            ChargeBay does that at rates lower than any other, for you to upgrade your other amenities with a comfortable budget.
                        </p>
                    </div>
                </section>

                <section className='figureout'>
                    <h1>Let's figure out costs</h1>
                    <div className='figureout-content'>
                        <div className='figureout-content-image'>
                            <img src={figureout} alt="" />
                        </div>
                        <div className="figureout-content-para">
                            <p >Types of Property<img src={dropdownarrowgrey} className="dropdown-arrow-grey"></img></p>
                            <p >Your Requirements<img src={dropdownarrowgrey} className="dropdown-arrow-grey"></img></p>
                            <p >No of Chargers<img src={dropdownarrowgrey} className="dropdown-arrow-grey"></img></p>
                            <button className="learn-more"><span>Request qoute</span></button>
                        </div>
                    </div>
                </section>

                <section className="trust-section">
                    {!isMobileView ? <h1>Companies Trust ChargeBay, so should you</h1> : <h1>Featured in</h1>}
                    <div className="trust-section-logos">
                        <img src={featured} alt="Featured" draggable='false' />
                    </div>
                </section>

                <section className="business-model-section">
                    <h1>Flexible Business Models</h1>
                    <div className="business-model">
                        <div className="business-model-content">
                            <div className="business-model-contentainer">
                                <h2 className="business-model-content-title">Host owned</h2>
                                <p className="business-model-content-subtitle">Own the chargers, and the experience, without a hassle for a nominal yearly fee</p>
                            </div>
                            <div className="business-model-contentainer">
                                <h2 className="business-model-content-title">Become a ChargeBay partner</h2>
                                <p className="business-model-content-subtitle">Earn and share revenue a almost no upfront costs</p>
                            </div>
                            <div className="business-model-contentainer">
                                <h2 className="business-model-content-title">Turn-key solution</h2>
                                <p className="business-model-content-subtitle">An investment free solution to keep you relevant on a budget</p>
                            </div>
                        </div>
                        <div className="business-model-image">
                            <img src={businessmodel} alt="Modern apartment building with EV charging stations" />
                        </div>

                    </div>
                </section>

                <AnimatedSection animation='flyIn' direction='down'>
                    <section className="asked-que multifamily">
                        <h2>Frequently Asked Questions?</h2>
                        <a href="/Q&A"><button className="learn-more-white transperant"><span>All Questions</span></button></a>
                    </section>
                </AnimatedSection>

                <AnimatedSection animation='slideIn' direction='up'>
                    <section className="case-study">
                        <div className="case-study-content">
                            <h2 className="case-study-subtitle">Case Study</h2>
                            <h1 className="case-study-title">
                                Multifamily Case Study: Condo adds 21 EV charging stations and avoids $24K in electrical upgrades
                            </h1>
                            <h6 className="case-study-description">
                                Like most existing buildings, New Times Square faced significant electrical capacity constraints when considering adding EV chargers. A networked load managed approach allowed residents to access their own private charger while saving the corporation time and money.
                            </h6>
                            <button className="learn-more-white transperant"><span>Learn More</span></button>
                        </div>
                        <div className="case-study-image">
                            <img src={casestudyimg} alt="Modern apartment building with EV charging stations" />
                        </div>
                    </section>
                </AnimatedSection>

                <footer>
                    <Footer />
                </footer>
            </main>
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
        </>
    )
}

export default HousingPage