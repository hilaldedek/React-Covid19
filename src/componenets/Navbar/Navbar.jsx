import React from 'react';
import navbarPng from '../../assets/covid-19.png';
import { StyledDiv,Nav,NavLink} from './Navbar.style';

const Navbar = () => {
  return (
    <div>
        <Nav>
            <StyledDiv>
                <NavLink to="/">
                    <img src={navbarPng} alt="navpng" width={"100rem"} />
                </NavLink>
                
                
                <NavLink to="covid">What is covid 19?</NavLink>
                <NavLink to="rules">Rules</NavLink>
                <NavLink to="about">About</NavLink>
            </StyledDiv>
        </Nav>
    </div>
  )
}

export default Navbar