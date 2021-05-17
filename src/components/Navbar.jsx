import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.ico';
import styled from 'styled-components';
import { ButtonContainer } from "./Button";


class Navbar extends Component {
    render() { 
        return ( 
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>

            <Link to='/'>
                <img src={logo} alt='store' className='navbar-brand'/>
            </Link>

            <ul className="navbar-nav align-item-center">
                <li className="nav-item ml-3 text-yellow">
                    <Link to='/' className='font-weight-bold text-decoration-none text-yellow'>
                       SNEAKOUT 
                    </Link>
                </li> 
            </ul>

            <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className='mr-2'>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    My Cart
                </ButtonContainer>
            </Link>
            
            </NavWrapper>
        );
    }
}
 
export default Navbar;




const NavWrapper = styled.nav`
    background: var(--Maroon);
    color: #f3f3f3;
    font-size: 1.3rem;
`
