import { styled } from 'styled-components';

export const QuickContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const QuickHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  strong {
    font-size: 25px;
    font-family: 'Pretendard-Regular';
  }
  p {
    font-family: 'Pretendard-Regular';
  }
`;

export const UserBtnContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 20px 0;

  strong {
    font-size: 25px;
    font-family: 'Pretendard-Regular';
  }
  button {
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const Wrapper=styled.div`
  position:relative;
  left: 27%;
  display:flex;
  flex-wrap:wrap;
  gap: 15px;
  text-align: center;
`;
export const Menu=styled.div`
  position:relative;
  width:161px;
  height:155px;
  background-color:#FEA900;
  font-size:28px;
  border-radius: 30px;
  margin-top:5px;
  vertical-align:bottom;
`;
export const ImgStyle=styled.img`
  position:absolute;
  top:7%;
  left:20%;
  width:100px;
  height:100px;
  z-index:0;
`;
export const TextStyle=styled.div`
  position:absolute;
  font-size:20px;
  top:70%;
  left:15%;
  z-index:0;
`;
export const MenuWrapper=styled.div`
  width: fit-content;
  position:relative;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  text-align: center;
`;
