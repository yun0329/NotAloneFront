import { useState } from 'react';
import { ImgStyle, Menu, MenuWrapper, TextStyle } from './ListBox.style';
import React from 'react';
import Toggle from '../toggle/Toggle';
import dummy from './data.json';

const female={
    "images":[
        "women.png",
        "women.png",
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

export default function ListBox(props) {


    const [isGender, setisGender] = useState(props.gender);
    const genderHandler = () => {
        setisGender(!isGender)
      };
    const category=props.category;
    const menuList = dummy.sentences.filter(sentence => sentence.category === category);




//일단 화면 구성만 했음. 기능부분은 주석처리해논 부분 
{/* <DIV_Box> {items.map(item => <div>item</div>)} </DIV_Box> */}
    
  return(
    <>
        {/* <Toggle onClick={genderHandler}/> */}
        <MenuWrapper>
        {/* {menuList.map(menu=> */}
        {(isGender===false?male:female).images.map(img=>{
                return (
                <Menu>
                    <ImgStyle src={`img/${img}`}/>
                    {/* <TextStyle>{menu.content}</TextStyle> */}
                    <TextStyle>안녕하세요</TextStyle>
                    {/* <TextStyle>{menu.content}</TextStyle> */}
                </Menu>
                );
            }) 
        }
        {/* )} */}
        </MenuWrapper>
    
    </>
  );
}