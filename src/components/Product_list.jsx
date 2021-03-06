import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from "../context";

class Product_list extends Component {
    state={
        product:storeProducts
    };
   
render() { 
    return ( 
        <React.Fragment>
         <div className='py-4'>
            <div className="container">
                <Title name='Our' title='Products'></Title>
                <div className="row">
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product =>{
                                return <Product key={product.id} product={product}/>;
                            });
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}
 
export default Product_list ;