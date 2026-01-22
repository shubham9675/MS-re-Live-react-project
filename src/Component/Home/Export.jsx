import React from "react";
 

function MedicineExport() {

  const countries = [
    { name: "India", image: "/img/india.png" },
    // { name: "Afganistan", image: "/img/1-3.png" },
    // { name: "Yanam", image: "/img/2-3.png" },
    // { name: "Cambodia", image: "/img/4-3.png" },
    // { name: "Sri Lanka", image: "/img/5-2.png" },
  ];



 

  return (
    <section className="py-3 bg-light">
      
      <div className="container text-center">
        <h2 className="fw-bold">Supplying Medicines all Over India</h2>
        <p className="text-muted">
          We deliver high-quality medicines to countries across the globe.
        </p>

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
       </div>
    </section>
  );
};

export default MedicineExport;
