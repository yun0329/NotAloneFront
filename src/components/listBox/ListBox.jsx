import { useState } from 'react';
import { ToggleContainer, Span1, Span2 } from './Toggle.style';
import { ImgStyle, Menu, MenuWrapper, TextStyle, Wrapper } from './ListBox.style';
import React from 'react';
import CATEGORY_DATA from '../../constants/categoryData'; // Import the category data
import axios from 'axios';
import {handleMenuItemClick} from '../api/api';
// import audioUrl from '../../assets/audio/test.wav';
const ListBox = (props) => {
  const [isOn, setisOn] = useState(false);
  const menuList = CATEGORY_DATA[props.category].list;
  const toggleHandler = () => {
    setisOn(!isOn);
    console.log({ isOn });
  };
  //오디오 재생 test
  // const handleMenuItemClick = async (id, content,isOn) => {
  //   const audio = new Audio(audioUrl);
  //   audio.play()
  //   .then(() => {
  //   console.log('음악 재생 성공');
  //   })
  //   .catch((error) => {
  //   console.error('음악 재생 실패', error);
  //   });
  //   };
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
            <Menu key={sentence.id} onClick={() => handleMenuItemClick(sentence.content,isOn)}>
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
