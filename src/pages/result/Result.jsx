import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading';
import { MainContainer } from '../serviceInfo/ServiceInfo.style';
// import { LionImg, LogoTitle, MessageContainer, MessageDiv } from ".Result.style";
import { LionImg,LogoTitle,MessageContainer,MessageDiv } from './Result.style';
export default function Result() {
  return (
    <>
      <Header />
      <MainContainer>
      <MessageContainer>
      <LogoTitle src="img/logoTitle.png"/>
        <MessageDiv >음성변환중 ...</MessageDiv>
        <Loading/>
        
      </MessageContainer>
      </MainContainer>
    </>
  );
}