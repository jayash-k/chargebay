import { React, useState, useEffect, useRef } from 'react'
import "./DriversPage.css"
import { ChevronRight } from 'lucide-react';

import Header from '../Components/header';
import Footer from '../Components/Footer';

import mobimg from '../Images/img2.png'

import sampleimg from "../Images/sample charger.png"
import seamlessimg1 from '../Images/seamless img1.png'
import seamlessimg2 from '../Images/seamless img2.png'
import seamlessimg3 from '../Images/seamless img3.png'

import AnimatedSection from '../Components/AnimatedSection';

import multifamilybannerimg from "../Images/multifamilyhero.png"
import driversbannerimg from '../Images/driverspagebanner.png'

import chargerimg from "../Images/charger.png"
import routeicon from "../Images/route.svg"

import playstore from "../Images/googleplay.png"
import appstore from "../Images/appstore 1.png"

import MegaMenus from '../Components/MegaMenus';

function AboutChargingPage() {

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


    const [currentIndex, setCurrentIndex] = useState(0);
    const titles = [
        { id: 1, text: 'The ChargeBay App' },
        { id: 2, text: 'Pay as you go ', subText: "with ChargeBay card" },
        { id: 3, text: 'Instant charging with our app-clips simply scan the QR code' },
    ];

    const images = [
        seamlessimg1,
        seamlessimg2,
        seamlessimg3,
    ];

    const titles2 = [
        { id: 1, text: 'The ChargeBay App', heighttext: 'seamless-card-title-lowheight' },
        { id: 2, text: 'Pay as you go ', subText: "with ChargeBay card" },
        { id: 3, text: 'Instant charging with our app-clips simply scan the QR code', heighttext: 'seamless-card-title-highheight' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);


    const [currentIndex2, setCurrentIndex2] = useState(0);
    const handleNext = () => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % titles.length);
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
                <section id="hero-header" style={{ backgroundImage: `url(${driversbannerimg})` }}>
                    <header>
                        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
                    </header>

                    <section className="chargings-hero">

                        <div className="chargings-hero-content">
                            <AnimatedSection animation='flyIn' length={100} direction='left'>
                                <h1>Convenient Charging,<br /> all at this <span className="abt-charging-highlight">One-Stop.</span></h1>
                                <p>With ChargeBay, you gain control over your charging experience. Its seamlessly integrated amenities and features are designed to work directly with your car and the charger, allowing for guaranteed reservations and a top-notch charging experience whenever you need it.</p>
                                <h3><span className="highlight-green">3x faster</span> than any other competitors.</h3>
                            </AnimatedSection>
                        </div>

                        <div className="chargings-hero-image">
                            <img src={mobimg} alt="" draggable='false' />
                        </div>
                    </section>

                </section>

                <div className="seamless-section">
                    <h2>
                        Multiple Ways for <span className="abt-charging-highlight">Seamless</span> Charging
                    </h2>
                    {!isMobileView && (
                        <div className="seamless-section-content-wrapper">
                            <div className="seamless-section-titles">
                                {titles.map((title, index) => (
                                    <h3
                                        key={title.id}
                                        className={index === currentIndex ? 'active' : 'inactive'}
                                    >
                                        {title.text}<br></br>
                                        <p>
                                            {title.subText}
                                        </p>
                                    </h3>
                                ))}
                            </div>

                            <div className="seamless-section-image-container">
                                <div
                                    className="seamless-section-image-scroll"
                                    style={{ transform: `translateY(-${currentIndex * 35}%)` }}
                                >
                                    {images.map((src, index) => (
                                        <div key={index} className={`seamless-section-image-wrapper ${index === 0 ? 'lastImg' : ''}`}>
                                            <img
                                                src={src}
                                                alt={`ChargeBay feature ${index}`}
                                                draggable='false'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {isMobileView && (
                        <div className="seamless-carousel-container">
                            <div className="seamless-carousel-card">
                                <img
                                    src={images[currentIndex2]}
                                    className="seamless-card-images"
                                    draggable='false'
                                />
                                <div className="seamless-card-overlay">
                                    <h3 className={`seamless-card-title ${titles2[currentIndex2].heighttext}`}>{titles2[currentIndex2].text}</h3>
                                    {titles2[currentIndex2].subText && (
                                        <p className="seamless-card-subtext">{titles2[currentIndex2].subText}</p>
                                    )}
                                </div>
                                <button onClick={handleNext} className="seamless-next-button" aria-label="Next card">
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <section className="evdriverssection">
                    <div className='evdrivers'>
                        <p >At ChargeBay, we empower EV drivers with the freedom to select their <span className="highlight-black">preferred charging method.</span></p>
                        <p >Whether through our user-friendly mobile app or our complimentary <span className="highlight-black">tap-and-go RFID charge digital card</span>, we are committed to delivering a seamless charging experience.</p>
                        <p >Our dedication extends beyond app downloads, as <span className="highlight-black">you can conveniently scan the QR code</span> and utilize our intuitive app-clips for effortless charging.</p>
                        <a href="/host-commercial"><button className="learn-more-white transperant"><span>Learn More</span></button></a>
                    </div>
                    <div className="evdriversimage">
                        <AnimatedSection animation='flyIn' direction='down'>
                            <img src={chargerimg} alt="" draggable="false" />
                        </AnimatedSection>
                    </div>
                </section>

                <section className="abt-charging-why-chargebay">
                    <h2 className="abt-charging-why-chargebay-title">
                        But <span className="abt-charging-highlight">Why</span> ChargeBay?
                    </h2>
                    <div className="abt-charging-why-chargebay-features">

                        <div className="abt-charging-why-chargebay-feature">
                            <div className="abt-charging-why-chargebay-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2L3 14H11L10 22L20 10H13L13 2Z" stroke="#3A86FF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="abt-charging-why-chargebay-feature-title">Seamless EV charging experience with a one-stop solution.</p>
                        </div>

                        <div className="abt-charging-why-chargebay-feature">
                            <div className="abt-charging-why-chargebay-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#3A86FF" stroke-width="1" />
                                    <line x1="8" y1="10" x2="16" y2="10" stroke="#3A86FF" stroke-width="1" />
                                    <line x1="8" y1="12" x2="16" y2="12" stroke="#3A86FF" stroke-width="1" />
                                    <line x1="8" y1="14" x2="16" y2="14" stroke="#3A86FF" stroke-width="1" />
                                </svg>
                            </div>
                            <p className="abt-charging-why-chargebay-feature-title">Conveniently Booking and Charging</p>
                        </div>

                        <div className="abt-charging-why-chargebay-feature">
                            <div className="abt-charging-why-chargebay-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#3A86FF" stroke-width="1" />
                                    <path d="M12 6V12L16 14" stroke="#3A86FF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="abt-charging-why-chargebay-feature-title">Real-Time & Personalised Updates</p>
                        </div>

                        <div className="abt-charging-why-chargebay-feature">
                            <div className="abt-charging-why-chargebay-icon">
                                <img src={routeicon} alt="" width={48} height={40} draggable='false' />
                            </div>
                            <p className="abt-charging-why-chargebay-feature-title">Plan Efficient Charging Trips</p>
                        </div>

                        <div className="abt-charging-why-chargebay-feature">
                            <div className="abt-charging-why-chargebay-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="4" width="18" height="12" rx="2" stroke="#3A86FF" stroke-width="1" />
                                    <line x1="3" y1="6" x2="21" y2="6" stroke="#3A86FF" stroke-width="1" />
                                    <line x1="3" y1="8" x2="21" y2="8" stroke="#3A86FF" stroke-width="1" />
                                    <line x1="5" y1="11" x2="9" y2="11" stroke="#3A86FF" stroke-width="1" />
                                    <circle cx="17" cy="13" r="1" fill="#3A86FF" />
                                </svg>
                            </div>
                            <p className="abt-charging-why-chargebay-feature-title">Hassle-Free Direct Payment</p>
                        </div>
                    </div>
                </section>
                <AnimatedSection animation='flyIn' direction='down'>
                    <section className="app-download abt-chargings">
                        <h2>Find out how seamless EV charging can be. Download the ChargeBay app</h2>
                        <div className="app-buttons">
                            <img src={playstore} alt="Get it on Google Play" />
                            <img src={appstore} alt="Download on the App Store" />
                        </div>
                    </section>
                </AnimatedSection>

                <section className="discover">
                    <h1>Discover ChargeBay Station</h1>
                    <a href="/products"><button className='learn-more transperant'><span>Find Now</span></button></a>
                </section>

                <AnimatedSection animation='flyIn' direction='down'>
                    <section className="asked-que">
                        <h2>Frequently Asked Questions?</h2>
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
                )}
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
            </main>
        </>
    )
}

export default AboutChargingPage