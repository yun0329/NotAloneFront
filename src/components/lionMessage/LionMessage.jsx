import React from 'react';
import { HeaderStyle, ButtonStyle } from './LionMessage.style';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <ButtonStyle>
        <img className = "backButton" src={"img/backButtonImage.png"} alt="뒤로가기" onClick={navigate(-1)} />
      </ButtonStyle>
      <img className = "logo" src={"img/logo.png"} alt="로고" />
      <ButtonStyle>
        <img className = "closeButton" src={"img/closeButton.png"} alt="닫기" onClick={navigate('/main')}/>
      </ButtonStyle>
    </HeaderStyle>
  );
};

export default Header;
