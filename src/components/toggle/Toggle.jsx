import { useState } from 'react';
import { ToggleContainer, Span1, Span2 } from './Toggle.style';
//import ListBox from '../listBox/ListBox';
// import dummy from "../db/data.json";

const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
    console.log({isOn})
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
    </>
  );
};
export default Toggle;