import React from 'react';
import { CategoryStyle, TextStyle } from './Category.style';

const Category = ({ text }) => {
  return (
    <CategoryStyle>
      <TextStyle>{text}</TextStyle>
    </CategoryStyle>
  );
};
export default Category;