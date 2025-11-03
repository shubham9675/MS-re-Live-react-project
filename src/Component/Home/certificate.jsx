import React from "react";
import Slider from "react-slick";

function Certificate() {

  const countries = [
    { name: "Nepal", image: "/img/pancard.jpg" },
    { name: "Afganistan", image: "/img/pancard.jpg" },
    { name: "Yanam", image: "/img/pancard.jpg" },
    { name: "Cambodia", image: "/img/pancard.jpg" },
    { name: "Sri Lanka", image: "/img/pancard.jpg" },
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

      {/* ✅ Dots closer to images */}
      <style>{`
        .slick-dots {
          bottom: -7px !important;
        }
      `}</style>

      <div className="container text-center">
        <h2 className="fw-bold d-inline-block px-4 py-2 rounded text-white"
          style={{ backgroundColor: "#0050a1ff" }}>
          Our Certificates
        </h2>

        <Slider {...settings}>
          {countries.map((country, index) => (
            <div key={index} className="p-3">
              <img
                src={country.image}
                alt={country.name}
                className="img-fluid mb-2 d-block mx-auto"
                style={{
                  objectFit: "contain",
                  height: "440px",
                  width: "auto",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Certificate;
