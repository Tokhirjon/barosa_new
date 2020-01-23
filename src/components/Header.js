import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

//utils for scaling
import {normalize} from '../utils/scaling';

class Header extends React.Component {
  //toggle

  render() {
    return (
      <HeaderWrapper>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <MenuImage source={require('../assets/Icons/menu.svg')} />
        </TouchableOpacity>
        <LogoTitle>Barosa</LogoTitle>
        <TouchableOpacity>
          <NotificationImage
            source={require('../assets/Icons/notification.svg')}
          />
        </TouchableOpacity>
      </HeaderWrapper>
    );
  }
}
export default Header;

const HeaderWrapper = styled.View`
  height: ${normalize(60)};
  width: 100%;
  background: #ffffff;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuImage = styled.Image`
  width: ${normalize(25)};
  height: ${normalize(25)};
  margin-left: ${normalize(15)};
`;
const LogoTitle = styled.Text`
  font-size: 20px;
  font-style: italic;
  text-transform: uppercase;
  font-weight: 600;
`;
const NotificationImage = styled.Image`
  width: ${normalize(25)};
  height: ${normalize(25)};
  margin-right: ${normalize(15)};
`;
