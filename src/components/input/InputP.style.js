import styled from 'styled-components';

export const OrangeBox = styled.div`
  width: 100%;
  height: 66px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px; 
    color: black;
  }
`;

export const WhiteInputBox = styled.textarea`
  width: 90%;
  height: 400px;
  background-color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border: 2px solid white;
  outline: none;
`;

export const OrangeButton = styled.div`
  display: flex;
  width: 100%;
`;

export const VerButton = styled.div`
  flex: 1;
  height: 66px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    font-size: 23px;
    color: black;
  }

`;

export const ButtonWrapper = styled.div`
  margin: 15px 30px;
`;