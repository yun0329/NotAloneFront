import React from 'react';
import { CategoryStyle, TextStyle } from './Category.style';
import CATEGORY_DATA from '../../constants/categoryData';

const Category = ({ category, onClick }) => {
  const categoryInfo = CATEGORY_DATA[category];

  if (!categoryInfo) {
    return <div>카테고리 불러오는 중..</div>
  }

  return (
    <CategoryStyle onClick={() => onClick(category)}>
      <TextStyle>{categoryInfo.name}</TextStyle>
    </CategoryStyle>
  );
};

export default Category;