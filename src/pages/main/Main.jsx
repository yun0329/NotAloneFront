import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import LionMessage from '../../components/lionHeader/LionHeader'
import { MainContainer } from '../serviceInfo/ServiceInfo.style';
import { QuickContainer, QuickHeader, UserBtnContainer,Menu,MenuWrapper,ImgStyle,TextStyle} from './Main.style';
// import dummy from '../src/components/listBox/data.json';
const female={
  "images":[
      "women.png",
      "women3.png",
      "women.png",
      "women.png",
      "women.png",
      "women.png"
  ]
}
const dummy={
  "sentences":[
    {"id":19, 
        "category":"main",
        "content": "누구세요?"},
        {"id":20, 
        "category":"main",
        "content": "필요없어요"},
        {"id":21, 
        "category":"main",
        "content": "문 앞에 두세요"},
        {"id":22, 
        "category":"main",
        "content": "여기 아니에요"}
  ]

}

export default function Main() {
  const navigate = useNavigate();
  const menuList = dummy.sentences.filter(sentence => sentence.category ==="main");

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
        {menuList.map(sentence=>{
        return (
        <Menu>
            <ImgStyle src={`img/${female}.images[0]`} />
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