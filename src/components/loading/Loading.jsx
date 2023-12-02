import Lottie from "lottie-react"; 
import loadingLottie from "./loadingLottie.json";
import { LionImg } from "../lionMessage/LionMessage.style";
import {Wrapper,Div,LottieWrapper} from "./Loading.style";
function Loading() {
  return (
    <Wrapper>
      <LottieWrapper>
        <Lottie animationData={loadingLottie} />
      </LottieWrapper>
      <Div>
      <LionImg src="img/lionBefore.png"/>
      </Div>
    </Wrapper>
  );
}

export default Loading;