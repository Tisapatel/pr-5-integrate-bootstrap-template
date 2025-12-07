import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid bg-light sticky-top p-0">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link to="/" className="navbar-brand bg-primary py-4 px-5 me-0">
            <h1 className="mb-0">
              <i className="bi bi-scissors" />
              Salone
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse p-3" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/price" className="nav-item nav-link">
                Price
              </Link>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu bg-light mt-2">
                  <Link to="/gallery" className="dropdown-item">
                    Photo Gallery
                  </Link>
                  <Link to="/blog" className="dropdown-item">
                    Beauty Blog
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>

            <div className="d-flex">
              <a className="btn btn-primary btn-sm-square me-3" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-primary btn-sm-square me-3" href="#">
                <i className="fab fa-instagram" />
              </a>
              <a className="btn btn-primary btn-sm-square" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
