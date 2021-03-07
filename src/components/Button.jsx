import styled from "styled-components";


export const ButtonContainer = styled.button`
    font-size: 1.2rem;
    background: transparent;
    border: 0.05rem solid ;
    border-color:${props => props.cart ? 'gray' : 'var(--mainYellow)'};
    color:${props => props.cart ? 'gray': 'var(--mainYellow)'} ;
    border-radius: 0.3rem;
    padding: 0.3rem 0.5rem;
    courser: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        background: ${props => props.cart ? 'gray' : 'var(--mainYellow)'};
        color: ${props => props.cart ? 'var(--mainWhite)' : 'var(--Maroon)'};
    }
    &:focus{
        outline: none;
    }    
`