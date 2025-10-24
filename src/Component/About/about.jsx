import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./AboutUs.css";

function AboutUs() {

  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(98, 110, 215, 0.5), rgba(35, 35, 40, 0.5)), url('/img/aboutus-image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "50vh",
    color: "white",
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={heroStyle}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">About Our</h1>
          <p className="lead">
            Welcome to Ms Re-Live.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="About us"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p className="text-muted">
                We are a team of creative professionals dedicated to delivering
                top-notch digital solutions. Our mission is to help businesses
                grow by leveraging technology and design to create powerful
                experiences.
              </p>
              <p className="text-muted">
                From web development to digital marketing, we pride ourselves on
                transparency, innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Mission & Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Innovation</h5>
                  <p className="card-text text-muted">
                    We continuously seek new ways to improve and stay ahead in
                    the digital world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Integrity</h5>
                  <p className="card-text text-muted">
                    We believe in honesty, transparency, and building trust with
                    our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Excellence</h5>
                  <p className="card-text text-muted">
                    We strive for perfection in everything we do, no matter the
                    project size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Meet Our Team</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                name: "Jane Smith",
                role: "Founder",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Michael Brown",
                role: "Co-Founder",
                img: "https://randomuser.me/api/portraits/men/33.jpg",
              },
              {
                name: "Emily White",
                role: "Marketing executive director",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="col-md-3 col-sm-6 team-member">
                <img src={member.img} alt={member.name} className="rounded-circle" />
                <h5 className="mt-3">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
