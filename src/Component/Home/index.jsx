import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './index.css';
import MedicineExport from './Export';

function Home() {


  const testimonials = [
    {
      name: "Aarav Sharma",
      title: "Customer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_S5KjDvQNtRE1K4j2uD6Pq3ea47fl1iqGeQ&s",
      text: "Amazing service! The products were top-notch and delivery was super fast. Highly recommend!",
    },
    {
      name: "Neha Patel",
      title: "Pharmacist",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_S5KjDvQNtRE1K4j2uD6Pq3ea47fl1iqGeQ&s",
      text: "Excellent platform for medical supplies. Easy to use and very professional support team!",
    },
    {
      name: "Rohit Verma",
      title: "Health Consultant",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_S5KjDvQNtRE1K4j2uD6Pq3ea47fl1iqGeQ&s",
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
                    <small className="text-secondary">{item.title}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <p className="text-muted mb-4">
                Our mission is to ensure accessibility, safety, and reliability in every product we provide. With years of experience and a dedicated team, we strive to innovate in healthcare and build trust with our clients.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MedicineExport />

    </>
  );
}
export default Home;
