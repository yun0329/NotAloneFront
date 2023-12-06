import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import LionMessage from '../../components/lionHeader/LionHeader';
import { MainContainer } from '../serviceInfo/ServiceInfo.style';
import { QuickContainer, QuickHeader, UserBtnContainer, Menu, MenuWrapper, ImgStyle, TextStyle } from './Main.style';
import CATEGORY_DATA from '../../constants/categoryData'; 

export default function Main() {
  const navigate = useNavigate();
  const mainCategory = CATEGORY_DATA.alone;
  const menuList = mainCategory.list.slice(0, 4);

  const navigateToCategory = useCallback(() => {
    navigate('/category');
  }, [navigate]);

  const navigateToTextInput = useCallback(() => {
    navigate('/textInput');
  }, [navigate]);

  return (
    <MainContainer>
      <LionMessage />
      <QuickContainer>
        <QuickHeader>
          <strong>Quick 버전</strong>
          <p>자주 사용하는 문장들</p>
        </QuickHeader>
        <MenuWrapper>
          {menuList.map((sentence) => {
            return (
              <Menu key={sentence.id}>
                <ImgStyle src={sentence.img.w} />
                <TextStyle>{sentence.content}</TextStyle>
              </Menu>
            );
          })}
        </MenuWrapper>
      </QuickContainer>
      <UserBtnContainer>
        <strong>사용자 버전</strong>
        <Button onClick={navigateToCategory}>카테고리 선택</Button>
        <Button onClick={navigateToTextInput}>내가 입력하기</Button>
      </UserBtnContainer>
    </MainContainer>
  );
}