import React from 'react';
import styled from 'styled-components';
import { Button, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Cards = (props) => {
	return (
		<Container>
			<Cover>
				<Image source={props.image} />

				{/*       <WebView
          originWhitelist={['*']}
          startInLoadingState={true}
          source={{
            uri: 'https://www.amazon.com/s?k=women+clothes&ref=nb_sb_noss_2',
          }}
          scalesPageToFit={false}
          scrollEnabled={false}
        /> */}
			</Cover>
			<Content>
				<ImageFlag source={props.imageFlag} />
				<Caption>{props.caption}</Caption>
				<AmazonLogo source={props.logo} />
			</Content>
		</Container>
	);
};
export default Cards;

const Container = styled.TouchableOpacity`
	background-color: white;
	width: 315px;
	height: 280px;
	border-radius: 14px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	margin-left: 20px;
	margin-top: 20px;
`;
const Cover = styled.View`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const Content = styled.View`
	padding-left: 20px;
	flex-direction: row;
	align-items: center;
	height: 80px;
`;
const ImageFlag = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 22px;
`;
const Caption = styled.Text`
	font-size: 20px;
	font-weight: bold;
	left: 10px;
`;
const AmazonLogo = styled.Image`
	width: 40px;
	height: 40px;
	top: 12px;
	left: -90px;
`;
