import React from 'react';

const ImageTextBox = ({ imageSource, text }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const imageStyle = {
    width: 'auto',
    height: 'auto',
    margin: '10px',
  };

  const textBoxStyle = {
    width: '335px',
    height: '46px',
    borderRadius: '30px',
    backgroundColor: '#F0F1F3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
  };

  const textStyle = {
    color: '#000000',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <img src={imageSource} alt="Image" style={imageStyle} />
      <div style={textBoxStyle}>
        <span style={textStyle}>{text}</span>
      </div>
    </div>
  );
};

export default ImageTextBox;
