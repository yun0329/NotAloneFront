import styled from 'styled-components';
import React from 'react';

export default function ListBox(props) {
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
// console.log(dummy);
// const menuList=dummy.sentences.filter()
//일단 화면 구성만 했음. 컨포넌트 구성될 수 있도록 처리할 예정 
{/* <DIV_Box> {items.map(item => <div>item</div>)} </DIV_Box> */}

  return(
    <>
    <Wrapper>
        {
            `${props.name}`===false ? male: female.images.map(img=>{
                return <Menu>
                    <ImgStyle src={`${process.env.PUBLIC_URL}/img/${img}`}/>
                    <TextStyle>안녕하세요</TextStyle>
                </Menu>
            }) 
        }
    </Wrapper>
    </>
  );
}