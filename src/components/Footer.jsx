import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* Left Side */}
            <div className="col-lg-6 pe-lg-5">
              <a href="index.html" className="navbar-brand">
                <h1 className="display-5 text-primary mb-0">
                  <i className="bi bi-scissors"></i> Salone
                </h1>
              </a>
              <p>
                Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem
                nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna
                erat dolore sed stet justo et dolor.
              </p>

              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-2"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-2"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-2"></i>info@example.com
              </p>

              <div className="d-flex justify-content-start mt-4">
                <a className="btn btn-sm-square btn-primary me-3" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-sm-square btn-primary me-3" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-sm-square btn-primary me-3" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-sm-square btn-primary me-3" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6">
                  <h5 className="text-primary mb-4">Quick Links</h5>
                  <a className="btn btn-link" href="">
                    About Us
                  </a>
                  <a className="btn btn-link" href="">
                    Contact Us
                  </a>
                  <a className="btn btn-link" href="">
                    Our Services
                  </a>
                  <a className="btn btn-link" href="">
                    Terms & Condition
                  </a>
                </div>

                <div className="col-sm-6">
                  <h5 className="text-primary mb-4">Popular Links</h5>
                  <a className="btn btn-link" href="">
                    About Us
                  </a>
                  <a className="btn btn-link" href="">
                    Contact Us
                  </a>
                  <a className="btn btn-link" href="">
                    Our Services
                  </a>
                  <a className="btn btn-link" href="">
                    Terms & Condition
                  </a>
                </div>

                <div className="col-sm-12">
                  <h5 className="text-primary mb-4">Newsletter</h5>
                  <div className="position-relative w-100 mb-2">
                    <input
                      className="form-control bg-secondary border-0 w-100 ps-4 pe-5"
                      type="text"
                      placeholder="Enter Your Email"
                      style={{ height: "60px" }}
                    />
                    <button
                      type="button"
                      className="btn shadow-none position-absolute top-0 end-0 mt-2 me-2"
                    >
                      <i className="fa fa-paper-plane text-primary fs-4"></i>
                    </button>
                  </div>
                  <p className="mb-0">Diam sed sed dolor stet amet eirmod</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="container-fluid bg-dark text-white border-top border-secondary py-4 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Rights Reserved.
            </div>

            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
              . Distributed By{" "}
              <a className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
