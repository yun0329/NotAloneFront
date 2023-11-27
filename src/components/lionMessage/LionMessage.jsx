import { useNavigate } from 'react-router-dom';
import { LionImg, LogoTitle, MessageContainer, MessageDiv } from "./LionMessage.style";
import Button from '../button/Button';

export default function LionMessage() {
  const navigate = useNavigate();

  return (
    <>
      <MessageContainer>
        <LogoTitle src="img/logoTitle.png"/>
        <MessageDiv onClick={() => navigate('/serviceInfo')}>서비스 소개 클릭!</MessageDiv>
        <LionImg src="img/lionBefore.png"/>
        <Button onClick={() => navigate('/main')}>시작하기</Button>
      </MessageContainer>
    </>
  );
}