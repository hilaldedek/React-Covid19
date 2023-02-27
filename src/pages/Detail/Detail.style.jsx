import styled from 'styled-components';
export const DateInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
  background:#727e8196;
  margin-top: 4rem;
`;

export const StyledDiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #64ae9291;
  margin: 1rem;
  background-color:#64ae9291;
  &:hover{
    background-color:#88cbb291;
    border: 2px solid #88cbb291;
  }
  p{
    font-size: 2rem;
  }
`;