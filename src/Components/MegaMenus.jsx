import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation, Link } from 'react-router-dom';
import driversimg from "../Images/driver.png"
import hostimg from "../Images/host.png"
import oursoltionimg from '../Images/oursolution.png'

function MegaMenus({ activeNavItem, setIsNavItemHover, toggleForm }) {

  const navsitm = document.getElementById(activeNavItem)

  const navItems = document.getElementsByClassName("nav-item")

  const handleMouseEnter = () => {
    setIsNavItemHover(activeNavItem);
  };

  const handleMouseLeave = () => {
    setIsNavItemHover(null);
  };

  switch (activeNavItem) {
    case 'drivers':
      return (
        <div className='mega-menudiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div className="mega-menu-image">
                <img src={driversimg} alt="Driver using ChargeBay app" draggable='false' />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>CHARGERS</h3>
                  <ul>
                    <li><a href="#"><Link to="/#app-demo">Find A Charger</Link></a></li>
                    <li><a href="#"><li><Link to="/#app-demo">Get started with the ChargeBay app</Link></li></a></li>
                    <li><a href="/#cost">Why Use ChargeBay?</a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>RESOURCES</h3>
                  <ul>
                    <li><a href="/Q&A#driversQA">Driver FAQs</a></li>
                    <li><a href='/contact-us'>Get Help</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'hosts':
      return (
        <div className='mega-menudiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div className="mega-menu-image">
                <img src={hostimg} alt="ChargeBay station host" draggable='false' />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>PROPERTIES</h3>
                  <ul>
                    <li><a href="/host-multifamily">Multifamily Housing </a></li>
                    <li><a href="/host-commercial">Commercial Worspace & Retail</a></li>
                    <li><a href="/calculator">Charging Projection Calculator</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>RESOURCES</h3>
                  <ul>
                    <li><a href="#"><Link to="/#app-demo">Host Login</Link></a></li>
                    <li><a href="/bussiness-model">Charging Business Model</a></li>
                    <li><a href="/host-commercial">Commercial Incentive Lookup</a></li>
                    <li><a href="/contact-us">Support & Sales </a></li>
                    <li><a href="/Q&A#hostQA">Host FAQs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'solution':
      return (
        <div className='mega-menudiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div className="mega-menu-image">
                <img src={oursoltionimg} alt="ChargeBay solution overview" draggable='false' />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>PRODUCTS</h3>
                  <ul>
                    <li><a href="/products">All Products</a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>RESELLER</h3>
                  <ul>
                    <li><a href="/reseller">Become a Reseller</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'partners':
      return (
        <div className='mega-menudiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div className="mega-menu-image">
                <img src={oursoltionimg} alt="ChargeBay solution overview" draggable='false' />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>OUR PARTNERS</h3>
                  <ul>
                    <li><a href="/products">Become a Reseller</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3><br></br></h3>
                  <ul>
                    <li><a href="/#cost">Who Trusts Us?</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'company':
      return (
        <div className='mega-menudiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div className="mega-menu-image">
                <img src={oursoltionimg} alt="ChargeBay solution overview" draggable='false' />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>THE COMPANY</h3>
                  <ul>
                    <li><a href="/products">About Us</a></li>
                    <li><a href="/T&C">T&C</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3><br></br></h3>
                  <ul>
                    <li><a href="/contact-us">Contact</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default MegaMenus