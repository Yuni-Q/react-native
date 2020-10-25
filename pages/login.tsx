import axios from 'axios';
import React from 'react';
import { Dimensions, AsyncStorage, Image, Text, TouchableOpacity, View, Linking } from 'react-native';
import styled from 'styled-components/native';
import motiLogo from '../assets/images/motiLogo.png';
import { StyledWrapper } from '../components/style/StyledComponent';
import { useContextDispatch } from '../utils/Context';
import MyStorage from '../utils/MyStorage';
import * as Google from 'expo-google-app-auth';
import icApple from '../assets/images/icApple.png'
import Signin from '../models/Signin';



const StyledAppleLoginButton = styled.View`
	background-color: #fff;
	width: 260px;
	height: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	margin: 24px 0 0;
	
	& > Image {
		width: 22px;
		height: 22px;
		background-color: #fff;
	}

	& > View {
		font-size: 14px;
		background-color: #fff;
	}
`;

const Login: React.FC = () => {
	const dispatch = useContextDispatch();
	const { width, height } = Dimensions.get('window');
	const login = async () => {
		try {
			const googleData = await Google.logInAsync({
				clientId: '507319569465-1flqlee8i4s4c21q3vldbhccdldlffpo.apps.googleusercontent.com',
				scopes: ['profile', 'email'],
			});
			if (googleData.type === 'success') {
				/* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
				const {accessToken, refreshToken} = await Signin.postSignin({ accessToken: googleData.accessToken, body: {snsType: 'google'}})
				await MyStorage.setKey('accessToken', accessToken);
				await MyStorage.setKey('refreshToken', refreshToken);
				dispatch({
          type: 'SET_TOKEN',
          accessToken,
          refreshToken,
        });
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<StyledWrapper>
			<View>
				<Image source={motiLogo} style={{ width: width * 0.5 }} resizeMode="contain" />
			</View>
			<View style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
				<TouchableOpacity
					onPress={() => {
						login();
					}}
					style={{
						backgroundColor: '#fff',
						width: width - 16 - 16,
						height: 44,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 20,
						marginTop: 24,
					}}
				>
					<View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginRight: 8 }}>
						<Image source={icApple} style={{ width: 22, height: 22 }} />
						<Text style={{ fontSize: 14, color: '#f1dbcd' }}>Sign in with google</Text>
					</View>
				</TouchableOpacity>
				<View style={{ marginTop: 24 }}>
					<Text style={{ color: '#f1dbcd' }} >By creating an account you are agreeing to</Text>
				</View>
				<TouchableOpacity style={{ marginTop: 8 }} onPress={() => {
					Linking.openURL("https://www.notion.so/MOTI-35d01dd331bb4aa0915c33d28d60b63c")
				}}>
					<Text style={{ color: '#f1dbcd' }} >
						MOTI&apos;s User Agreement
				</Text>
				</TouchableOpacity>
			</View>
			<View>
				<Text style={{ color: '#f1dbcd' }}>
					Make Own True Identity
			</Text>
			</View>
		</StyledWrapper>
	);
};

export default Login;
