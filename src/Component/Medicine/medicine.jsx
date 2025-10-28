import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Medicine() {
  const medicines = [
    {
      id: 1,
      name: "Paracetamol",
      image: "/img/cefbroad.jpeg",
      description: "Pain reliever and fever reducer.",
    },
    {
      id: 2,
      name: "Amoxicillin",
      image: "/img/aceloceta.jpeg",
      description: "Antibiotic for bacterial infections.",
    },
    {
      id: 3,
      name: "Cough Syrup",
      image: "/img/livbil.jpeg",
      description: "Relief for cough and throat irritation.",
    },
    {
      id: 4,
      name: "Vitamin C",
      image: "/img/pancid-go.jpeg",
      description: "Boosts immunity and overall health.",
    },
    {
      id: 5,
      name: "Pain Balm",
      image: "/img/sucoon.jpeg",
      description: "Relieves headache and muscle pain.",
    },
    {
      id: 6,
      name: "Allergy Relief",
      image: "/img/vita-zeal gold.jpeg",
      description: "For seasonal and skin allergies.",
    },
    {
      id: 7,
      name: "Allergy Relief",
      image: "/img/vita-zeal.jpeg",
      description: "For seasonal and skin allergies.",
    },
  ];

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section
        className="py-5 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(39, 36, 36, 0.5), rgba(62, 28, 28, 0.5)), url('/img/pexels-pixabay-139398.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-5">
          <h1 className="fw-bold mb-2">Our Medicines</h1>
          <p className="lead mb-0">
            Discover our wide range of high-quality pharmaceutical products.
          </p>
        </div>
      </section>

      {/* ===== Medicine Grid ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {medicines.map((med) => (
              <div key={med.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm border-0">
                  {/* Medicine Image */}
                  <div className="d-flex justify-content-center align-items-center p-3 bg-white">
                    <img
                      src={med.image}
                      alt={med.name}
                      className="img-fluid"
                      style={{
                        maxHeight: "200px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Medicine Info */}
                  <div className="card-body text-center">
                    <h5 className="fw-bold">{med.name}</h5>
                    {/* <p className="text-muted small mb-2">{med.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Medicine;
