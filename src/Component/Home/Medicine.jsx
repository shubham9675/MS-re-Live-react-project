import React from "react";
import Slider from "react-slick";

function Medicine() {

  const medicines = [
    {
      id: 1,
      name: "Cefbroad-SB",
      image: "/img/cefbroad.jpeg",
      description: "Pain reliever and fever reducer.",
    },
    {
      id: 2,
      name: "Aceloceta-SP",
      image: "/img/aceloceta.jpeg",
      description: "Antibiotic for bacterial infections.",
    },
    {
      id: 3,
      name: "Livbil",
      image: "/img/livbil.jpeg",
      description: "Relief for cough and throat irritation.",
    },
    {
      id: 4,
      name: "Pancid-Go DSR",
      image: "/img/pancid-go.jpeg",
      description: "Boosts immunity and overall health.",
    },
    {
      id: 5,
      name: "Sucoon-O",
      image: "/img/sucoon.jpeg",
      description: "Relieves headache and muscle pain.",
    },
    {
      id: 6,
      name: "Vita-zeal Gold",
      image: "/img/vita-zeal gold.jpeg",
      description: "For seasonal and skin allergies.",
    },
    {
      id: 7,
      name: "Vita-zeal",
      image: "/img/vita-zeal.jpeg",
      description: "For seasonal and skin allergies.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-4 bg-light">

      <div className="container text-center">
        <h2 className="fw-bold d-inline-block px-4 py-2 rounded text-white"
          style={{ backgroundColor: "#0050a1ff" }}>
          Our Medicines
        </h2>
        <Slider {...settings}>
          {medicines.map((medicines, index) => (
            <div key={index} className="p-3">
              <div className="card">
                <div className="text-center d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={medicines.image}
                    alt={medicines.name}
                    className="img-fluid mb-2"
                    style={{
                      objectFit: "contain",
                      height: "340px",
                      width: "auto",
                    }}
                  />
                  <h5 className="fw-bold mt-2">{medicines.name}</h5>
                </div>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Medicine;
