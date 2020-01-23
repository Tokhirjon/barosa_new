import React from 'react';
import styled from 'styled-components';

const StoresCards = props => {
  return (
    <Container>
      <Cover>
        <StoresImage source={props.image} />
        <Content>
          <ImageFlag source={props.imageFlag} />
          <Title>{props.title}</Title>
          <Caption>{props.caption}</Caption>
          <AmazonLogo source={props.logo} />
        </Content>
      </Cover>
    </Container>
  );
};
export default StoresCards;

const Container = styled.View`
  background-color: white;
  width: 380px;
  height: 150px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-left: 15px;
  margin-top: 20px;
`;
const Cover = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 14px;
  overflow: hidden;
`;

const StoresImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Content = styled.View`
  left: 0;
  top: 60px;
  justify-content: center;
  align-items: center;
  height: 80px;
`;
const ImageFlag = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: white;
  font-family: 'verdana';
`;
const Caption = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  left: 2px;
`;
const AmazonLogo = styled.Image`
  width: 40px;
  height: 40px;
  top: -20px;
  left: -30px;
`;
