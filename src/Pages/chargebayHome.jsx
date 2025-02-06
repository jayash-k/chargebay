import React from 'react';
import './chargebayHome.css';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedSection from '../Components/AnimatedSection';

import logo from "../Images/Logo White.png"
import logomob from "../Images/Logo Black.png"

import bannerimg from "../Images/banner.png"

import devicesimg from "../Images/devices2.png"
import devicesimgmob from "../Images/devices mobview2.png"
import chargerimg from "../Images/charger.png"

import reducecost from "../Images/cost.png"
import efficient from "../Images/efficient.png"
import supports from "../Images/img3.png"
import powerful from "../Images/powerful.png"

import multifamily from "../Images/multifamily.png"
import workplace from "../Images/workplace.png"
import retail from "../Images/publicretail.png"

import phone from "../Images/phone.png"

import phone1 from "../Images/Book a charger.png"
import phone2 from "../Images/Plan a trip.png"
import phone3 from "../Images/Multi-family charger sharing.png"
import phone4 from "../Images/Hosting a charger.png"
import phone5 from "../Images/Guaranteed parking spots.png"
import phone6 from "../Images/Smart-car integration.png"

import playstore from "../Images/googleplay.png"
import appstore from "../Images/appstore 1.png"

import featured from "../Images/featured.png"

import lookingfor1 from "../Images/looking1.png"
import lookingfor2 from "../Images/looking2.png"

import mapimg from "../Images/map.png"
import mapimgmob from "../Images/mapmob.png"

import revolution from "../Images/revolution.png"

import person from "../Images/person.png"

import casestudyimg from "../Images/case Study.png"

import Footer from '../Components/Footer';
import Header from '../Components/header';
import MegaMenus from '../Components/MegaMenus';

const ChargeBayHome = () => {

  useEffect(() => {
    const setViewport = () => {
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.name = "viewport";
        document.head.appendChild(viewportMeta);
      }
      viewportMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    };

    setViewport();
  }, []);

  useEffect(() => {
    const setViewport = () => {
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.name = "viewport";
        document.head.appendChild(viewportMeta);
      }
      viewportMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    };

    setViewport();
  }, []);

  const isMobileView = window.innerWidth <= 768;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const bannerimage = bannerimg;
    const hero = document.getElementById('hero-header');
    hero.style.backgroundImage = bannerimage;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center"
  }, []);

  const [activeSection, setActiveSection] = useState('reduce');
  const [slideDirection, setSlideDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const sections = [
    { id: 'reduce', title: 'Reduce Cost' },
    { id: 'efficient', title: 'Efficient Hardware' },
    { id: 'supports', title: 'ChargeBay Supports' },
    { id: 'software', title: 'Powerful Software' },
  ];

  const content = {
    reduce: {
      text: "We'll maximize the number of EV chargers you can safely install without triggering substantial infrastructure costs. Our Intelligent Load Manager, ChargeBay continuously manages the electricity being consumed by the chargers based on the capacity that is available at any given moment.",
      image: reducecost,
      alt: 'EV Charging Station',
      linkto: '/bussiness-model'
    },
    efficient: {
      text: "Our efficient hardware solutions optimize energy distribution, ensuring maximum performance with minimal infrastructure impact. ChargeBay's smart technology adapts to your specific needs, providing a cost-effective and scalable charging solution.",
      image: efficient,
      alt: 'Graph showing cost reduction and income increase',
      linkto: '/products'
    },
    supports: {
      text: "ChargeBay offers comprehensive support to ensure smooth operation of your EV charging infrastructure. Our team of experts is available 24/7 to address any concerns and provide guidance on optimizing your charging network.",
      image: supports,
      alt: 'Customer support representative',
      linkto: '/products'
    },
    software: {
      text: "Our powerful software suite provides real-time monitoring, analytics, and control of your EV charging network. From load balancing to user management, ChargeBay's software ensures efficient operation and maximizes your return on investment.",
      image: powerful,
      alt: 'Laptop with software interface',
      linkto: '/products'
    },
  };

  const handleSectionClick = (sectionId) => {
    if (isAnimating) return;
    const currentIndex = sections.findIndex(section => section.id === activeSection);
    const newIndex = sections.findIndex(section => section.id === sectionId);
    setSlideDirection(newIndex > currentIndex ? 'slide-left' : 'slide-right');
    setActiveSection(sectionId);
  };

  useEffect(() => {
    if (slideDirection) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setSlideDirection('');
        setIsAnimating(false);
      }, 500); // Match this to the animation duration in CSS
      return () => clearTimeout(timer);
    }
  }, [slideDirection]);

  const [activeTab, setActiveTab] = useState('multi-family');

  const tabs = [
    {
      id: 'multi-family',
      title: 'Multi-family',
      content: 'Hosting EV charging stations in multifamily proprities offers a valuable ammenity that caters to the growing demand for electric vehicle support.',
      image: multifamily,
      linkto: '/host-multifamily'
    },
    {
      id: 'workplace',
      title: 'Workplace',
      content: 'Hosting EV charging stations in multifamily proprities offers a valuable ammenity that caters to the growing demand for electric vehicle support.',
      image: workplace,
      linkto: '/host-commercial'
    },
    {
      id: 'public-retail',
      title: 'Public & Retail',
      content: 'Hosting EV charging stations in multifamily proprities offers a valuable ammenity that caters to the growing demand for electric vehicle support.',
      image: retail,
      linkto: '/host-commercial'
    }
  ];

  const Card = ({ title, description, buttonText, imageSrc, optionalcharger, linkto }) => (

    <div className="card-container">
      <img
        src={imageSrc}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <a href={linkto}><button className="card-button">{buttonText}</button></a>
      </div>
    </div>
  );

  const testimonials = [
    {
      id: 1,
      quote: "ChargeBay makes EV charging a breeze! The app is easy to use, with accurate station availability and seamless payment options like Apple Pay and cards. It's been my go-to for convenient, stress-free charging! The interface is intuitive, and I love how quickly I can find nearby stations. Highly recommend it to all EV owners!",
      name: "Aaron Powell",
      location: "Tampa, Florida",
      image: { person }
    },
    {
      id: 2,
      quote: "ChargeBay has completely simplified my EV charging experience! The app is super user-friendly, providing real-time station availability. It's my trusted solution for quick and hassle-free charging. The layout is clear and makes finding nearby stations a breeze. I'd recommend it to any EV driver looking for reliable and convenient charging!",
      name: "Wade Warren",
      location: "Tampa, Florida",
      image: { person }
    },
    {
      id: 3,
      quote: "ChargeBay makes EV charging a breeze! The app is easy to use, with accurate station availability and seamless payment options like Apple Pay and cards. It's been my go-to for convenient, stress-free charging! The interface is intuitive, and I love how quickly I can find nearby stations. Highly recommend it to all EV owners!",
      name: "Jane Cooper",
      location: "Tampa, Florida",
      image: { person }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);

  const handleNextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    testimonialRef.current.scrollTo({
      left: nextIndex * (testimonialRef.current.offsetWidth - 500), // Adjust scroll position
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const interval = setInterval(handleNextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);



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

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#app-demo') {
      const element = document.getElementById('app-demo');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.hash === '#cost') {
      const element = document.getElementById('Scrollcost');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.hash === '#ourPartners') {
      const element = document.getElementById('ourPartners');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


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

  const containerStyle = isMobileView
    ? {
      display: 'grid',
      gap: '15px',
      width: 'fit-content'
    }
    : {
      display: 'flex',
      gap: '25px',
    };

  const [activeButton, setActiveButton] = useState(0); // Tracks which button is primary
  let intervalRef = React.useRef(null); // Reference for setInterval

  // Buttons and corresponding images
  const buttons = [
    "Booking a charge",
    "Trip Planning",
    "Multi-family charger sharing",
    "Hosting a charger",
    "Guaranteed parking spots",
    "Smart-car integration",
  ];

  const images = [
    phone1, // Corresponds to button 1
    phone2, // Corresponds to button 2
    phone3, // Corresponds to button 3
    phone4, // Corresponds to button 4
    phone5, // Corresponds to button 5
    phone6, // Corresponds to button 6
  ];

  // Function to start or reset the interval
  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveButton((prev) => (prev + 1) % buttons.length); // Cycle to next button
    }, 3000);
  };

  useEffect(() => {
    startInterval(); // Start the interval on component mount
    return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
  }, []);

  // Handle button click
  const handleButtonClick = (index) => {
    setActiveButton(index); // Set clicked button as active
    startInterval(); // Restart interval from the clicked button
  };

  return (
    <div className="chargebay-home">
      <main>
        <div id='hero-header' style={{ backgroundImage: `url(${bannerimg})` }}>
          <header>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
          </header>

          <section className="hero">
            <AnimatedSection animation="flyIn" length={100} direction='left'>
              <div className="hero-content">
                <h1 >America's most <span className="highlight-green">affordable</span> EV charging Ecosystem</h1>
                <p>For business and hosts looking to expand without hassle</p>
                <div style={containerStyle}>
                  <Link to="/host-multifamily"> <button className="learn-more transperant" ><span>Learn More</span></button></Link>
                  <Link to='/#app-demo'><button className="learn-more transperant" ><span>Download Now</span></button></Link>
                </div>
              </div>
            </AnimatedSection>
            <div className="hero-image">
              <AnimatedSection animation="scaleIn">
                <img src={devicesimgmob} className='devicesimgmob' draggable='false' />
                <img src={devicesimg} className='devicesimgdesk' draggable='false' />
              </AnimatedSection>
            </div>
          </section>
        </div>

        <section className="greener-future">
          <AnimatedSection animation="slideIn">
            <h2>Commit to a <span className="highlight-green">greener</span> future while fool-proofing your business.</h2>
            <p>Transitioning to an EV-ready property can be challenging—that's where you contact ChargeBay.</p>
          </AnimatedSection>
        </section>

        <section className="streamlinesection">
          <div className='streamline'>
            <p>Designed to streamline the complexities of multi-vehicle EV charging stations, ChargeBay provides <span className="highlight-black">seamless charging & power management</span> for any commercial development, along with easy booking and scheduling convenience for customers.</p>
            <a href="/host-commercial"><button className="learn-more-white transperant"><span>Learn More</span></button></a>
          </div>

          <div className='chargerimagediv'>
            <AnimatedSection animation='flyIn' direction='down'>
              <img src={chargerimg} alt="" />
            </AnimatedSection>
          </div>

        </section>

        <section className="cost-benefit" >
          <div className="home" id='Scrollcost'>
            <h1 className="title">
              ChargeBay <span className="green">Decreases</span> Turn Around Costs<br /> While <span className="blue">Increasing</span> Net Operating Income
            </h1>
            <div className="sections">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`cost-section ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  {section.title} {activeSection === section.id ? '-' : '+'}
                </button>
              ))}
            </div>
            <div className="content-wrapper">
              <div className={`content ${slideDirection}`}>
                <div className="text">
                  <p>{content[activeSection].text}</p>
                  <a href={content[activeSection].linkto}><button className="learn-more transperant"><span>Learn More</span></button></a>
                </div>
                <div className="image-container">
                  <img src={content[activeSection].image} alt={content[activeSection].alt} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='family-section'>
          <AnimatedSection animation='slideIn' direction='up' delay={0.5}>
            <div className="family-container">
              <div className="sidebar">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`tab-buttonmob tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="family-content">
                {tabs.map(tab => (
                  <div
                    key={tab.id}
                    className={`tab-content ${activeTab === tab.id ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${tab.image})` }}
                  >
                    <div className="overlay">
                      <h2>{tab.title}</h2>
                      <p>{tab.content}</p>
                      <a href={tab.linkto}><button className="learn-more transperant"><span>Learn More</span></button></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section className="app-features">
          <div className="app-content" id="app-demo">
            <h1>
              ChargeBay App,
              <br />
              A <span className="highlight-blue">One-Stop Solution</span> for
            </h1>
            <div>
              <div className="feature-two-btn">
                <button
                  className={`feature-btn ${activeButton === 0 ? "primary" : ""}`}
                  onClick={() => handleButtonClick(0)}
                >
                  Booking a charge
                </button>
                <button
                  className={`feature-btn ${activeButton === 1 ? "primary" : ""}`}
                  onClick={() => handleButtonClick(1)}
                >
                  Trip Planning
                </button>
              </div>
              <div className="feature-two-btn">
                <button
                  className={`feature-btn ${activeButton === 2 ? "primary" : ""}`}
                  onClick={() => handleButtonClick(2)}
                >
                  Multi-family charger sharing
                </button>
                <button
                  className={`feature-btn ${activeButton === 3 ? "primary" : ""}`}
                  onClick={() => handleButtonClick(3)}
                >
                  Hosting a charger
                </button>
              </div>
              <div className="feature-two-btn">
                <button
                  className={`feature-btn ${activeButton === 4 ? "primary" : ""}`}
                  onClick={() => handleButtonClick(4)}
                >
                  Guaranteed parking spots
                </button>
                <button
                  className={`feature-btn ${activeButton === 5 ? "primary" : ""}`}
                  onClick={() => handleButtonClick(5)}
                >
                  Smart-car integration
                </button>
              </div>
            </div>
            <div className="app-stores">
              <a href="#" className="store-link">
                <img src={playstore} alt="Get it on Google Play" />
              </a>
              <a href="#" className="store-link">
                <img src={appstore} alt="Download on the App Store" />
              </a>
            </div>
          </div>
          <div className="phone-mockup">
            <AnimatedSection
              animation={!isMobileView ? "flyIn" : ""}
              direction="right"
              length={!isMobileView ? 150 : 0}
              delay={0.5}
            >
              {/* Dynamically change the image based on activeButton */}
              <img src={images[activeButton]} alt="ChargeBay App Mockup" id="phone-mockup-img" />
            </AnimatedSection>
          </div>
        </section>

        <section className="looking-for">
          <AnimatedSection animation='flyIn' direction='down'>
            <div className='section-container'>
              <h2 className="section-title">Looking for</h2>
              <div className="card-grid">
                <Card
                  title="A guaranteed charging session at your convenience."
                  description=""
                  buttonText="Book Now"
                  linkto='/#app-demo'
                  imageSrc={lookingfor1}
                />
                <Card
                  title="Providing efficient EV charging service, without breaking the bank."
                  description=""
                  buttonText="Learn More"
                  linkto='/contact-us'
                  imageSrc={lookingfor2}
                />
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* <section id="map-section" className="map" >
          <h2>ChargeBay- Making EV Charging <span className="highlight-green">Easy</span></h2>
          <div className="map-container">
            <img src={mapimg} alt="" className='mapdesk' draggable='false' />
            <img src={mapimgmob} alt="" className='mapmob' draggable='false' />
          </div>
        </section> */}

        <section className="app-download">
          <h2>Find out how seamless EV charging can be.<br /> Download the ChargeBay app</h2>
          <div className="app-buttons">
            <img src={playstore} alt="Get it on Google Play" />
            <img src={appstore} alt="Download on the App Store" />
          </div>
        </section>

        <section className="featured" id='ourPartners'>
          <h2>Featured in</h2>
          <div className="featured-logos">
            <img src={featured} alt="Featured" draggable='false' />
          </div>
        </section>

        <section className='revolution-section'>
          <AnimatedSection animation='flyIn' direction='down'>
            <div className='revolution'>
              <h1>Electric <span className='highlight-blue'>Revolution</span>  in the US in numbers :</h1>
              <h3>There is a gap in the no of EV and available chargers, <span className='highlight-blue'>ChargeBay</span> Helps to fill this gap</h3>
              <a href='/host-commercial'><button className='learn-more-white transperant'><span>Learn More</span></button></a>
            </div>
            <img src={revolution} alt="revolution image" />
          </AnimatedSection>
        </section>

        <section className="customer-testimonials">
          <div className="customer-container">
            <h2 className="customer-section-title">
              What Our Customer Say
            </h2>
            <div
              ref={testimonialRef}
              className="customer-testimonial-list"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="customer-testimonial-item"
                >
                  <div className="customer-testimonial-card">
                    <div className="customer-quote-mark">"</div>
                    <blockquote className="customer-testimonial-quote">
                      {testimonial.quote}
                    </blockquote>
                    <div className="customer-testimonial-footer">
                      <img
                        alt={testimonial.name}
                        className="customer-testimonial-image"
                        height="40"
                        src={person}
                        width="40"
                      />
                      <div>
                        <div className="customer-testimonial-name">{testimonial.name}</div>
                        <div className="customer-testimonial-location">{testimonial.location}</div>
                      </div>
                      <button
                        onClick={handleNextTestimonial}
                        className="customer-next-testimonial-btn"
                        aria-label="Next testimonial"
                      >
                        <ArrowRight className="customer-arrow-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="community">
          <h1>Want your community/ service to host?</h1>
          <a href='/contact-us'><button className='learn-more transperant'><span>Contact Now</span></button></a>
        </section>

        <AnimatedSection animation='slideIn' direction='up'>
          <section className="case-study">
            <div className="case-study-content">
              <h2 className="case-study-subtitle">Case Study</h2>
              <h1 className="case-study-title">
                How Multi-Family Housing Properties Can Embrace Affordable EV Charging Solutions
              </h1>
              <h6 className="case-study-description">
                The demand for electric vehicle (EV) charging is surging, and for multi-family housing (MFH) properties, this shift presents both a challenge and an opportunity. Meeting the needs of EV-owning residents doesn’t have to mean expensive upgrades or logistical nightmares. A recent project demonstrates how affordable and smart EV solutions can help MFH properties become "EV-ready" while staying within budget.
              </h6>
              <Link to={'https://season-field-bfe.notion.site/How-Multi-Family-Housing-Properties-Can-Embrace-Affordable-EV-Charging-Solutions-ce106c0eedbd4e5480f434ed99784a09'}><button className="learn-more-white"><span>Learn More</span></button></Link>
            </div>
            <div className="case-study-image">
              <img src={casestudyimg} alt="Modern apartment building with EV charging stations" />
            </div>
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
    </div>
  );
};

export default ChargeBayHome;