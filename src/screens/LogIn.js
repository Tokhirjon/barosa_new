import React from 'react';
import styled from 'styled-components';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import InputTextField from '../components/InputTextField';
import {normalize} from '../utils/scaling';
import {LoginManager} from 'react-native-fbsdk';

export default class LogIn extends React.Component {
  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      },
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View
            style={{
              marginTop: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Logo source={require('../assets/temp2/logo.png')} />
            <Text
              style={[
                styles.text,
                {marginTop: 10, fontSize: 22, fontWeight: '500'},
              ]}>
              Barosa
            </Text>
            <Text style={[styles.text, {fontSize: 18, fontWeight: '500'}]}>
              해외 직구바로사로 바로사
            </Text>
          </View>
          <View
            style={{
              marginTop: 48,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => this._fbAuth}>
              <View style={styles.socialButton}>
                <Image
                  source={require('../assets/temp2/facebook.png')}
                  style={styles.socialLogo}
                />
                <Text style={styles.text}>Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => alert('Google Account')}>
              <Image
                source={require('../assets/temp2/google.png')}
                style={styles.socialLogo}
              />
              <Text style={styles.text}>Google</Text>
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text,
              {
                color: '#ABB4BD',
                fontSize: 15,
                textAlign: 'center',
                marginVertical: normalize(20),
              },
            ]}>
            or
          </Text>

          <InputTextField
            style={styles.inputTitle}
            title="Email"
            dataDetector={'name'}
          />
          <InputTextField
            style={{
              marginTop: normalize(32),
              marginBottom: normalize(8),
            }}
            title="Password"
            isSecure={true}
          />

          <Text style={[styles.text, styles.link, {textAlign: 'right'}]}>
            Forgot Password?
          </Text>

          <TouchableOpacity
            style={styles.submitContainer}
            onPress={() => {
              this.props.navigation.goBack(), alert('Welcome to Barosa');
            }}>
            <Text
              style={[
                styles.text,
                {
                  color: '#FFF',
                  fontWeight: '600',
                  fontSize: 16,
                },
              ]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14,
                  color: '#ABB4BD',
                  textAlign: 'center',
                  marginTop: normalize(24),
                },
              ]}>
              Don't have an account?
              <Text style={[styles.text, styles.link]}> Register Now</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  text: {
    fontFamily: 'Avenir Next',
    color: '#1D2029',
  },
  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    color: '#FF1654',
    fontSize: 14,
    fontWeight: '500',
  },
  submitContainer: {
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    shadowColor: 'rgba(255, 22, 84, 0.24)',
    shadowOffset: {width: 0, height: 9},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
});
