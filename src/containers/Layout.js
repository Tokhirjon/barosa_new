import React from 'react';
import styled from 'styled-components';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

//components
import Header from './../components/Header';

//utils
import {normalize} from '../utils/scaling';

const Layout = props => {
  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  margin-top: ${getStatusBarHeight() + 5};
`;
