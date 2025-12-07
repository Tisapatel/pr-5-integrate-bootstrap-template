import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Start */}
      <div className="container-fluid bg-light page-header py-5 mb-5">
        <div className="container text-center py-5">
          <h1 className="display-1 animated slideInLeft">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
              <li className="breadcrumb-item">
                <a className="text-primary" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-primary" href="#">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Hero End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
              <img className="img-fluid mb-3" src="img/about.jpg" alt />
              <div className="d-flex align-items-center bg-light">
                <div
                  className="btn-square flex-shrink-0 bg-primary"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-phone fa-2x text-dark" />
                </div>
                <div className="px-3">
                  <h3>+0123456789</h3>
                  <span>Call us direct 24/7 for get a free consultation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="font-dancing-script text-primary">About Us</h1>
              <h1 className="mb-5">Why People Choose Us!</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc.
                Nam dapibus interdum lacus, suscipit tempor odio viverra
                aliquam. Etiam non ex ex.
              </p>
              <div className="row g-3 mb-5">
                <div className="col-sm-6">
                  <div className="bg-light text-center p-4">
                    <i className="fas fa-calendar-alt fa-4x text-primary" />
                    <h1 className="display-5" data-toggle="counter-up">
                      25
                    </h1>
                    <p className="text-dark text-uppercase mb-0">
                      Years experience
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bg-light text-center p-4">
                    <i className="fas fa-users fa-4x text-primary" />
                    <h1 className="display-5" data-toggle="counter-up">
                      999
                    </h1>
                    <p className="text-dark text-uppercase mb-0">
                      Happy Customers
                    </p>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary text-uppercase px-5 py-3" href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Team Start */}
      <div className="container-fluid overflow-hidden py-5">
        <div className="container">
          <div className="text-center wow fadeIn" data-wow-delay="0.2s">
            <h1 className="font-dancing-script text-primary">Team Members</h1>
            <h1 className="mb-5">Our Experienced Specialists</h1>
          </div>
          <div className="row g-4 team">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="team-item position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-1.jpg" alt />
                <div className="team-overlay">
                  <p className="text-primary mb-1">Hair Specialist</p>
                  <h4>Lily Taylor</h4>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-dark btn-sm-square border-2 me-3"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-dark btn-sm-square border-2 me-3"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-dark btn-sm-square border-2" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="team-item position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                <div className="team-overlay">
                  <p className="text-primary mb-1">Nail Designer</p>
                  <h4>Olivia Smith</h4>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-dark btn-sm-square border-2 me-3"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-dark btn-sm-square border-2 me-3"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-dark btn-sm-square border-2" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="team-item position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                <div className="team-overlay">
                  <p className="text-primary mb-1">Beauty Specialist</p>
                  <h4>Ava Brown</h4>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-dark btn-sm-square border-2 me-3"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-dark btn-sm-square border-2 me-3"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-dark btn-sm-square border-2" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="team-item position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-4.jpg" alt />
                <div className="team-overlay">
                  <p className="text-primary mb-1">Spa Specialist</p>
                  <h4>Amelia Jones</h4>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-dark btn-sm-square border-2 me-3"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-dark btn-sm-square border-2 me-3"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-dark btn-sm-square border-2" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </div>
  );
};

export default About;
