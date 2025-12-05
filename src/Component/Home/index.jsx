import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './index.css';
import Certificate from './certificate';
import MedicineExport from './Export';
import Medicine from './Medicine';

function Home() {


  const testimonials = [
  {
    name: "Aarav Sharma",
     image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1", 
    text: "Amazing service! The products were top-notch and delivery was super fast. Highly recommend!",
  },
  {
    name: "Neha Patel",
     image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    text: "Excellent platform for medical supplies. Easy to use and very professional support team!",
  },
  {
    name: "Rohit Verma",
     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "The user experience is seamless. I found everything I needed quickly and securely.",
  },
];



  return (
    <>
      <section className="bg-light p-3 ">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Text Section */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="fw-semibold mb-3">
                Welcome to <span className="text-primary">MS Re-Live</span>
              </h1>
              <p className="text-secondary">
                MS Re-Live ensures unmatched quality through advanced manufacturing, offers a diverse product range, and prioritizes customer satisfaction. Our commitment to innovation, ethical practices, and timely delivery makes us a trusted partner in healthcare solutions worldwide.
              </p>
              <div>
                <Link to="/contact" className="btn btn-outline-dark btn-lg">
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-md-6 mt-4 mt-md-0 text-center">
              <img
                src="\img\Untitled-design-2024-11-26T142121.825.png"
                alt="Hero"
                className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What Our Customers Say</h2>

          <div className="row g-4">
            {testimonials.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-sm h-100 testimonial-card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-center mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-circle"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                    </div>
                    <p className="text-muted fst-italic">“{item.text}”</p>
                    <h5 className="fw-bold mt-3 mb-0 text-dark">{item.name}</h5>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Medicine />

      <section className="about-us-section py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Image on Left */}
            <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
              <img
                src="/img/homeopathy-vs-allopathy.jpg" // Put your image in public/img/
                alt="About Us"
                className="img-fluid rounded shadow-sm"
              />
            </div>

            {/* Text on Right */}
            <div className="col-md-6">
              <div className="about-us-header mb-4">
                <div className="d-flex align-items-center mb-1">
                  <div className="line me-2"></div>
                  <span className="about-us-text">About Us</span>
                </div>
                <h2 className="who-we-are">Who We Are ?</h2>
                <hr className="dotted-line" />
              </div>
              <p className="text-dark mb-4">
                Ms Re-Live Pharma is an emerging force in the pharmaceutical industry, focused on delivering quality-assured healthcare solutions. We continuously expand our product portfolio, strengthen our supply chain, and adopt modern manufacturing technologies to achieve excellence.
                We aim to be a leading healthcare partner — <b className='fw-medium'> transforming challenges into opportunities for better health.</b>
              </p>
              <Link to="/about" className="btn btn-primary btn-lg">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container my-5">
        <div className="row align-items-center">

           <div className="col-md-6">
            <img
              src="/img/sucoon.jpeg"
              alt="Sample"
              className="img-fluid rounded shadow"
              style={{height:"00px"}}
            />
          </div>

           <div className="col-md-6">
            <h2>Medicine</h2>
            <p>
              This is a description of the medicine. It helps reduce pain and fever.
              Can be taken by adults and children with doctor’s advice.
            </p>
             <button className="btn btn-primary mt-3">Detail</button>
          </div>

        </div>
      </div> */}


      <Certificate />
      <MedicineExport />

    </>
  );
}
export default Home;
