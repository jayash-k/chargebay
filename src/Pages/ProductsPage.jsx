import { React, useState } from 'react'
import "./ProductsPage.css"

import { FaPlay } from 'react-icons/fa';
import { BatteryCharging, ListCheck, Zap } from 'lucide-react';

import Header from '../Components/header'
import Footer from '../Components/Footer';
import MegaMenus from '../Components/MegaMenus';

import chargermanimg from '../Images/product  charger management.png'
import bookingmanimg from '../Images/product  booking management.png'
import powermanimg from '../Images/product  power management.png'
import forecastimg from '../Images/35442.png'
import bussinessPartnerimg from '../Images/bussiesspartner.png'

import ecosystemCard from '../Images/what ecosystem.png'
import chargerfeatureimg from '../Images/featureimg.png'

import watchdemoimg from '../Images/wachdemo.png'
import bannerimg from "../Images/banner.png"
import devicesimg from "../Images/devices.png"
import devicesimgmob from "../Images/devices mobview.png"
import chargerimg from "../Images/sample charger.png"
import ecosystemimg from '../Images/ecosystem.png'

import providers from '../Images/chargebay provider.png'
import providersmob from '../Images/chargebay provider mob.png'

import { ImPriceTag } from 'react-icons/im';

function ProductsPage() {
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
        <section id='hero-header' style={{ backgroundImage: `url(${bannerimg})` }}>
          <header>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
          </header>

          <section className="commercial-hero productspage">
            <div className="commercial-hero-content productspage">
              <h1>Simplifying EV Charging With a <span className='highlight-blue'> One-Stop</span> Ecosystem</h1>
              <p>Elevate your bussiness with intelligent and safe multi-vehicle EV charging infrastructure powered and managed by ChargeBay.</p>
              <a href="/contact-us"><button className='learn-more transperant'><span>Contact Now</span></button></a>
            </div>
            <div className='productpageimg'>
              {isMobileView ? <img src={devicesimgmob} draggable='false' />
                : <img src={devicesimg} draggable='false' />
              }
            </div>
          </section>
        </section>


        <section className="chargebay-forecast">
          <div className="chargebay-forecast-content-wrapper">
            <div className="chargebay-forecast-image-container">
              <img src={forecastimg} alt="Woman standing next to a charging electric vehicle" />
            </div>
            <div className="chargebay-forecast-text-content">
              <h2 className="chargebay-forecast-text-content-headline">
                <span className="highlight-blue">By 2030,</span> <span className="highlight-green">60M EVs</span> will be<br />
                on the road in the US.
              </h2>
              <p>
                At ChargeBay, we prioritize listening attentively to our
                customers' needs, which empowers us to address the challenges
                commonly associated with multi-vehicle EV charging. These
                challenges include limitations in electrical capacity, management
                resource constraints, and the financial implications of providing
                suitable solutions.
              </p>
              <p>
                Our commitment to technological innovation drives us to
                continuously develop cutting-edge solutions tailored for EV drivers,
                new and existing properties, and the future grid.
              </p>
            </div>
          </div>
        </section>

        <section className="why-chargebay-ecosystem">
          <h1 className="why-chargebay-ecosystem-title">
            What is the ChargeBay <span className="highlight-blue">Ecosystem?</span>
          </h1>
          {!isMobileView ?
            <img src={ecosystemCard} alt="" draggable='false' />
            :
            <>
              <img src={chargermanimg} alt='' draggable='false' className='firstImg' />
              <img src={bookingmanimg} alt='' draggable='false' />
              <img src={powermanimg} alt='' draggable='false' />
            </>}
        </section>

        <section className="chargebay-ecosystem">
          <div className='chargebay-ecosystem-content-header'>
            <h1>ChargeBay <span className="highlight-green">Ecosystem</span></h1>

          </div>

          <div className="chargebay-ecosystem-content-wrapper">
            <div className="chargebay-ecosystem-text-content">
              <p >A user-friendly interface with a host centric approach.</p>
              <p>ChargeBay is specially designed to align with the unique requirements of your property. Our cloud-based platform grants building managers comprehensive visibility and control over their EV chargers.</p>

              <p>We tailor each system to the specific needs of the property and its tenants, ensuring a seamless experience from deployment to ongoing management.</p>

              <p>ChargeBay simplifies the process of adopting and maintaining EV charging infrastructure, making it an effortless and efficient solution for your property.</p>
            </div>
            <div className="chargebay-ecosystem-image-content">
              <img src={ecosystemimg} alt="ChargeBay app interface on smartphones" className="chargebay-ecosystem-image-content-app-screens" draggable='false' />
            </div>
          </div>
        </section>

        <section className="charger-feature-section">
          <div className="charger-feature-section-content-wrapper">
            <div className="charger-feature-section-text-content">
              <ul>
                <li>Personalized access control for each charger.</li>
                <li>Customizable pricing options for charging sessions.</li>
                <li>Comprehensive reporting and real-time insights into charging activity.</li>
                <li>Effortless driver billing solutions.</li>
                <li>GDPR and OCPP compliant solution.</li>
                <li>User-friendly management software for efficient operations.</li>
                <li>Complimentary support services for ongoing assistance.</li>
              </ul>
            </div>
            <div className="charger-feature-section-image-content">
              <img src={chargerfeatureimg} alt="ChargeBay charging station with electric vehicle" draggable="false" />
            </div>
          </div>
        </section>

        <section id="getintouch-hero-header" >
          <iframe className='watchDemo' src="https://www.youtube.com/embed/NHT5mTtfIrY?si=bSXs8npncTrsIc3F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        {/* width="100%" style={{borderBottomLeftRadius: '60px', borderBottomRightRadius : '60px'}} height="800px" */}
        
        <section className="bcmpartner-section">
          <div className="bcmpartner-section-image">
            <img src={bussinessPartnerimg} alt="" />
          </div>
          <div>
            <h1>Become A Partner</h1>
            <a href="/contact-us"><button className="learn-more-white transperant"><span>Contact Now</span></button></a>
          </div>
        </section>

        <section className="featured productspage">{!isMobileView ?
          <>
            <h2>We are versatile, <br />Working Across With 65+ Charger Providers</h2>
            <div className="featured-logos">
              <img src={providers} alt="Featured" draggable='false' />
            </div>
          </>
          : <>
            <h1>Powering</h1>
            <div className="featured-logos productspage">
              <img src={providersmob} alt="Featured" draggable='false' />
            </div>
          </>
        }
        </section>

        <section className="asked-que">
          <h2>Frequently Asked Questions?</h2>
          <a href="/Q&A"><button className="learn-more-white transperant"><span>All Questions</span></button></a>
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
      </main>
    </>
  )
}

export default ProductsPage