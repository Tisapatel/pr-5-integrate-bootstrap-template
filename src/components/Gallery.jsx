import React from 'react'

const Gallery = () => {
  return (
    <div>
     
  <div className="container-fluid bg-light page-header py-5 mb-5">
    <div className="container text-center py-5">
      <h1 className="display-1 animated slideInLeft">Gallery</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
          <li className="breadcrumb-item"><a className="text-primary" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-primary" href="#">Pages</a></li>
          <li className="breadcrumb-item active" aria-current="page">Gallery</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Hero End */}
  {/* Gallery Start */}
  <div className="container-fluid gallery py-5">
    <div className="container">
      <div className="text-center wow fadeIn" data-wow-delay="0.2s">
        <h1 className="font-dancing-script text-primary">Gallery</h1>
        <h1 className="mb-5">Explore Our Gallery</h1>
      </div>
      <div className="row g-0">
        <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
          <div className="gallery-item h-100">
            <img src="img/gallery-1.jpg" className="img-fluid w-100 h-100" alt />
            <div className="gallery-icon">
              <a href="img/gallery-1.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-1"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 wow fadeIn" data-wow-delay="0.4s">
          <div className="gallery-item h-100">
            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100" alt />
            <div className="gallery-icon">
              <a href="img/gallery-2.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-2"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 wow fadeIn" data-wow-delay="0.6s">
          <div className="gallery-item h-100">
            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100" alt />
            <div className="gallery-icon">
              <a href="img/gallery-3.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-3"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 wow fadeIn" data-wow-delay="0.2s">
          <div className="gallery-item h-100">
            <img src="img/gallery-4.jpg" className="img-fluid w-100 h-100" alt />
            <div className="gallery-icon">
              <a href="img/gallery-4.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-4"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 wow fadeIn" data-wow-delay="0.4s">
          <div className="gallery-item h-100">
            <img src="img/gallery-5.jpg" className="img-fluid w-100 h-100" alt />
            <div className="gallery-icon">
              <a href="img/gallery-5.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-5"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow fadeIn" data-wow-delay="0.6s">
          <div className="gallery-item h-100">
            <img src="img/gallery-6.jpg" className="img-fluid w-100 h-100" alt />
            <div className="gallery-icon">
              <a href="img/gallery-6.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-6"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Gallery End */}
</div>

 
  )
}

export default Gallery
