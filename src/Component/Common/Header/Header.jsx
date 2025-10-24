import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './header.css';

function Header() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [SidebarOpen, setSidebarOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };





  return (
    <>
      <header className="gi-header">
        <div className="header-top">
          <div className="container-fluid" style={{ backgroundColor: "#4a5bafc4" }}>
            <div className="row align-itegi-center">
              <div className="header-top-right-inner d-flex justify-content-end">
                <div className="gi-help py-1 text-white" to="faq.html" >Need Help? Mail Us at: info@ampurepharma.com</div>
              </div>
              <div className="col header-top-res d-lg-none">
                <div className="gi-header-bottons">
                  <div className="right-icons">
                    {/* <Link to="login.html" className="gi-header-btn gi-header-user">
                      <div className="header-icon"><i className="fa-regular fa-user"></i></div>
                    </Link>
                    <Link to="/" className="gi-header-btn gi-wish-toggle">
                      <div className="header-icon"><i className="fa-regular fa-heart"></i></div>
                      <span className="gi-header-count gi-wishlist-count">3</span>
                    </Link>
                    <Link to="/" className="gi-header-btn gi-cart-toggle">
                      <div className="header-icon"><i className="fa-solid fa-cart-shopping"></i>
                        <span className="main-label-note-new"></span>
                      </div>
                      <span className="gi-header-count gi-cart-count">3</span>
                    </Link> */}
                    <button onClick={toggleSidebar} className="gi-header-btn gi-site-menu-icon d-lg-none">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isSidebarOpen && (
            <div className="sidebar">
              <button onClick={toggleSidebar} className="close-btn">&times;</button>
              <nav>
                <ul>
                  <div className="category-dropdown px-2">
                    <li className="d-flex justify-content-between text-black border-bottom" onClick={toggleDropdown}>Shop by category
                      <span>{isOpen ? '−' : '+'}</span>
                    </li>
                    {isOpen && (
                      <div className="dropdown">
                        <ul>
                          <li><Link to="/">Bone China</Link></li>
                          <li><Link to="/">Wooden</Link></li>
                          <li><Link to="/">Ceramic</Link></li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="px-2">
                    <li className="border-bottom"><Link to="/profile">Profile</Link></li>
                  </div>
                  <div className="px-2">
                    <li className="border-bottom"><Link to="/profile">Order</Link></li>
                  </div>
                  <div className="px-2">
                    <li className="border-bottom"><Link to="/profile">Logout</Link></li>
                  </div>

                </ul>
              </nav>
            </div>
          )}
        </div>

        <div className="gi-header-bottom d-lg-block">
          <div className="container-fluid position-relative">
            <div className="row">
              <div className="gi-flex">
                <div className="align-self-center gi-header-logo">
                  <div className="header-logo p-4">
                    <Link to="/"><img src="/img/logoimg.png" alt="Site Logo"/></Link>
                  </div>
                </div>
                <div className="align-self-center gi-header-search">
                  <div className="header-search ">
                    {/* <form className="gi-search-group-form">
                      <input className="form-control gi-search-bar  rounded" placeholder="Search Products..." type="text" style={{maxWidth:'32rem'}} />
                      <div className='position-absolute nav-searchicon-container' >
                        <i className="fa-solid fa-magnifying-glass px-3"></i>
                      </div>
                      <div>
                        
                        <Sidebar Open={SidebarOpen} onClose={handleCloseSidebar} />
                      </div>
                    </form> */}

                  </div>
                </div>
                <div className="gi-header-action align-self-center">
                  <div className="gi-header-bottons">
                    {/* <!-- Header User Start --> */}
                    <div className="gi-acc-drop">
                      <Link to="/" className="gi-header-btn gi-wish-toggle" title="Home">
                        <div className="gi-btn-desc">
                          <div className="gi-btn-stitle fw-semibold text-black m-2">Home</div>
                        </div>
                      </Link>
                    </div>
                    <Link to="/about" className="gi-header-btn gi-wish-toggle" title="About">
                      <div className="gi-btn-desc">
                        <div className="gi-btn-stitle fw-semibold text-black m-2">About</div>
                      </div>
                    </Link>
                    <Link to="/founder" className="gi-header-btn gi-cart-toggle" title="Founder">
                      <div className="gi-btn-desc">
                        <div className="gi-btn-stitle fw-semibold text-black m-2">Founder</div>
                      </div>
                    </Link>
                    <Link to="/contact" className="gi-header-btn gi-cart-toggle" title="Contact">
                      <div className="gi-btn-desc">
                        <div className="gi-btn-stitle fw-semibold text-black m-2">Contact</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header;


