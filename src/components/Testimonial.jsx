import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992, // Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="font-dancing-script text-primary">Testimonial</h1>
        <h1>What Clients Say!</h1>
      </div>

      <Slider {...settings}>
        <div className="p-2">
          <div className="text-center bg-light p-4 h-100">
            <i className="fa fa-quote-left fa-3x mb-3" />
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.</p>
            <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-1.jpg" alt="Client 1" />
            <h4 className="mb-1">Client Name</h4>
            <span>Profession</span>
          </div>
        </div>

        <div className="p-2">
          <div className="text-center bg-light p-4 h-100">
            <i className="fa fa-quote-left fa-3x mb-3" />
            <p>Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo.</p>
            <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-2.jpg" alt="Client 2" />
            <h4 className="mb-1">Client Name</h4>
            <span>Profession</span>
          </div>
        </div>

        <div className="p-2">
          <div className="text-center bg-light p-4 h-100">
            <i className="fa fa-quote-left fa-3x mb-3" />
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet.</p>
            <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-3.jpg" alt="Client 3" />
            <h4 className="mb-1">Client Name</h4>
            <span>Profession</span>
          </div>
        </div>

        <div className="p-2">
          <div className="text-center bg-light p-4 h-100">
            <i className="fa fa-quote-left fa-3x mb-3" />
            <p>Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo.</p>
            <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-4.jpg" alt="Client 4" />
            <h4 className="mb-1">Client Name</h4>
            <span>Profession</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
