import React from 'react';
import { HeaderStyle, ButtonStyle } from './Header.style';

const Header = () => {
  return (
    <HeaderStyle>
      <ButtonStyle>
        <img className = "backButton" src={"img/backButtonImage.png"} alt="뒤로가기" />
      </ButtonStyle>
  
      <ButtonStyle>
        <img className = "closeButton" src={"img/closeButton.png"} alt="닫기" />
      </ButtonStyle>
    </HeaderStyle>
  );
};

export default Header;
