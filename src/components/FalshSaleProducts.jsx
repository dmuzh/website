import Link from "next/link";
import React from "react";

const FlashSale = ({ flashSale, handleAddToCart  }) => {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Flash Sale Products</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {flashSale.map((flash) => (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={flash._id}>
              <Link
                // style={{ height: "80px" }}
                // key={flash._id}
                href={`/products/${flash._id}`}
              >
                <div className="card product-item border-0 mb-4">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img
                      className="img-fluid w-100"
                      src={flash.cover}
                      alt=""
                    />
                    <span className="discount-label">{flash.discount} %</span>
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h5 className="text-truncate mb-3">
                      {flash.name}
                    </h5>
                    <div className="d-flex justify-content-center">
                      <h6>${flash.discountedPrice}</h6>
                      <h6 className="text-muted ml-2">
                        <del style={{color : '#EF7A59'}}>${flash.price}</del>
                      </h6>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <div href={`/products/${flash._id}`} className="btn btn-sm text-dark p-0">
                      <i className="fas fa-eye text-primary mr-1" />
                      View Detail
                    </div>
                    <div  className="btn btn-sm text-dark p-0" onClick={handleAddToCart}>
                      <i className="fas fa-shopping-cart text-primary mr-1" />
                      Add To Cart
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
