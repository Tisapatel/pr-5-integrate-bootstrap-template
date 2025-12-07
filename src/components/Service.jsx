import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Service = () => {
  return (
    <div>
      <div>
      
        <div className="container-fluid bg-light page-header py-5 mb-5">
          <div className="container text-center py-5">
            <h1 className="display-1 animated slideInLeft">Service</h1>
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
                  Service
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Hero End */}
        {/* Service Start */}
        <div className="container-fluid service py-5">
          <div className="container">
            <div className="text-center wow fadeIn" data-wow-delay="0.1s">
              <h1 className="font-dancing-script text-primary">Our Services</h1>
              <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4 g-md-0 text-center">
              <div className="col-md-6 col-lg-4">
                <div
                  className="service-item h-100 p-4 border-bottom border-end wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <img className="img-fluid" src="img/haircut.png" alt />
                  <h3 className="mb-3">Haircut</h3>
                  <p className="mb-3">
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <a className="btn btn-sm btn-primary text-uppercase" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="service-item h-100 p-4 border-bottom border-lg-end wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <img className="img-fluid" src="img/makeup.png" alt />
                  <h3 className="mb-3">Makeup</h3>
                  <p className="mb-3">
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <a className="btn btn-sm btn-primary text-uppercase" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="service-item h-100 p-4 border-bottom border-end border-lg-end-0 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <img className="img-fluid" src="img/manicure.png" alt />
                  <h3 className="mb-3">Manicure</h3>
                  <p className="mb-3">
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <a
                    className="btn btn-sm btn-primary text-uppercase my-2"
                    href
                  >
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="service-item h-100 p-4 border-bottom border-lg-bottom-0 border-lg-end wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <img className="img-fluid" src="img/pedicure.png" alt />
                  <h3 className="mb-3">Pedicure</h3>
                  <p className="mb-3">
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <a className="btn btn-sm btn-primary text-uppercase" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="service-item h-100 p-4 border-end wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <img className="img-fluid" src="img/massage.png" alt />
                  <h3 className="mb-3">Massage</h3>
                  <p className="mb-3">
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <a className="btn btn-sm btn-primary text-uppercase" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="service-item h-100 p-4 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <img className="img-fluid" src="img/skin-care.png" alt />
                  <h3 className="mb-3">Skin Care</h3>
                  <p className="mb-3">
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <a className="btn btn-sm btn-primary text-uppercase" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Testimonial Start */}
<div className="container-fluid py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h1 className="font-dancing-script text-primary">Testimonial</h1>
      <h1>What Clients Say!</h1>
    </div>

    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={3}
      slidesToScroll={1}
      arrows={true}
      responsive={[
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } },
      ]}
    >
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-2">
          <div className="text-center bg-light p-4 h-100">
            <i className="fa fa-quote-left fa-3x mb-3" />
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <img
              className="img-fluid mx-auto border p-1 mb-3"
              src={`/img/testimonial-${i}.jpg`}
              alt={`Client ${i}`}
            />
            <h4 className="mb-1">Client Name {i}</h4>
            <span>Profession {i}</span>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
{/* Testimonial End */}

      </div>
    </div>
  );
};

export default Service;
