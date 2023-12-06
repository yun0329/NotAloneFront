import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderStyle, ButtonStyle } from './Header.style';

const Header = () => {
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
        <img className = "backButton" src={"img/backButtonImage.png"} alt="뒤로가기" onClick={navigateBack} />
      </ButtonStyle>
  
      <ButtonStyle>
        <img className = "closeButton" src={"img/closeButton.png"} alt="닫기" onClick={navigateToMain} />
      </ButtonStyle>
    </HeaderStyle>
  );
};

export default Header;
