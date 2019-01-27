import React from 'react';

const Carrousel = () => (
<div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="5000">
        <div className="row bg-info">
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
            </div>
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
             <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
        </div>
    </div>
    <div className="carousel-item" data-interval="5000">
        <div className="row bg-warning">
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
            </div>
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
             <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
        </div>
    </div>
    <div className="carousel-item" data-interval="5000">
      <div className="row bg-danger">
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
            </div>
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
            <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
             <div className="col">
                <img src="assets/images/productos/mates/cerrano/cerrano.png" className="d-block w-100" alt="..." />
                
            </div>
        </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
);
export default Carrousel;