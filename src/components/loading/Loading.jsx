import Lottie from "lottie-react"; 
import loadingLottie from "./loadingLottie.json";
import { LionImg } from "../lionMessage/LionMessage.style";
import {Wrapper,Div,LottieWrapper} from "./Loading.style";
import lionBeforeImg from '../../assets/img/lionBefore.png';

function Loading() {
  return (
    <Wrapper>
      <LottieWrapper>
        <Lottie animationData={loadingLottie} />
      </LottieWrapper>
      <Div>
      <LionImg src={lionBeforeImg} />
      </Div>
    </Wrapper>
  );
}

export default Loading;