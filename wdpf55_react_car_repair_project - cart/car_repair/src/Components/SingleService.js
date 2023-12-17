import React from 'react';

const SingleService = ({data}) => {

    return (
        <>
          <div class="col-lg-4 card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title"> {data.product} </h5>
                  <h5 class="card-title"> {data.price} </h5>
                  <h5 class="card-title"> {data.sku} </h5>
                  <h5 class="card-title"> {data.model} </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary bi bi-cart">
                   Add to cart
                  </a>
                </div>
              </div>  
        </>
    );
};

export default SingleService;