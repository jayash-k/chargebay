import { React, useState } from "react";
import './PrivacyPolicyPage.css'
import Header from "../Components/header";
import Footer from "../Components/Footer";
import MegaMenus from "../Components/MegaMenus";

export default function PrivacyPolicy() {
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
      <article className="privacy-policy-container">
        <header className="privacy-policy-header">
          <h1 className="privacy-policy-title">Privacy Policy</h1>
          <p className="privacy-policy-lastUpdated">Last updated - 10/09/2024</p>
        </header>

        <section className="privacy-policy-section">
          <p>
            This Privacy Notice for <strong>ChargeBay LLC</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
          </p>
          <ol className="privacy-policy-list">
            <li>Use the ChargeBay application/website</li>
            <li>Integrate your vehicle with ChargeBay</li>
            <li>Host a station with ChargeBay</li>
          </ol>
        </section>

        <section className="privacy-policy-highlight">
          <h2 className="privacy-policy-subtitle">Questions or concerns?</h2>
          <p>
            Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.
          </p>
        </section>

        <section className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">SUMMARY OF KEY POINTS</h2>
          <p>
            This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
          </p>
          <div className="privacy-policy-keyPoints">
            <div>
              <h3 className="privacy-policy-subtitle">What personal information do we process?</h3>
              <p>
                When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
              </p>
            </div>
            <div>
              <h3 className="privacy-policy-subtitle">Do we process any sensitive personal information?</h3>
              <p>
                Some of the information may be considered &quot;special&quot; or &quot;sensitive&quot; in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
              </p>
            </div>
            <div>
              <h3 className="privacy-policy-subtitle">Do we collect any information from third parties?</h3>
              <p>
                We may collect information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources.
              </p>
            </div>
            <div>
              <h3 className="privacy-policy-subtitle">How do we process your information?</h3>
              <p>
                We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
              </p>
            </div>
            <div>
              <h3 className="privacy-policy-subtitle">In what situations and with which parties do we share personal information?</h3>
              <p>
                We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
              </p>
            </div>
            <div>
              <h3 className="privacy-policy-subtitle">What are your rights?</h3>
              <p>
                Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
              </p>
            </div>
            <div>
              <h3 className="privacy-policy-subtitle">How do you exercise your rights?</h3>
              <p>
                The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
              </p>
            </div>
          </div>
          <p className="privacy-policy-fullNotice">
            Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.
          </p>
        </section>

        <section className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">TABLE OF CONTENTS</h2>
          <ol className="privacy-policy-tableOfContents">
            <li><a href="#section-1" className="privacy-policy-link">WHAT INFORMATION DO WE COLLECT?</a></li>
            <li><a href="#section-2" className="privacy-policy-link">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
            <li><a href="#section-3" className="privacy-policy-link">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
            <li><a href="#section-4" className="privacy-policy-link">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
            <li><a href="#section-5" className="privacy-policy-link">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
            <li><a href="#section-6" className="privacy-policy-link">IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a></li>
            <li><a href="#section-7" className="privacy-policy-link">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
            <li><a href="#section-8" className="privacy-policy-link">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
            <li><a href="#section-9" className="privacy-policy-link">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
            <li><a href="#section-10" className="privacy-policy-link">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
            <li><a href="#section-11" className="privacy-policy-link">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
            <li><a href="#section-12" className="privacy-policy-link">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
            <li><a href="#section-13" className="privacy-policy-link">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
          </ol>
        </section>

        <section id="section-1" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">1. WHAT INFORMATION DO WE COLLECT?</h2>
          <h3 className="privacy-policy-subtitle">Personal information you disclose to us</h3>
          <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <p><strong>Sensitive Information</strong>. We do not process sensitive information.</p>
          <p>
            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
          </p>
          <h3 className="privacy-policy-subtitle">Information automatically collected</h3>
          <p><strong>In Short:</strong> Some information - such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>
            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
          </p>
          <p>
            Like many businesses, we also collect information through cookies and similar technologies.
          </p>
        </section>

        <section id="section-2" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
          <p>
            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>
          <ul className="privacy-policy-list">
            <li>To provide and manage our Services</li>
            <li>To communicate with you</li>
            <li>To process your payments</li>
            <li>To monitor and improve our Services</li>
          </ul>
        </section>

        <section id="section-3" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
          <p><strong>In Short:</strong> We may share your information in specific situations and with specific third parties.</p>
          <p>We may share your information with the following categories of third parties:</p>
          <ul className="privacy-policy-list">
            <li>Service providers</li>
            <li>Business partners</li>
            <li>Legal authorities</li>
          </ul>
        </section>

        <section id="section-4" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
          <p>We may use cookies and similar tracking technologies to access or store information. You can find out more about our use of cookies and how to manage them in our Cookie Policy.</p>
        </section>

        <section id="section-5" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
          <p><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>
          <p>
            If you choose to register or log in to our Services using a third-party social media account (such as Facebook, Google, or Twitter), we may access certain information from your social media account. This information may include your name, email address, profile picture, and other information you allow the third-party to share with us.
          </p>
        </section>

        <section id="section-6" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
          <p><strong>In Short:</strong> We may transfer, store, and process your information in countries other than your own.</p>
          <p>
            Our servers are located in various countries, including the United States. If you are located outside of the United States, please be aware that we may transfer, store, and process your information in countries where privacy laws may differ from those in your jurisdiction.
          </p>
        </section>

        <section id="section-7" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p><strong>In Short:</strong> We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
          <p>
            We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law. After this period, we will either delete or anonymize your information.
          </p>
        </section>

        <section id="section-8" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p><strong>In Short:</strong> We do not knowingly solicit information from minors.</p>
          <p>
            We do not knowingly solicit information from minors under the age of 13 (or equivalent minimum age in your jurisdiction). If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
          </p>
        </section>

        <section id="section-9" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p><strong>In Short:</strong> You may have certain rights regarding your personal information, depending on where you are located.</p>
          <p>
            Depending on the laws of your jurisdiction, you may have the right to access, correct, delete, or restrict how we process your personal information. You also have the right to withdraw your consent to our processing of your information at any time.
          </p>
        </section>

        <section id="section-10" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p><strong>In Short:</strong> We do not respond to "Do Not Track" signals.</p>
          <p>
            Some web browsers may have a "Do Not Track" feature that sends a signal to websites you visit to request that they do not track your online activities. We do not currently respond to "Do Not Track" signals.
          </p>
        </section>

        <section id="section-11" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <p><strong>In Short:</strong> Yes, we may update this Privacy Notice from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
          <p>
            We may update this Privacy Notice from time to time in order to reflect changes to our practices, technological developments, or legal requirements. We will notify you of any significant changes by posting an updated version on our website and revising the "Last Updated" date at the top of the notice.
          </p>
        </section>

        <section id="section-12" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p><strong>In Short:</strong> You can contact us if you have any questions about this Privacy Notice.</p>
          <p>
            If you have any questions or concerns about this Privacy Notice or our privacy practices, please contact us at the following:
          </p>
          <ul className="privacy-policy-contactDetails">
            <li>Email: privacy@chargebay.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </section>

        <section id="section-13" className="privacy-policy-section">
          <h2 className="privacy-policy-sectionTitle">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          <p><strong>In Short:</strong> You have the right to review, update, or delete your personal data.</p>
          <p>
            Depending on your jurisdiction, you may have the right to review, update, or delete the personal data we hold about you. To do so, please contact us at the provided contact details.
          </p>
        </section>
      </article>
      <Footer />
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
    </>
  );
}