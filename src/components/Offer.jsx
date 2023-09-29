import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div>
        <div className="container-fluid offer pt-5">
  <div className="row px-xl-5">
    <div className="col-md-6 pb-4">
      <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5LywIK4wl1sVnbwjRUzZ6tOyL7dDRYQuWQ&usqp=CAU" 
        width="290"
        height="250"
        alt="" />
        <div className="position-relative" style={{ zIndex: 1 }}>
          <h5 className="text-uppercase text-primary mb-3">
            20% off the all order
          </h5>
          <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
          <a href="" className="btn btn-outline-primary py-md-2 px-md-3">
            Shop Now
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-6 pb-4">
      <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
        <Image src="data:image/jpeg;base64,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" 
        width="290"
        height="250"
        alt="" />
        <div className="position-relative" style={{ zIndex: 1 }}>
          <h5 className="text-uppercase text-primary mb-3">
            20% off the all order
          </h5>
          <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
          <a href="" className="btn btn-outline-primary py-md-2 px-md-3">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Offer