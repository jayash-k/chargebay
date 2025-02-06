import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../Pages/chargebayHome.css"

import AnimatedSection from './AnimatedSection'

import logo from "../Images/Logo White.png"
import logomob from "../Images/Logo Black.png"

import { ChevronDown } from 'lucide-react'

const Header = ({ isMenuOpen, toggleMenu, toggleForm, setIsNavItemHover }) => {

  const navs = document.getElementsByClassName("nav-item")

  const [activeMenu, setActiveMenu] = useState(null);

  // Desktop: this is unchanged
  const handleNavItemClick = (item) => {
    setIsNavItemHover(item);
  };

  return (
    <>
      <header className="header">
        <AnimatedSection animation="flyIn" direction="up">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Logo" draggable="false" style={{}} /></Link>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="flyIn" direction="up">
          <nav id='desknavs'>
            <ul>
              <li className="nav-item" id='drivers'
                onClick={() => handleNavItemClick('drivers')}
              >
                <a className="nav-link">Drivers <ChevronDown className="dropdown-arrow" /></a>
              </li>
              <li className="nav-item" id='hosts'
                onClick={() => handleNavItemClick('hosts')}
              >
                <a className="nav-link">Hosts <ChevronDown className="dropdown-arrow"></ChevronDown></a>

              </li>
              <li className="nav-item" id='solution'
                onClick={() => handleNavItemClick('solution')}
              >
                <a className="nav-link">Our Solution <ChevronDown className="dropdown-arrow"></ChevronDown></a>
              </li>
              <li className="nav-item"
                onClick={() => handleNavItemClick('partners')}>
                <a className="nav-link">Our Partners<ChevronDown className="dropdown-arrow"></ChevronDown></a>
              </li>
              <li className="nav-item last-nav-item"
                onClick={() => handleNavItemClick('company')}>
                <a className="nav-link">The Company<ChevronDown className="dropdown-arrow"></ChevronDown></a>
              </li>
              <div className="cta-buttons">

                <Link to={"/contact-us"}><button className="host-station" ><span>Host a Station</span></button></Link>
                <button onClick={toggleForm} className="learn-more contacts">
                  <span>Contact</span>
                </button>
              </div>
            </ul>
          </nav>
          <nav id='mobnavs'>
            <button id={isMenuOpen ? 'toggled' : ''} className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? 'X': '☰'}
            </button>
            <ul className={isMenuOpen ? 'open' : 'close'}>
              <div className="logo-nav">
                <img src={logomob} alt="Logo" />
              </div>
              <li className="nav-item">
                {/* Hidden checkbox to toggle dropdown */}
                <input type="checkbox" id="mobile-drivers" className="dropdown-toggle" hidden />
                <label htmlFor="mobile-drivers" className="nav-link">
                  Drivers <ChevronDown className="dropdown-arrow" />
                </label>
                <ul className="dropdown-menu">
                  <li>
                    <h3>CHARGERS</h3>
                    <li><a href="/#app-demo">Find A Charger</a></li>
                    <li><a href="/#app-demo">Get started with the ChargeBay app</a></li>
                    <li><a href="/#cost">Why Use ChargeBay?</a></li>
                  </li>
                  <li>
                    <h3>RESOURCES</h3>
                    <li><a href="/Q&A#driversQA">Driver FAQs</a></li>
                    <li><a href='/contact-us'>Get Help</a></li>
                  </li>
                </ul>
              </li>

              {/* Mobile Nav Item for "Hosts" */}
              <li className="nav-item">
                <input type="checkbox" id="mobile-hosts" className="dropdown-toggle" hidden />
                <label htmlFor="mobile-hosts" className="nav-link">
                  Hosts <ChevronDown className="dropdown-arrow" />
                </label>
                <ul className="dropdown-menu">
                  <li>
                    <h3>PROPERTIES</h3>
                    <li><a href="/host-multifamily">Multifamily Housing </a></li>
                    <li><a href="/host-commercial">Commercial Worspace & Retail</a></li>
                    <li><a href="/calculator">Charging Projection Calculator</a></li>
                  </li>
                  <li>
                    <h3>RESOURCES</h3>
                    <li><a href="/#app-demo">Host Login</a></li>
                    <li><a href="/bussiness-model">Charging Bussiness Model</a></li>
                    <li><a href="/host-commercial">Commercial Incentive Lookup</a></li>
                    <li><a href="/contact-us">Support & Sales </a></li>
                    <li><a href="/Q&A#hostQA">Host FAQs</a></li>
                  </li>
                </ul>
              </li>

              {/* Mobile Nav Item for "Our Solution" */}
              <li className="nav-item">
                <input type="checkbox" id="mobile-solution" className="dropdown-toggle" hidden />
                <label htmlFor="mobile-solution" className="nav-link">
                  Our Solution <ChevronDown className="dropdown-arrow" />
                </label>
                <ul className="dropdown-menu">
                  <li>
                    <h3>PRODUCTS</h3>
                    <li><a href="/products">All Products</a></li>
                  </li>
                  <li>
                    <h3>RESELLER</h3>
                    <li><a href="/reseller">Become a Reseller</a></li>
                  </li>
                </ul>
              </li>

              {/* Mobile Nav Item for "Our Partners" */}
              <li className="nav-item">
                <input type="checkbox" id="mobile-partners" className="dropdown-toggle" hidden />
                <label htmlFor="mobile-partners" className="nav-link">
                  Our Partners <ChevronDown className="dropdown-arrow" />
                </label>
                <ul className="dropdown-menu">
                  <li>
                    <h3>OUR PARTNERS</h3>
                    <li><a href="/products">Become a Reseller</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="/#cost">Who Trusts Us?</a></li>
                  </li>
                </ul>
              </li>

              {/* Mobile Nav Item for "The Company" */}
              <li className="nav-item">
                <input type="checkbox" id="mobile-company" className="dropdown-toggle" hidden />
                <label htmlFor="mobile-company" className="nav-link">
                  The Company<ChevronDown className="dropdown-arrow" />
                </label>
                <ul className="dropdown-menu">
                  <li>
                    <h3>THE COMPANY</h3>
                    <li><a href="/products">About Us</a></li>
                    <li><a href="/T&C">T&C</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                  </li>
                </ul>
              </li>

              <h5>Are you host?</h5>
              <h3>
                <a href="/login" style={{ textDecoration: 'none', color: 'black' }}>Log in &#x2192;</a>
              </h3>
              <div className="cta-buttons">
                <button onClick={toggleForm} className="navbtn contacts"><span>Contact</span></button>
                <button className="navbtn" onClick={() => window.open("/contact-us")}><span>Host a Station</span></button>
              </div>
            </ul>
          </nav>
        </AnimatedSection>
      </header>
    </>
  )
}

export default Header
