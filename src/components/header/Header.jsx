import React from 'react';

const Header = () => {
  
  const headerStyle = {
    width: '390px',
    height: '172px',
    background: 'linear-gradient(to Top, #FFFFFF 0%, #E6C88D 50%, #F2B846 75%, #F8B123 80%, #F5B433 85%, #FAAE17 90%, #FBAD10 95%, #FEA900 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    marginTop: '-70px',
  };


  return (
    <div style={headerStyle}>
      <button style={buttonStyle}>
        <img className = "backButton" src={"img/backButtonImage.png"} alt="뒤로가기" />
      </button>
  
      <button style={buttonStyle}>
        <img className = "closeButton" src={"img/closeButton.png"} alt="닫기" />
      </button>
    </div>
  );
};

export default Header;
