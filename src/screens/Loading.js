import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import firebase from 'firebase';

class Loading extends React.Component {
  componentDidMount() {
    this.checkIfLogIn();
  }
  //Login Checking here...
  checkIfLogIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          this.props.navigation.navigate('HomeScreen');
        } else {
          this.props.navigation.navigate('LogIn');
        }
      }.bind(this),
    );
  };
  render() {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
}
/* export default Loading; */
const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
