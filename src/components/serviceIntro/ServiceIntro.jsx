import React from 'react';
import { ContainerStyle, ImageStyle, TextBoxStyle, TextStyle } from './ServiceIntro.style';

const ImageTextBox = ({ imageSource, text }) => {

  return (
    <ContainerStyle>
      <ImageStyle src={imageSource} alt="Image" />
      <TextBoxStyle>
        <TextStyle>{text}</TextStyle>
      </TextBoxStyle>
    </ContainerStyle>
  );
};

export default ImageTextBox;
