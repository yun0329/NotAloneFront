import React from 'react';


const Category = ({ text }) => {
  const categoryStyle = {
    width: '324px',
    height: '149px',
    backgroundColor: '#FEA900',
    margin: '20px', 
    borderRadius: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const textStyle = {
    color: '#000000',
    fontFamily: "'Do Hyeon', sans-serif",
    fontSize: '32px',
  };

  return (
    <div style={categoryStyle}>
      <span style={textStyle}>{text}</span>
    </div>
  );
};
export default Category;