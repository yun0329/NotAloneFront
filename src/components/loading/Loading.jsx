import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';
import Toggle from '../toggle/Toggle';
import dummy from './data.json';

const female={
    "images":[
        "여_4.png",
        "여_4.png",
        "여_4.png",
        "여_4.png",
        "여_4.png",
        "여_4.png"
    ]
}
const male={
    "images":[
        "남.png",
        "남.png",
        "남.png",
        "남.png",
        "남.png",
        "남.png"
    ]
}
const Wrapper=styled.div`
position:relative;
left: 27%;
display:flex;
flex-wrap:wrap;
gap: 15px;
text-align: center;
`;
const Menu=styled.div`
position:relative;
width:161px;
height:155px;
background-color:#FEA900;
font-size:30px;
border-radius: 30px;
margin-top:5px;
vertical-align:bottom;
`;
const ImgStyle=styled.div`
position:absolute;
top:7%;
left:20%;
width:100px;
height:100px;
z-index:0;
`;
const TextStyle=styled.div`
position:absolute;
font-size:23px;
top:70%;
left:15%;

z-index:0;
`;
const MenuWrapper=styled.div`
position:relative;
left: 27%;
display:flex;
flex-wrap:wrap;
gap: 15px;
text-align: center;
`;
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
                return <Menu>
                    <ImgStyle src={`${process.env.PUBLIC_URL}/img/${img}`}/>
                    <TextStyle>안녕하세요</TextStyle>
                    {/* <TextStyle>{menu.content}</TextStyle> */}
                </Menu>
            }) 
        }
        {/* )} */}
        </MenuWrapper>
    
    </>
  );
}