import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context'
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Product extends Component {
    render() { 

        const {id, title, img, price, inCart} = this.props.product;
        return ( 

            <ProductWrapper className='col-6 mx-auto col-md-6 col-lg-3 my-3'>
                <div className="card">
                    <ProductConsumer>
                        {value => ( 
                            <div className="img-container p-5" 
                                onClick={() => value.handleDetail(id)}
                            >
                                <Link to='/details'>
                                    <img src={img} alt='porduct' className='card-img-top'/>
                                </Link>

                                <button 
                                    className='cart-btn'
                                    disabled={inCart ? true : false}
                                    onClick={()=> value.addToCart(id)}
                                >
                                     {inCart ? (<p className='mb-0' disabled>
                                        In Cart
                                        </p>): (<i className='fas fa-cart-plus'></i>)}
                                </button>
                            </div> 
                        )}
                </ProductConsumer>
                
                    {/* card Footer */}
                    
                    <div className='card-footer d-flex justify-content-between'>
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h6 className="text-blue font-italic mb-0">
                        <span className='mr-auto'> ₹ </span>
                         {price}
                        </h6>
                    </div>
                </div>
                
            </ProductWrapper>
        );
    }
}
 
export default Product;

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        background: white;
        transition: all 0.5s linear;
        
    }
    .card-footer{
        background: transparent;
        transition: all 0.5s linear;
        border-top: transparent;
    }
    &:hover{
        .card{
            border: 0.05rem solid rgba(0,0,0,0.4);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.4);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 0.5s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--mainYellow);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0 ;
        transform: translate(100%,100%);
        transition: all 0.5s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0,0);  
    }
    .cart-btn:hover {
        color: var(--Maroon);
        cursor: pointer;
    }

    @media only screen and (max-width:700px){
         .card-footer p{
             font-size:10px;
         }
        .card-footer h6{
            font-size: 15px;
        }
    }
`;