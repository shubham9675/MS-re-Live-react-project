import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import './header.css';

function Header() {


  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar toggle function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };



  return (
    <>
      <header className="gi-header">
        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-white shadow-sm">
          <Link to="/" className="d-flex align-items-center">
            <img
              src="/img/logoimg.png"
              alt="Site Logo"
              style={{ height: "20px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          <div className="d-none d-md-flex gap-4 align-items-center">
            {/* <!-- Header User Start --> */}
            <Link to="/" className="gi-header-btn gi-wish-toggle" title="Home">
              <div className="fw-semibold text-black m-2">Home</div>
            </Link>
            <Link to="/about" className="gi-header-btn gi-wish-toggle" title="About">
              <div className="fw-semibold text-black m-2">About</div>
            </Link>
            <Link to="/founder" className="gi-header-btn gi-cart-toggle" title="Founder">
              <div className="fw-semibold text-black m-2">Founder</div>
            </Link>
            <Link to="/medicine" className="gi-header-btn gi-cart-toggle" title="Medicine">
              <div className="fw-semibold text-black m-2">Medicine</div>
            </Link>
            <Link to="/contact" className="gi-header-btn gi-cart-toggle" title="Contact">
              <div className="fw-semibold text-black m-2">Contact</div>
            </Link>
          </div>
          <div className="d-md-none">
            <button onClick={toggleSidebar} className="gi-header-btn gi-site-menu-icon d-lg-none">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row align-itegi-center">
            {/* <div className="header-top-right-inner d-flex justify-content-end">
                <div className="gi-help py-1 text-white" to="faq.html" >Need Help? Mail Us at: info@ampurepharma.com</div>
              </div> */}

          </div>
        </div>
        {/* ===== Sidebar (Mobile) ===== */}
        {sidebarOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 1050,
              transition: "background-color 0.4s ease"
            }}
            onClick={toggleSidebar}>
            <div
              className="position-fixed top-0 bg-white shadow p-4"
              style={{
                right: sidebarOpen ? "0" : "-250px",
                width: "250px",
                height: "100%",
                zIndex: 1100,
                transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
                transition: "transform 0.4s ease-in-out",
              }}
              onClick={(e) => e.stopPropagation()} // prevent overlay click from closing instantly

            >
              {/* Close Button */}
              <div className="text-end">
                <div
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  onClick={toggleSidebar}
                >
                  ✕
                </div>
              </div>

              {/* Sidebar Links */}
              <div className="d-flex flex-column gap-3">
                <Link to="/" className="" title="Home">
                  <div onClick={toggleSidebar} className="fw-semibold text-black">Home</div>
                </Link>
                <Link to="/about" className="" title="About">
                  <div onClick={toggleSidebar} className="fw-semibold text-black">About</div>
                </Link>
                <Link to="/founder" className="" title="Founder">
                  <div onClick={toggleSidebar} className="fw-semibold text-black">Founder</div>
                </Link>
                <Link to="/medicine" className="" title="Contact">
                  <div onClick={toggleSidebar} className="fw-semibold text-black">Medicine</div>
                </Link>
                <Link to="/contact" className="" title="Contact">
                  <div onClick={toggleSidebar} className="fw-semibold text-black">Contact</div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
export default Header;