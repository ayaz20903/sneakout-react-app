import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {
    render() { 
        return ( 
            <ProductConsumer>
                {value => {
                    const {id,company, img, info, price,title,inCart} =
                     value.detailProduct;
                     return(
                        <div className="container py-5">

                            {/*  title */}
                            <div className="row">
                                <div className="div col-10 mx-auto text-center text-blue my-5">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            {/* end title */}

                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt='product' className='img-fluid'/>
                                </div>
                                {/* Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h3 >Model :
                                         <span className='text-blue'> {title}</span>
                                    </h3>
                                    <h4 className=' text-muted mt-3 mb-2'>
                                        MADE BY : <span className='text-uppercase'>
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className='text-blue mt-3 mb-2'> 
                                        <strong> Price : <span> ₹{price} </span>
                                        </strong>
                                    </h4>
                                    <p className="p font-weight-bold mt-3 mb-2">
                                        Info about the product : 
                                    </p>
                                    <p className='text-muted lead'> {info} </p> 
                                    

                                    {/* Butoon */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer cart >
                                                Back To Store
                                            </ButtonContainer>
                                        </Link>
                                            <ButtonContainer
                                                className='mx-2 my-2'
                                                disabled={inCart ? true : false}
                                                onClick= { ()=> {
                                                     value.addToCart(id)
                                                }}
                                            >
                                                {inCart ? 'In Cart' : 'Add To Cart'}
                                            </ButtonContainer>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                }}    
            </ProductConsumer>
         );
    }
}
 
export default Details;    
                                            