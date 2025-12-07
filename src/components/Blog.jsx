import React from 'react'

const Blog = () => {
  return (
  <div>
  <div className="container-fluid bg-light page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-1 animated slideInLeft">Blog</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
          <li className="breadcrumb-item"><a className="text-primary" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-primary" href="#">Pages</a></li>
          <li className="breadcrumb-item active" aria-current="page">Blog</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Hero End */}
  {/* Blog Start */}
  <div className="container-fluid blog p-0">
    <div className="row g-0">
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
          <p className="mb-2"><i className="fa fa-calendar-alt text-dark me-1" />Jan 01, 2045 | <i className="fa fa-folder-open text-dark me-1" />Hair Salon</p>
          <h3 className="mb-3">How to Extend The Life of Your Haircolor</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor
            nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
          <a className="btn btn-dark align-self-start text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
        <div className="h-100">
          <img className="img-fluid w-100 h-100" src="img/blog-1.jpg" alt style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
        <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
          <p className="mb-2"><i className="fa fa-calendar-alt text-dark me-1" />Jan 01, 2045 | <i className="fa fa-folder-open text-dark me-1" />Hair Salon</p>
          <h3 className="mb-3">Hottest Hairstyles and Haircuts in 2045</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor
            nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
          <a className="btn btn-dark align-self-start text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
        <div className="h-100">
          <img className="img-fluid w-100 h-100" src="img/blog-2.jpg" alt style={{objectFit: 'cover'}} />
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
</div>

  )
}

export default Blog
