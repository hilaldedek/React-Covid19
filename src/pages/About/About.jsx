import React from 'react';
import developer from '../../assets/developer.png';
import {Img,StyledDiv,StyledButton} from "./About.style";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const About = () => {
  return (
    <div>
       
            
            <StyledDiv>
                <Img src={developer}/>
                <p>Coded By Hilal Dedek</p>
            </StyledDiv>
            <StyledDiv>
                <Img src={linkedin}/>
                <StyledButton><a href="https://www.linkedin.com/in/hil%C3%A2ldedek/" target='_blank' rel="noopener noreferrer"> Linkedin</a></StyledButton>
            </StyledDiv>  
            <StyledDiv>
                <Img src={github}/>
                <StyledButton><a href="https://github.com/hilaldedek" target='_blank' rel="noopener noreferrer">Github</a></StyledButton>
            </StyledDiv>  
    </div>
  )
}

export default About