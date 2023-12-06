import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderStyle, ButtonStyle } from './LionHeader.style';
import backButtonImg from '../../assets/img/backButtonImage.png';
import logoImg from '../../assets/img/logo.png';
import closeImg from '../../assets/img/closeButton.png';

const LionHeader = () => {
  const navigate = useNavigate();
  
  const navigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const navigateToMain = useCallback(() => {
    navigate('/main');
  }, [navigate]);

  return (
    <HeaderStyle>
      <ButtonStyle>
        <img className="backButton" src={backButtonImg} alt="뒤로가기" onClick={navigateBack} />
      </ButtonStyle>
      <img className="logo" src={logoImg} alt="로고" />
      <ButtonStyle>
        <img className="closeButton" src={closeImg} alt="닫기" onClick={navigateToMain} />
      </ButtonStyle>
    </HeaderStyle>
  );
};

export default LionHeader;
