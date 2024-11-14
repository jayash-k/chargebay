import { React, useState } from 'react'
import './CommercialHostPage.css'

import Header from '../Components/header'
import Footer from '../Components/Footer'
import AnimatedSection from '../Components/AnimatedSection'
import MegaMenus from '../Components/MegaMenus'

import commercialbannerimg from '../Images/commercialbanner.png'
import featured from "../Images/featured.png"
import businessmodel from "../Images/businessmodel.png"
import figureout from "../Images/figureout.png"
import evdestinationimg from '../Images/evdestination.png'

import station from "../Images/charging station.png"
import port from "../Images/charging port.png"
import dropdownarrowgrey from '../Images/dropdownarrrowgrey.svg'

function CommercialHost() {
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
        <section id="hero-header" style={{ backgroundImage: `url(${commercialbannerimg})` }}>
          <header>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
          </header>

          <section className="commercial-hero">
            <AnimatedSection animation='flyIn' length={100} direction='left' >
              <div className="commercial-hero-content">
                <h1>Commercial Workspace & Retail Spaces</h1>
                <p><span className='highlight-green'>For retail developments:</span> An easy and affordable way to attract customers,
                  boost property value, and offer a customer-centric experience for their
                  comfort.<br />
                  <span className='highlight-green'>For workspaces:</span> Provide employees with an organized charging system aligned with their schedules, without time limits, and at minimal CAPEX.</p>
                <button className='learn-more transperant'><span>Contact Now</span></button>
              </div>
            </AnimatedSection>
          </section>

        </section>

        <section className='evdestination'>
          <div>
            <h1>Become An <br /><span className='highlight-blue'>EV Ready</span> Destination</h1>

            <div>
              <h3>Increase your Average Daily Rate</h3>
              <p>By attracting more people to enhance occupancy and an organized booking management system.</p>
            </div>
            <div>
              <h3>Generate revenue at low cash-spend</h3>
              <p>Passive income source providing charging services to guests frequenting nearby retail and office-spaces.</p>
            </div>
            <div>
              <h3>Commit to a sustainable future</h3>
              <p>Enhance brand image and environmental consciousness by adopting a seamlessly managed sustainable amenity.</p>
            </div>
          </div>
          <div className='evdestination-div-image'>
            <img src={evdestinationimg} alt="" />
          </div>

        </section>

        <section className="problem-section commercial">
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
                    <img src={station} className="icon charger" draggable='false' />
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

        <AnimatedSection animation='flyIn' direction='down'>
          <section className="asked-que">
            <h2>Frequently Asked Questions?</h2>
            <button className="learn-more-white transperant"><span>All Questions</span></button>
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

export default CommercialHost