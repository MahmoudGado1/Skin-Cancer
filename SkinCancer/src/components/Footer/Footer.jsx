import "./Footer.css";
import Logo from "../../assets/logo/logo2_footer.png";
import { Copyright, Facebook, Instagram, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const footerLinks = [
  {
      title: "Resources",
      links: [
          { name: "Skin Cancer Types", link: "/basal-cell-carcinoma" },
          { name: "Early Detection", link: "/skin-cancer" },
          { name: "Prevention Tips", link: "" },
          { name: "Treatment Options", link: "/basal-cell-carcinoma" },
          { name: "Support Groups", link: "" },
      ],
  },
  {
      title: "Support",
      links: [
          { name: "About Us", link: "/about" },
          { name: "FAQs", link: "" },
          { name: "How It Works", link: "" },
          { name: "Privacy Policy", link: "" },
          { name: "Terms of Service", link: "" },
      ],
  },
  {
      title: "Contact Us",
      links: [
          { name: "support@skincancer.org", link: "mailto:support@skincancer.org" },
          { name: "+1234567890", link: "tel:+1234567890" },
      ],
  },
];

const socialMedia = [
  { src: Facebook, alt: "facebook logo" },
  { src: Twitter, alt: "twitter logo" },
  { src: Instagram, alt: "instagram logo" },
];
const Footer = () => {
  const location = useLocation();
  
  if (location.pathname.includes("/login") || location.pathname.includes("/register")) {
    return null;
  }

  return (
    <footer className='footer-container'>
      <div className='footer-top'>
        <div className='footer-logo'>
          <Link to='/'>
            <img src={Logo} alt='Footer Logo' />
          </Link>
          <p className='footer-description'>
            Learn about skin cancer and find doctors for guidance.
          </p>
          <div className='footer-social'>
            {socialMedia.map((icon) => (
              <div className='social-icon' key={icon.alt}>
                <icon.src />
              </div>
            ))}
          </div>
        </div>

        <div className='footer-links'>
          {footerLinks.map((section) => (
            <div key={section.title} className='footer-section'>
              <h4 className='footer-title'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className='footer-link' key={link.name}>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='footer-copyright'>
          <Copyright />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='footer-terms'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;


