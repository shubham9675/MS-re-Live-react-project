import React from "react";
import Slider from "react-slick";


function MedicineExport() {

  const countries = [
    { name: "Nepal", image: "/img/3-3.png" },
    { name: "Afganistan", image: "/img/1-3.png" },
    { name: "Yanam", image: "/img/2-3.png" },
    { name: "Cambodia", image: "/img/4-3.png" },
    { name: "Sri Lanka", image: "/img/5-2.png" },
  ];



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // ✅ disable arrows
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-3 bg-light">
      
      <div className="container text-center">
        <h2 className="fw-bold">Exporting Medicines WorldWide</h2>
        <p className="text-muted">
          We deliver high-quality medicines to countries across the globe.
        </p>

        <Slider {...settings}>
          {countries.map((country, index) => (
            <div key={index} className="p-3">
              <div className="card shadow-sm ">
                <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="img-fluid mb-2"
                    style={{
                      objectFit: "contain",
                      height: "140px",
                      width: "auto",
                    }}
                  />
                  <h5 className="fw-bold mt-2">{country.name}</h5>
                </div>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MedicineExport;
