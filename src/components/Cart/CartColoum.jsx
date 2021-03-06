import React from 'react';

export default function CartColoum(){
    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row text-center">  

                <div className="col-10 mx-auto col-lg-2">
                    <p>Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Name of Product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            
            </div>    
        </div>

    );
}