import React from 'react';
import { OrangeBox, WhiteInputBox, OrangeButton,Button } from './InputP.style';

const input = () => {
  return (
    <div>
      <OrangeBox>
        <p style={{ fontSize: '18px', color: 'black'  }}>음성으로 번역하고 싶은 문장을 입력해주세요.</p>
      </OrangeBox>
      <WhiteInputBox
        type="text"
        placeholder="음성으로 번역하고 싶은 문장을 입력해주세요."
      />
       <OrangeButton>
        <Button>
          <p style={{ fontSize: '23px', color: 'black' }}>여자 ver</p>
        </Button>
        <Button>
          <p style={{ fontSize: '23px', color: 'black' }}>남자 ver</p>
        </Button>
      </OrangeButton>
    </div>
  );
};

export default input;
