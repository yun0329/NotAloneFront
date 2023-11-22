import React from 'react';
import CustomButton from './Button.style';

export default function Button({ children, onClick }) {
  return (
    <CustomButton onClick={onClick}>
      {children}
    </CustomButton>
  );
}

// ✅ USAGE
// <Button>
//  확인
// </Button>