import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native';
import { normalize } from '../utils/scaling';

const dw = Dimensions.get('window').width;

export default class CarouselComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			carouselItems: [
				{
					image: require('../assets/temp/review_image1.jpg')
				},
				{
					image: require('../assets/temp/review_image2.jpg')
				},
				{
					image: require('../assets/temp/review_image3.jpg')
				}
			],
			initialNumToRender: 0
		};
	}

	_renderItem({ item, index }) {
		return (
			<Container>
				<Cover>
					<Image source={item.image} />
				</Cover>
			</Container>
		);
	}
	onSnapToNext = (target) => {};
	render() {
		return (
			<SafeAreaView>
				<Carousel
					ref={(ref) => {
						return (this.carousel = ref);
					}}
					data={this.state.carouselItems}
					firstItem={0}
					sliderWidth={dw}
					itemWidth={dw}
					renderItem={this._renderItem}
					autoplay={true}
					loop={true}
					// enableMomentum={false}
					lockScrollWhileSnapping={true}
					onSnapToItem={(slideIndex) => {
						this.setState({
							initialNumToRender: slideIndex
						});
					}}
				/>
				<DotWrapper>
					{this.state.carouselItems.map((item, index) => {
						if (index == this.state.initialNumToRender) {
							return <HighlightedDot />;
						} else return <UnHighlightedDot />;
					})}
				</DotWrapper>
			</SafeAreaView>
		);
	}
}

const Container = styled.View`
	background-color: white;
	width: 100%;
	height: 280px;
	margin-bottom: ${normalize(30)};
`;
const Cover = styled.View`
	width: 100%;
	height: ${normalize(280)};
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
const DotWrapper = styled.View`
	width: 100%;
	height: ${normalize(50)};
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;
const HighlightedDot = styled.View`
	width: ${normalize(10)};
	height: ${normalize(10)};
	border-radius: 50;
	background-color: red;
	margin-left: ${normalize(5)};
`;

const UnHighlightedDot = styled.View`
	width: ${normalize(10)};
	height: ${normalize(10)};
	border-radius: 50;
	background-color: gray;
	margin-left: ${normalize(5)};
`;
