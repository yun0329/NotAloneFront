import { useState } from 'react';
import styled from 'styled-components';
import ListBox from '../listBox/ListBox';
// import dummy from "../db/data.json";



const ToggleContainer = styled.div`
  position: relative;
  margin-top: 15px;
  left: 47%;
  cursor: pointer;
  margin-bottom:15px;

  > .toggle-container {
    width: 200px;
    height: 39px;
    border-radius: 30px;
    background-color: #f7e7cb;}
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: #f7e7cb;
    transition : 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 4px;
    left: 103px;
    width: 87px;
    height: 32px;
    border-radius: 20px;
    background-color: #ffffff;
    transition : 0.5s
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  } >.toggle--checked {
    left:10px;
    transition : 0.5s;
  }
`;
const Span1=styled.span`
    position: absolute;
    font-size:20px;
    left:33px;
    bottom:8px;
    z-index:1;
`;
const Span2=styled.span`
    position: absolute;
    font-size:20px;
    left:128px;
    bottom:8px;
    z-index:1;
`;


const Desc = styled.div`
  //설명 부분의 CSS를 구현
  text-align: center;
  margin: 20px;
`;
const Table=styled.div`
  display:flex;
`;


const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <>
      <ToggleContainer
        onClick={toggleHandler}
      >
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}/>
        <Span1>여자</Span1>
        <Span2>남자</Span2>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}/>
      </ToggleContainer>
      {/*off = 남자, on= 여자 */}
      {/* {isOn === false ?
      <Table><div className="off"></div></Table>:
      <Table><div className="on"></div></Table>} */}
      <ListBox name={isOn}/>
    </>
  );
};
export default Toggle;
