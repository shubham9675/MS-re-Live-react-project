import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Medicine() {
  // const medicines = [
  //   {
  //     id: 1,
  //     name: "Cefbroad-SB",
  //     image: "/img/cefbroad.jpeg",
  //     description: "Pain reliever and fever reducer.",
  //   },
  //   {
  //     id: 2,
  //     name: "Aceloceta-SP",
  //     image: "/img/aceloceta.jpeg",
  //     description: "Antibiotic for bacterial infections.",
  //   },
  //   {
  //     id: 3,
  //     name: "Livbil",
  //     image: "/img/livbil.jpeg",
  //     description: "Relief for cough and throat irritation.",
  //   },
  //   {
  //     id: 4,
  //     name: "Pancid-Go DSR",
  //     image: "/img/pancid-go.jpeg",
  //     description: "Boosts immunity and overall health.",
  //   },
  //   {
  //     id: 5,
  //     name: "Sucoon-O",
  //     image: "/img/sucoon.jpeg",
  //     description: "Relieves headache and muscle pain.",
  //   },
  //   {
  //     id: 6,
  //     name: "Vita-zeal Gold",
  //     image: "/img/vita-zeal gold.jpeg",
  //     description: "For seasonal and skin allergies.",
  //   },
  //   {
  //     id: 7,
  //     name: "Vita-zeal",
  //     image: "/img/vita-zeal.jpeg",
  //     description: "For seasonal and skin allergies.",
  //   },
  // ];

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
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {medicines.map((med) => (
              <div key={med.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm border-0">
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

                   <div className="card-body text-center">
                    <h5 className="fw-bold">{med.name}</h5>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src="/img/cefbroad.jpeg"
                alt="Co-Founder"
                style={{ width: "400px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Cefbroad-SB</h2>
              <p className="text-muted">
                cefbroad 1 g Injection treats severe bacterial
                infections such as pneumonia, meningitis, urinary tract infections, and bloodstream infections. It eliminates harmful bacteria, provides rapid symptom relief, and prevents complications. Given its once-daily dosing and strong effectiveness, it ensures better treatment adherence and faster recovery. By controlling infections efficiently, Monocef 1 g Injection supports overall health and well-being, allowing individuals to regain strength and resume daily activities sooner.
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
                src="/img/aceloceta.jpeg"
                alt="Co-Founder"
                style={{ width: "400px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Aceloceta-SP</h2>
              <p className="text-muted">
                Aceloceta 650mg Tablet is used for the treatment of mild to moderate pain including headache, migraine, sharp nerve pain (neuralgia), toothache, sore throat, period pain, and musculoskeletal pain. The medication is also used to reduce fever. The medication is available in the form of oral tablets and should be taken exactly as directed by the doctor. The usual adult dose for Paracetamol 650mg Tablet is one tablet every 4 to 6 hours, not to exceed 4 tablets in 24 hours. Patients should not take the medication for longer than 10 days unless directed by the doctor.
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
                src="/img/livbil.jpeg"
                alt="Co-Founder"
                style={{ width: "280px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Livbil</h2>
              <p className="text-muted">
                Livbil Syrup is used in the treatment of cough. It relieves allergy symptoms such as runny nose, stuffy nose, sneezing, watery eyes, and congestion or stuffiness. It also thins mucus in the nose, windpipe, and lungs, making it easier to cough out.
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
                src="/img/pancid-go.jpeg"
                alt="Co-Founder"
                style={{ width: "260px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Pancid-Go</h2>
              <p className="text-muted">Pancid-Go DSR Capsule is a prescription medicine used
                to treat gastroesophageal reflux disease (Acid reflux), dyspepsia (indigestion), and gastritis. It helps treat the conditions by reducing the amount of acid in the stomach thereby relieving symptoms of acidity such as heartburn, stomach pain, or irritation. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src="/img/sucoon.jpeg"
                alt="Co-Founder"
                style={{ width: "280px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Sucoon-O</h2>
              <p className="text-muted">Sucral Suspension is used in the treatment of ulcers in the stomach and intestine. It contains the active ingredient sucralfate which promotes the healing of ulcers by forming a coating over them which acts as a physical barrier.</p>
            </div>
          </div>
        </div>
      </section>
       <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src="/img/vita-zeal gold.jpeg"
                alt="Co-Founder"
                style={{ width: "260px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Vita-zeal Gold</h2>
              <p className="text-muted">M.V.I. Injection is a combination of vitamins that helps to treat nutritional deficiency. M.V.I. Injection is essential for good vision, healthy skin, bones, cell growth and a healthy immune system. It also helps the heart, brain, lungs, kidneys, and other organs function properly. It also helps boost energy level and improve metabolism. Taking M.V.I. Injection helps you lead a better quality life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src="/img/vita-zeal.jpeg"
                alt="Co-Founder"
                style={{ width: "280px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Vita-zeal</h2>
              <p className="text-muted">Multivitamins and minerals are used to trea t or prevent vitamins and minerals deficienc ies due to poor diet, certain illnesses such as digestive disorders or pregnancy.
                These multivitamins, minerals and antioxid ants are important building blocks of the b ody and help maintain good health.
                If you are managing multiple health needs, your doctor might suggest products such a s hypertension medicines, antibiotics, or Su pratel 20mg in addition to a healthy diet an d regular exercise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Medicine;
