import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderStyle, ButtonStyle } from './LionHeader.style';

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
        <img className="backButton" src={"img/backButtonImage.png"} alt="뒤로가기" onClick={navigateBack} />
      </ButtonStyle>
      <img className="logo" src={"img/logo.png"} alt="로고" />
      <ButtonStyle>
        <img className="closeButton" src={"img/closeButton.png"} alt="닫기" onClick={navigateToMain} />
      </ButtonStyle>
    </HeaderStyle>
  );
};

export default LionHeader;
