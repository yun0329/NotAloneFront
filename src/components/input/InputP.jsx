import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrangeBox, WhiteInputBox, OrangeButton, VerButton, ButtonWrapper } from './InputP.style';
import Button from '../button/Button';
import { handleMenuItemClick } from '../api/api';
const Input = () => {
  const navigate = useNavigate();

  const navigateToResult = useCallback(() => {
    navigate('/result');
  }, [navigate]);

  return (
    <>
      <OrangeBox>
        <p>음성으로 번역하고 싶은 문장을 입력해주세요.</p>
      </OrangeBox>
      <WhiteInputBox
        type="text"
        placeholder="음성으로 번역하고 싶은 문장을 입력해주세요."
      />
       <OrangeButton>
        <VerButton>
          <p>여자 ver</p>
        </VerButton>
        <VerButton>
          <p>남자 ver</p>
        </VerButton>
      </OrangeButton>
      <ButtonWrapper>
        <Button onClick={navigateToResult}>변환</Button>
      </ButtonWrapper>
    </>
  );
};

export default Input;
