import React from "react";

const Prices = () => {
  return (
    <div>
      <div className="container-fluid bg-light page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-1 animated slideInLeft">Price</h1>
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
                Price
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Hero End */}
      {/* Pricing Start */}
      <div className="container-fluid price px-0">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="d-flex align-items-center h-100 bg-primary p-5">
              <div className="wow fadeIn" data-wow-delay="0.3s">
                <h1 className="font-dancing-script text-white">Pricing</h1>
                <h1 className="mb-0">Beauty Salon</h1>
                <h1
                  className="display-1 text-uppercase mb-5"
                  style={{ letterSpacing: 10 }}
                >
                  Pricing
                </h1>
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="text-center bg-dark p-5">
                      <h4 className="text-white">Enjoy</h4>
                      <h1 className="display-1 font-work-sans text-white">
                        20%
                      </h1>
                      <p className="fs-2 text-white mb-0">Off</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Lorem ipsum dolor sit, consectetur adipiscing elit.
                      Maecenas eget libero lobortis, auctor nisi quis, aliquet
                      nunc. Nam dapibus lacus.
                    </p>
                    <a className="btn btn-dark" href>
                      Get 20% Off
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 bg-dark p-5">
              <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/price-1.jpg"
                  alt
                />
                <div className="text-end px-4">
                  <h6 className="text-uppercase text-primary">Haircut</h6>
                  <h3 className="text-white font-work-sans mb-0">$49</h3>
                </div>
              </div>
              <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.2s">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/price-2.jpg"
                  alt
                />
                <div className="text-end px-4">
                  <h6 className="text-uppercase text-primary">Makeup</h6>
                  <h3 className="text-white font-work-sans mb-0">$79</h3>
                </div>
              </div>
              <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.3s">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/price-3.jpg"
                  alt
                />
                <div className="text-end px-4">
                  <h6 className="text-uppercase text-primary">Manicure</h6>
                  <h3 className="text-white font-work-sans mb-0">$59</h3>
                </div>
              </div>
              <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.4s">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/price-4.jpg"
                  alt
                />
                <div className="text-end px-4">
                  <h6 className="text-uppercase text-primary">Pedicure</h6>
                  <h3 className="text-white font-work-sans mb-0">$49</h3>
                </div>
              </div>
              <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.5s">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/price-5.jpg"
                  alt
                />
                <div className="text-end px-4">
                  <h6 className="text-uppercase text-primary">Massage</h6>
                  <h3 className="text-white font-work-sans mb-0">$39</h3>
                </div>
              </div>
              <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.6s">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/price-6.jpg"
                  alt
                />
                <div className="text-end px-4">
                  <h6 className="text-uppercase text-primary">Skin Care</h6>
                  <h3 className="text-white font-work-sans mb-0">$99</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing End */}
    </div>
  );
};

export default Prices;
