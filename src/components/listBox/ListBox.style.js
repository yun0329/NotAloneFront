import styled from 'styled-components';

export const Wrapper=styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
`;
export const Menu=styled.div`
  position:relative;
  display:flex;
  flex-direction: column;
  width:161px;
  height:155px;
  background-color:#FEA900;
  border-radius: 30px;
  margin-top:5px;
  
`;
export const ImgStyle=styled.img`
  position:absolute;
  top:7%;
  left:20%;
  width:100px;
  height:100px;
`;
export const TextStyle=styled.p`
  font-size:20px;
  text-align: center;
  margin-top:70%;
`;
export const MenuWrapper=styled.div`
  width: fit-content;
  position:relative;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;