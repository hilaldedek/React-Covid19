import styled from "styled-components";
import Flex from "../GlobalStyles/Flex.style";
import { Link } from "react-router-dom";

export const StyledDiv = styled.div`
  display: flex;
  justify-content:space-around ;
  color: white;
  font-family: 'Playfair Display', serif;
  
  padding: 0.8rem;
    `;
export const Nav =styled(Flex)`
    background-color:#64ae92;
`;
export const NavLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size:2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;