import React from 'react';

export default function Title({name, title}){
    return(
        <div className="container">
            <div className="col-10 mx-auto ml-2 text-center text-title">
                <h1 className='font-weight-bold'> {name} <strong className='text-blue'>{title}</strong> 
                </h1>
            </div>
        </div>
    )

}

