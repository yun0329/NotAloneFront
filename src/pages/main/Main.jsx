import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import LionMessage from '../../components/lionHeader/LionHeader'
import ListBox from '../../components/listBox/ListBox';
import { MainContainer } from '../serviceInfo/ServiceInfo.style';
import { QuickContainer, QuickHeader, UserBtnContainer } from './Main.style';

export default function Main() {
  const navigate = useNavigate();

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
        <ListBox />
      </QuickContainer>
      <UserBtnContainer>
        <strong>사용자 버전</strong>
        <Button onClick={navigateToCategory}>카테고리 선택</Button>
        <Button onClick={navigateToTextInput}>내가 입력하기</Button>
      </UserBtnContainer>
    </MainContainer>
  );
}