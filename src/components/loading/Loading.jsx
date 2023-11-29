import Lottie from "lottie-react"; 
import loadingLottie from "./loadingLottie.json";
import { LionImg } from "../lionMessage/LionMessage.style";

function Loading() {
  return (
    <>
      <Lottie animationData={loadingLottie} />
      <LionImg src="img/lionBefore"/>
    </>
  );
}

export default Loading;