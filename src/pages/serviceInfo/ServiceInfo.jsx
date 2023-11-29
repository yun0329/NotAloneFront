import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header'
import ServiceIntro from '../../components/serviceIntro/ServiceIntro';
import Button from '../../components/button/Button';
import { ServiceIntroWrapper, MainContainer } from './ServiceInfo.style';

export default function ServiceInfo() {
  const navigate = useNavigate();
  
  const navigateToMain = useCallback(() => {
    navigate('/main');
  }, [navigate]);

  return (
    <MainContainer>
      <Header />
      <ServiceIntroWrapper>
        <ServiceIntro imageSource={"img/service1.png"} text={"나 혼자 안 사는 척 하고 싶을 때 !"}/>
        <ServiceIntro imageSource={"img/service2.png"} text={"내 목소리로 직접 뱉기 어려울 때 !"}/>
        <ServiceIntro imageSource={"img/service3.png"} text={"이 모든 상황을 자연스러운 목소리로 !"}/>
        <ServiceIntro imageSource={"img/service4.png"} text={"여자 목소리, 남자 목소리 선택 가능 !"}/>
        <ServiceIntro imageSource={"img/service5.png"} text={"울음 섞인 소리, 웃음 소리까지 가능 ! "}/>
        <Button onClick={navigateToMain} >바로 사용해보기</Button>
      </ServiceIntroWrapper>
    </MainContainer>
  );
}
