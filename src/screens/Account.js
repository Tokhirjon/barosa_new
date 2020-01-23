import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//containers
import Layout from '../containers/Layout';
import { normalize } from '../utils/scaling';

class Account extends React.Component {
	render() {
		return (
			<Layout>
				<ScrollView showsVerticalScrollIndicator={false}>
					<WrapperHeader>
						<TouchableOpacity>
							<UserIcon source={require('../assets/temp2/logo.png')} />
							<UserName>Welcome: Guest</UserName>
						</TouchableOpacity>
					</WrapperHeader>
					<LineDraw1 />
					<WrapperBody>
						<TouchableOpacity>
							<OrderListIcon source={require('../assets/Icons/order.svg')} />
							<Text1>주문목록</Text1>
							<RightPointer source={require('../assets/Icons/right_pointer.svg')} />
							<LineDraw />
						</TouchableOpacity>
						<TouchableOpacity>
							<OrderListIcon source={require('../assets/Icons/cancelations.svg')} />
							<Text1>취소*반품*교환목록</Text1>
							<RightPointer source={require('../assets/Icons/right_pointer.svg')} />
							<LineDraw />
						</TouchableOpacity>
						<TouchableOpacity>
							<OrderListIcon source={require('../assets/Icons/barosa_account.svg')} />
							<Text1>결제수단*바로사</Text1>
							<RightPointer source={require('../assets/Icons/right_pointer.svg')} />
							<LineDraw />
						</TouchableOpacity>
						<TouchableOpacity>
							<OrderListIcon source={require('../assets/Icons/order_tracking.svg')} />
							<Text1>주문 추적</Text1>
							<RightPointer source={require('../assets/Icons/right_pointer.svg')} />
							<LineDraw />
						</TouchableOpacity>
						<TouchableOpacity>
							<OrderListIcon source={require('../assets/Icons/question.svg')} />
							<Text1>고객선터</Text1>
							<RightPointer source={require('../assets/Icons/right_pointer.svg')} />
							<LineDraw />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate('LogIn');
							}}
						>
							<OrderListIcon source={require('../assets/Icons/login.svg')} />
							<Text1>로그 인 vs 로그아웃</Text1>
							<RightPointer source={require('../assets/Icons/right_pointer.svg')} />
							<LineDraw />
						</TouchableOpacity>
					</WrapperBody>
				</ScrollView>
			</Layout>
		);
	}
}
export default Account;

const WrapperHeader = styled.View`
	justify-content: center;
	align-items: center;
	height: ${normalize(217)};
	width: 100%;
	background: white;
`;
const UserIcon = styled.Image`
	width: 50px;
	height: 50px;
	top: -10px;
	left: 48px;
`;

const UserName = styled.Text`
	font-weight: 500;
	font-size: 20px;
`;

const WrapperBody = styled.View`
	top: 10px;
	height: ${normalize(350)};
	justify-content: space-evenly;
	padding-left: 20px;
`;

const OrderListIcon = styled.Image`
	position: absolute;
	width: 32px;
	height: 32px;
	justify-content: center;
	align-items: center;
	left: 50px;
`;

const Text1 = styled.Text`
	font-size: 20px;
	left: 100px;
`;
const RightPointer = styled.Image`
	position: absolute;
	width: 25px;
	height: 25px;
	right: 10px;
	top: 5px;
`;
const LineDraw1 = styled.View`
	border-bottom-width: 20px;
	border-bottom-color: whitesmoke;
	border-bottom-left-radius: 5px;
	top: -10px;
	left: 10px;
	margin-right: 20px;
`;
const LineDraw = styled.View`
	border-bottom-width: 2px;
	border-bottom-color: whitesmoke;
	top: 30px;
	left: 10px;
	right: 110px;
`;
