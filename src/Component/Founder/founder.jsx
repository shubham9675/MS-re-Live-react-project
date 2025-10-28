import React from "react";

const FounderTeam = () => {
  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    height: "40vh",
  };




  return (
    <div>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={heroStyle}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Leadership Team</h1>
          <p className="lead">Meet the visionaries behind our success</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src="/img/pushpender.jpg"
                alt="Co-Founder"
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Dr. Pushpendra Singh</h2>
              <h5 className="text-primary">Co founder, Managing Director</h5>
              <p className="text-primary">B.Sc, MBBS</p>
              <p className="text-muted">
                John founded <strong>TechVision</strong> with a dream to
                revolutionize how businesses use technology to grow. With a
                strong background in software engineering and strategy, his
                leadership has shaped the company’s innovative direction.
              </p>
              <p className="text-muted">
                His philosophy—*“Technology is not just about code, it’s about
                people”*—continues to inspire our team and clients alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Excutive */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src="/img/marketing.jpg"
                alt="Co-Founder"
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Nimmi Rajput</h2>
              <h5 className="text-primary">Marketing Excutive</h5>
              <p className="text-primary">BBA, MBA (Hons.)</p>
              <p className="text-muted">
                Jane brings structure, vision, and empathy to the company’s
                operations. Her deep expertise in business management ensures
                seamless coordination between teams and clients.
              </p>
              <p className="text-muted">
                She believes in empowering people to grow and pushing boundaries
                to create meaningful change in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Market Field Distrubutor */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src="/img/sushant.jpg"
                alt="Co-Founder"
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">David Singh Rajput</h2>
              <h5 className="text-primary">Market Field Distrubutor</h5>
              <p className="text-primary">B.Sc, D.pharma</p>
              <p className="text-muted">
                John founded <strong>TechVision</strong> with a dream to
                revolutionize how businesses use technology to grow. With a
                strong background in software engineering and strategy, his
                leadership has shaped the company’s innovative direction.
              </p>
              <p className="text-muted">
                His philosophy—*“Technology is not just about code, it’s about
                people”*—continues to inspire our team and clients alike.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Chief Financial Officer */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src="/img/david.jpg"
                alt="Co-Founder"
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Sushant Singh Rajput</h2>
              <h5 className="text-primary">Chief Financial Officer</h5>
              <p className="text-primary">B.Sc, MCA</p>
              <p className="text-muted">
                Jane brings structure, vision, and empathy to the company’s
                operations. Her deep expertise in business management ensures
                seamless coordination between teams and clients.
              </p>
              <p className="text-muted">
                She believes in empowering people to grow and pushing boundaries
                to create meaningful change in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FounderTeam;
