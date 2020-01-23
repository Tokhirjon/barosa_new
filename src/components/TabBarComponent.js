import React from 'react';
import styled from 'styled-components';
import {normalize} from '../utils/scaling';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const TabBarCompoent = props => {
  const {
    navigation: {
      state: {index, routes},
    },
  } = props;
  console.log(props);
  const icons = {
    Home: require('../assets/tab_icons/house.svg'),
    Stores: require('../assets/tab_icons/store.svg'),
    Cart: require('../assets/tab_icons/cart.svg'),
    Tracking: require('../assets/tab_icons/order_tracking.svg'),
    Account: require('../assets/tab_icons/user.svg'),
  };
  return (
    <Container>
      {routes.map((route, idx) => {
        console.log(route);
        return (
          <SingleTab
            onPress={() => props.jumpTo(route.key)}
            active={idx == index}>
            <SingTabIcon source={icons[route.key]} />
            <SingleTabText active={idx == index}>{route.key}</SingleTabText>
          </SingleTab>
        );
      })}
    </Container>
  );
};
export default TabBarCompoent;

const Container = styled.View`
  width: 100%;
  height: ${normalize(60)};
  background-color: transparent;
  flex-direction: row;
  border-top-width: 1;
  border-top-color: gray;
  margin-bottom: ${getBottomSpace()}px;
`;
const SingleTab = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${props => (props.active ? 'gray' : 'white')};
`;

const SingTabIcon = styled.Image`
  width: ${normalize(20)};
  height: ${normalize(20)};
  margin-bottom: ${normalize(10)};
`;

const SingleTabText = styled.Text`
  font-size: ${normalize(10)};
  color: ${props => (props.active ? 'red' : 'gray')};
  font-weight: 500;
`;
