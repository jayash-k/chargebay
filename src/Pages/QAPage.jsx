import { React, useState, useEffect, useRef } from 'react'
import { FiPlus, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom'
import './QAPage.css'

import Header from '../Components/header'
import Footer from '../Components/Footer';
import MegaMenus from '../Components/MegaMenus';

import QAbannerimg from '../Images/QAbanner.png'
import AnimatedSection from '../Components/AnimatedSection';
function QAPage() {

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

  const productQA = [
    {
      title: 'Are ChargeBay chargers Water resistant?',
      description: 'Yes, ChargeBay equipment is built with a rugged design rated for outdoor use. The chargers are manufactured by Emporia and are UL-listed along with Energy Star certification.',
      content: [],
      firstcard: "first-accordion-item"
    },
    {
      title: 'What are the rebates or incentives for purchasing a charging station?',
      description: 'Typically, there are incentives available. To learn about federal, state, and local incentives that are currently available, please visit the Commercial Incentive Lookup(this is a link) page of our website.',
      content: [],
    },
    {
      title: 'If I Already have stations, how do I add more?',
      description: 'We can deploy more stations with available power or by utilizing local load management. Call your Sales Executive or contact us at +1 (757)-524-2743 {7575-CHARGE} to get started.',
      content: [],
      lastcard: 'last-accordion-item',
    },
  ];

  const managementQA = [
    {
      title: 'How does installation work for EV chargers? And where do I install them?',
      description: "EVSE Installations should always be performed under the guidance of a certified electrician or electrical engineer. Conduit and wiring runs from the main electrical panel, to the charging station's site. The charging station is then installed according to the manufacturer's specifications. You can find out more information by talking to our Executives.A full site assessment should be conducted in order to determine the best location for EV charger installation. We suggest Contacting us (link to contact us) to discuss more, it will not take long",
      content: [],
      firstcard: "first-accordion-item"
    },
    {
      title: 'How do I configure the chargers with a pricing structure, loitering penalty and access control?How can I customize pricing structure, loitering penalty, and access control while setting up chargers?',
      description: "During the onboarding process, before your chargers are live, ChargeBay’s Operations team will work directly with you to understand your property, your drivers, and goals. With this information, they will tailor the properties of the system and each EV charger accordingly. If these need to be modified after going live, they can either be adjusted directly through your account on ChargeBay Management System, our EV charging platform, or by contacting your ChargeBay Operations executive. Before your EV chargers become operational, during the onboarding process, ChargeBay's Operations team will collaborate closely with you to gain a comprehensive understanding of your property, drivers, and goals. Utilizing this information, they will customize the system's properties and each EV charger accordingly. Should you need to make adjustments after the initial setup, you can either modify them directly through your account on ChargeBay Management System, our EV charging platform, or by reaching out to your dedicated ChargeBay Operations executive.",
      content: [],
    },
    {
      title: 'Who sets the pricing rate?',
      description: 'With the Host-owned model, you possess the power to dictate the regulations and policies governing your stations. This includes determining who is permitted to use them and the associated electric vehicle charging fees. ChargeBay offers a valuable service by analyzing your electricity bills to provide guidance on charging rates. Our insights can help you recover energy costs while also aligning with the prevailing rates in your area, especially if your primary objective is revenue generation. Ultimately, the final decision regarding the charging rates rests solely with you',
      content: [],
    },
    {
      title: 'Does ChargeBay install the charging systems?',
      description: 'ChargeBay provides support for the installation and configuration of its equipment through its extensive network of certified electricians and electrical contractors across the country. Customers have the option to utilize their own contractors for the installation. However, ChargeBay will ensure that the necessary assistance is given to guarantee the proper commissioning of the equipment, ensuring its compatibility with the ChargeBay software.',
      content: [],
    },
    {
      title: 'Do you provide hardware support after the EV chargers are installed?',
      description: "ChargeBay offers continuous remote monitoring and support for all charging stations within its network, proactively identifying and addressing hardware issues. Equipment supplied by ChargeBay is covered by a 3-year manufacturer's warranty. Additionally, extended warranty and enhanced Operations and Maintenance Packages are available, included in the Revenue-shared and turn-key solution model. ChargeBay collaborates with on-site staff to facilitate required equipment replacements, ensuring seamless operations.",
      content: [],
    },

    {
      title: 'Can I restrict access to my charging station based on specific times?',
      description: 'Yes, you have the option to specify the days of the week and hours of the day during which your charging station is available for bookings.',
      content: [],
      lastcard: 'last-accordion-item',
    },
  ];

  const driversQA = [
    {
      title: 'What is the cost to charge? How much time is needed to Charge?',
      description: "When selecting a charging station in the ChargeBay mobile app, you can view the charging rates. These rates differ based on your location and the type of equipment used. The total cost of fully charging your vehicle depends on its battery capacity and make and mode. Adding your vehicle information can help get better estimates for charging costs and time. Consulting your car owner's manual for battery size and charging speed information can help you estimate the charging cost. Alternatively, you can contact our ChargeBay Customer Support team for assistance in determining charging costs. For further assistance, please reach out to our Customer Support (link provided).",
      content: [],
      firstcard: "first-accordion-item"
    },
    {
      title: 'How do I request a ChargeBay Card?',
      description: "Open the ChargeBay mobile app, make sure you are logged in, then press ‘Request Charge Card’ in the profile section for a digital card. You can choose to get a physical card shipped for a fee.",
      content: [],
    },
    {
      title: 'Benefits of the ChargeBay Card?',
      description: "ChargeBay Card is a simple RFID digital card for instant charger activation, directly linked to your preferred mode of payment. Just tap the card to the middle of the charger to activate charging. Although be aware that charging only lasts till the user stops charging from the app or is automatically stopped 15 minutes before the next booking, whichever comes first.",
      content: [],
    },
    {
      title: "Where should I go while my car is charging? What happens when I don’t check out in time?",
      description: "For residential sites, once you've plugged in your car, it's expected that you leave and return after your reservation ends. Please check-in at the time of starting the charge and check-out when the session ends. For commercial sites like retail locations, you have the option to stay in your vehicle during charging if preferred, but are expected to leave once charging is finished. Idle fee will be applied 10 minutes after booking ends resulting in $1/min.",
      content: [],
      lastcard: 'last-accordion-item',
    },
  ];



  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#driversQA') {
      const element = document.getElementById('driversQA');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.hash === '#hostQA') {
      const element = document.getElementById('hostQA');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.hash === '#hostProductsQA') {
      const element = document.getElementById('hostProductsQA');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.hash === '#hostManagementQA') {
      const element = document.getElementById('hostManagementQA');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

  }, [location]);

  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   const container = scrollContainerRef.current;
  //   const items = Array.from(container.children);
  //   const totalHeight = items[0].offsetHeight * items.length;

  //   // Duplicate items to create an infinite loop effect
  //   container.innerHTML += container.innerHTML;

  //   let currentScroll = 0;

  //   const scroll = () => {
  //     currentScroll += 1; // Adjust speed by changing this value
  //     container.style.transform = `translateY(-${currentScroll}px)`;

  //     // Reset when scrolled past original content height
  //     if (currentScroll >= totalHeight) {
  //       currentScroll = 0;
  //       container.style.transform = "translateY(0)";
  //     }
  //   };

  //   const intervalId = setInterval(scroll, 10); // Adjust interval for smoother scroll

  //   return () => clearInterval(intervalId); // Cleanup on unmount
  // }, []);

  return (
    <>
      <main>
        <section id='hero-header' style={{ backgroundImage: `url(${QAbannerimg})` }}>
          <header>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
          </header>

          <section className='qa-hero'>
            <AnimatedSection animation='flyIn' direction='left' length={100}>
              <h1>ChargeBay <span className='highlight-blue'>Q&A : </span><br />Your Questions Answered!</h1>
            </AnimatedSection>
          </section>
        </section>

        <section className="accordion-container qasection hostQA">

          <section className='faq-section'>
            <h1>All FAQs</h1>
            <div className='faq-section-all-faqs'>
              <div className='faq-section-all-faqs-host'>
                <a href='#hostQA'><h3>Host</h3></a>
                <div>
                  <a href='#hostProductsQA'><p>Products</p></a>
                  <a href='#hostManagementQA'><p>Management</p></a>
                </div>
              </div>
              <div className='faq-section-all-faqs-driver'>
                <h3>Drivers</h3>
                <a href='#driversQA'><p>All Driver FAQ</p></a>
              </div>
            </div>
          </section>

          <section>
            <h1 className='FAQ-header' id='hostQA'>Host FAQs</h1>
            <h4 className='FAQ-sub-header' id='hostProductsQA'>Products</h4>
            <div className='accordion-item-container'>
              {productQA.map((item, index) => (
                <div key={index} className={`accordion-item ${item.firstcard} ${item.lastcard} ${activeIndex === index ? 'active' : ''}`}>
                  <div className="accordion-header" onClick={() => handleToggle(index)}>
                    <span className='driversQAheader'>{item.title}</span>
                    <span className='accordion-item-icon'>{activeIndex === index ? (isMobileView ? <FiX size={15} /> : <FiX size={20} />) : (isMobileView ? <FiPlus size={15} /> : <FiPlus size={20} />)}</span>
                  </div>
                  <div className="accordion-content">
                    <p>{item.description}</p>
                    <p>{item.description2}</p>
                    <ul>
                      {item.content.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>
            <h4 className='FAQ-sub-header' id='hostManagementQA'>Management</h4>
            <div className='accordion-item-container'>
              {managementQA.map((item, index) => (
                <div key={index} className={`accordion-item ${item.firstcard} ${item.lastcard} ${activeIndex === index ? 'active' : ''}`}>
                  <div className="accordion-header driversQA" onClick={() => handleToggle(index)}>
                    <span className='driversQAheader'>{item.title}</span>
                    <span className='accordion-item-icon'>{activeIndex === index ? (isMobileView ? <FiX size={15} /> : <FiX size={20} />) : (isMobileView ? <FiPlus size={15} /> : <FiPlus size={20} />)}</span>
                  </div>
                  <div className="accordion-content">
                    <p>{item.description}</p>
                    <p>{item.description2}</p>
                    <ul>
                      {item.content.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>
            
          </section>
        </section>

        <section className="accordion-container qasection driversQA">
          <h1 className='FAQ-header' id='driversQA'>Driver FAQs</h1>
          <div className='accordion-item-container'>
            {driversQA.map((item, index) => (
              <div key={index} className={`accordion-item ${item.firstcard} ${item.lastcard} ${activeIndex === index ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => handleToggle(index)}>
                  <span className='driversQAheader'>{item.title}</span>
                  <span className='accordion-item-icon'>{activeIndex === index ? (isMobileView ? <FiX size={15} /> : <FiX size={20} />) : (isMobileView ? <FiPlus size={15} /> : <FiPlus size={20} />)}</span>
                </div>
                <div className="accordion-content">
                  <p>{item.description}</p>
                  <p>{item.description2}</p>
                  <ul>
                    {item.content.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

          {/* <section className="FAQ-detailes">
      <div className="FAQ-detailes-Question" ref={scrollContainerRef}>
        <div className="question-item">
          Have you ever shown up to a charging station, and it's either full, broken, or in the middle of nowhere?
        </div>
        <div className="question-item">Has charging ever made you late?</div>
        <div className="question-item">Has it felt like a chore?</div>
        <div className="question-item">What if you could charge wherever you go, guaranteed?</div>
        <div className="question-item lastQue">
          What if instead of waiting for your car to charge, you could sleep, shop, eat, and play on your terms?
        </div>
      </div>
      <h2>
        ChargeBay is a one-stop solution that allows you to find and reserve chargers in advance, so that you're never left
        in the dark about your charger.
      </h2>
    </section> */}

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

export default QAPage