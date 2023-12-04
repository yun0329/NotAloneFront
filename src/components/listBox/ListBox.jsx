import { useState} from 'react';
import { ToggleContainer, Span1, Span2 } from './Toggle.style';
import { ImgStyle, Menu, MenuWrapper, TextStyle, Wrapper } from './ListBox.style';
import React from 'react';
import dummy from './data.json';
import axios from 'axios';
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
const male=
{
    "images":[
        "men.png",
        "men.png",
        "men.png",
        "men.png",
        "men.png",
        "men.png"
    ]
}
const ListBox = (props) => {
  const [isOn, setisOn] = useState(false);

  const menuList = dummy.sentences.filter(sentence => sentence.category ===props.category);
  const toggleHandler = () => {
    setisOn(!isOn)
    console.log({isOn})
  };
  console.log(menuList);

  //통신
  // const playAudio=(e)=>{
  //   axios.get(`https://imnotalone.shop:8090/voice/get?prompt=${e.value}&gender=${isOn === false ? male:female}`)
  //   .then(function (response) {
  //        const audioData=response
  //        return(
  //         <audio src={audioData}></audio>
  //        );
  //   }).catch(function (error) {
  //       console.log(error);
  //   });

  // };
  return (
    <Wrapper>
      <ToggleContainer
        onClick={toggleHandler}
      >
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}/>
        <Span1>여자</Span1>
        <Span2>남자</Span2>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}/>
      </ToggleContainer>
      {/*off = 남자, on= 여자 */}
      <MenuWrapper>
        {menuList.map(sentence=>{
        return (
        // <Menu onClick={(e)=>playAudio(e)}>
        <Menu>
            <ImgStyle src={`img/${isOn === false ? male.images[0] : female.images[0]}`} />
            <TextStyle>{sentence.content}</TextStyle>
        </Menu>
        );    
      })}
      </MenuWrapper>
    </Wrapper>
  );
};
export default ListBox;