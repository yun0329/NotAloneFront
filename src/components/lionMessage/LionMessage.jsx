import { useNavigate } from 'react-router-dom';
import { LionImg, LogoTitle, MessageContainer, MessageDiv } from "./LionMessage.style";
import Button from '../button/Button';
import logoTitleImg from '../../assets/img/logoTitle.png';
import lionBeforeImg from '../../assets/img/lionBefore.png';

export default function LionMessage() {
  const navigate = useNavigate();

  return (
    <>
      <MessageContainer>
        <LogoTitle src={logoTitleImg}/>
        <MessageDiv onClick={() => navigate('/serviceInfo')}>서비스 소개 클릭!</MessageDiv>
        <LionImg src={lionBeforeImg} />
        <Button onClick={() => navigate('/main')}>시작하기</Button>
      </MessageContainer>
    </>
  );
}