import { useState } from 'react';
import { ToggleContainer, Span1, Span2 } from './Toggle.style';
import { ImgStyle, Menu, MenuWrapper, TextStyle, Wrapper } from './ListBox.style';
import React from 'react';
import CATEGORY_DATA from '../../constants/categoryData'; // Import the category data

const ListBox = (props) => {
  const [isOn, setisOn] = useState(false);

  const menuList = CATEGORY_DATA[props.category].list;
  const toggleHandler = () => {
    setisOn(!isOn);
    console.log({ isOn });
  };

  return (
    <Wrapper>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`} />
        <Span1>여자</Span1>
        <Span2>남자</Span2>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
      </ToggleContainer>
      <MenuWrapper>
        {menuList.map((sentence) => {
          const images = sentence.img;
          const selectedImage = isOn ? images?.w : images?.m;

          return (
            <Menu key={sentence.id}>
              <ImgStyle src={selectedImage} />
              <TextStyle>{sentence.content}</TextStyle>
            </Menu>
          );
        })}
      </MenuWrapper>
    </Wrapper>
  );
};
export default ListBox;
