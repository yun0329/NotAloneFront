import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Loading from '../../components/loading/Loading';
import { MainContainer } from '../serviceInfo/ServiceInfo.style';
import { BeforeContainer, LogoTitle, MessageContainer, MessageDiv } from './Result.style';
import { LionImg } from '../../components/lionMessage/LionMessage.style';

export default function Result() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const simulateConversion = async () => {
      setTimeout(() => {
        setResponse('변환된 음성 결과');
      }, 7000);
    };

    // 변환 작업 시작
    simulateConversion();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 함

  return (
    <>
      <Header />
      <MainContainer>
        <MessageContainer>
          <LogoTitle src="img/logoTitle.png" />
          {response ? (
            <BeforeContainer>
              <MessageDiv>음성 변환 완료!</MessageDiv>
              <LionImg src='img/lionAfter.png'/>
            </BeforeContainer>
          ) : (
            <>
              <MessageDiv>음성 변환중 ...</MessageDiv>
              <Loading />
            </>
          )}
        </MessageContainer>
      </MainContainer>
    </>
  );
}
