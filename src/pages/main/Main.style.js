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