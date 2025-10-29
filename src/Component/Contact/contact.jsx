
import './contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/contactus.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "250px", // full-screen hero
    color: "white",
  };

  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center text-center"
        // style={heroStyle}
        style={{ ...heroStyle, objectFit: "contain" }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Contact Us</h1>
        </div>
      </section>
      <section class="contact-page-sec">
        <div className='bg-light'>
          <div class="container py-3">
            <div class="row ">
              <div class="col-md-6">
                <div class="contact-info">
                  <div class="contact-info-item d-flex">
                    <div class="contact-info-icon">
                      <i class=" px-3 fas fa-map-marked"></i>
                    </div>
                    <div class="contact-info-text">
                      <h2>address</h2>
                      <span className='flex-wrap'>Teacher's colony near shiv temple Dhampur, Bijnor </span>
                    </div>
                  </div>
                </div>
                <div class="contact-info">
                  <div class="contact-info-item d-flex">
                    <div class="contact-info-icon">
                      <i class=" px-3 fas fa-envelope"></i>
                    </div>
                    <div class="contact-info-text">
                      <h2>E-mail</h2>
                      <span className='flex-wrap'>msrelivepharmaceuticals@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div class="contact-info">
                  <div class="contact-info-item d-flex">
                    <div class="contact-info-icon">
                      <i class=" px-3 fas fa-clock"></i>
                    </div>
                    <div class="contact-info-text">
                      <h2>Contact No</h2>
                      <span> +91-9536018986</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div className='p-3' style={{ background: "white" }}>
                  <div class="contact-page-form" method="post">
                    <h2 className='p-1'>Get in Touch</h2>
                    <form action="contact-mail.php" method="post" className='p-2'>
                      <div class="single-input-field">
                        <input type="text" placeholder="Your Name" name="name" />
                      </div>

                      <div class="single-input-field">
                        <input type="email" placeholder="E-mail" name="email" required />
                      </div>

                      <div class="single-input-field">
                        <input type="text" placeholder="Phone Number" name="phone" />
                      </div>

                      <div class="col-md-12 message-input">
                        <div class="single-input-field">
                          <textarea placeholder="Write Your Message" name="message"></textarea>
                        </div>
                      </div>
                      <Link to="/contact" className="btn btn-primary btn-lg">
                        Learn More
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-3">
              <div className="map-container" style={{ borderRadius: "10px", overflow: "hidden" }}>
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609941877!2d72.74109814261242!3d19.082197839662996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c57f8e8c5%3A0xe8b6d61a6b7a6!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1692345678901!5m2!1sen!2sin"
                  style={{ border: 0, width: "100%", height: "340px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
export default Contact;
