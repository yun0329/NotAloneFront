import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrangeBox, WhiteInputBox, OrangeButton, VerButton, ButtonWrapper } from './InputP.style';
import Button from '../button/Button';
import {handleMenuItemClick} from '../../components/api/api';
const Input = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = useCallback((gender) => {
    setSelectedGender(gender);
  }, []);

  const handleContentChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const navigateToResult = useCallback(async () => {
    await handleMenuItemClick(content, selectedGender);
    navigate('/result');
  }, [navigate, content, selectedGender]);

  return (
    <div>
      <OrangeBox>
        <p style={{ fontSize: '18px', color: 'black' }}>음성으로 번역하고 싶은 문장을 입력해주세요.</p>
      </OrangeBox>
      <WhiteInputBox
        type="text"
        placeholder="음성으로 번역하고 싶은 문장을 입력해주세요."
        value={content}
        onChange={handleContentChange}
      />
      <OrangeButton>
        <VerButton onClick={() => handleGenderChange('female')}>
          <p>여자 ver</p>
        </VerButton>
        <VerButton onClick={() => handleGenderChange('male')}>
          <p>남자 ver</p>
        </VerButton>
      </OrangeButton>
      <ButtonWrapper>
        <Button onClick={navigateToResult}>변환</Button>
      </ButtonWrapper>
    </div>
  );
};

export default Input;