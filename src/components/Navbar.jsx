import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.ico';
import styled from 'styled-components';
import { ButtonContainer } from "./Button";


class Navbar extends Component {
    render() { 
        return ( 
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>

            { /*https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */ }

            <Link to='/'>
                <img src={logo} alt='store' className='navbar-brand'/>
            </Link>

            <ul className="navbar-nav align-item-center">
                <li className="nav-item ml-3 text-blue">
                    <Link to='/' className='font-weight-bold text-decoration-none text-blue'>
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
    // background: var(--mainWhite);
    color: #f3f3f3;
    font-size: 1.3rem;
`
