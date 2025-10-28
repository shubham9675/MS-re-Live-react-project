import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {



  return (
    <>
      <footer className="gi-footer">
        <div className="footer-container">
          <div className="footer-top py-3">
            <div className="container-fluid">
              <div className="row m-minus-991">
                <div className="col-sm-12 col-lg-4 gi-footer-cat wow fadeInUp">
                  <div className="gi-footer-widget gi-footer-company">
                    <img src="/img/logoimg.png" className="gi-footer-logo" alt="footer logo" />
                    <p className="gi-footer-detail text-dark">— MS Re-Live, we are dedicated to manufacturing and marketing high-quality medicines that enhance global healthcare.</p>
                    
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 gi-footer-info wow fadeInUp" data-wow-delay="0.2s">
                  <div className="gi-footer-widget">
                    <h4 className="gi-footer-heading text-dark">Useful Links</h4>
                    <div className="gi-footer-links gi-footer-dropdown">
                      <ul className="align-itegi-center">
                        <li className="gi-footer-link"><Link to="/contact">Contact</Link></li>
                        <li className="gi-footer-link"><Link to="/about">About</Link></li>
                        <li className="gi-footer-link"><Link to="/founder">Founder</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
               
                <div className="col-sm-12 col-lg-4 gi-footer-cont-social wow fadeInUp" data-wow-delay="0.5s">
                  <div className="gi-footer-contact">
                    <div className="gi-footer-widget">
                      <h4 className="gi-footer-heading text-dark">Contact</h4>
                      <div className="gi-footer-links gi-footer-dropdown">
                        <ul className="align-itegi-center">
                          <li className="gi-footer-link gi-foo-call">
                            <span className='mt-3'>
                              <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <p className='text-dark'>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
                          </li>
                          <li className="gi-footer-link gi-foo-call">
                            <span>
                              <i className="fa-brands fa-whatsapp"></i>
                            </span>
                            <Link to="tel:+009876543210">+00 9876543210</Link>
                          </li>
                          <li className="gi-footer-link gi-foo-mail">
                            <span>
                              <i className="fa-regular fa-envelope"></i>
                            </span>
                            <Link to="mailto:example@email.com">example@email.com</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="gi-footer-social">
                    <div className="gi-footer-widget">
                      <div className="gi-footer-links gi-footer-dropdown">
                        <ul className="align-itegi-center">
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
