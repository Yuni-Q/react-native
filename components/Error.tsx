import React from 'react';
import { View, Text } from 'react-native';
import { StyledBody, StyledBottomButton, StyledImg } from './style/StyledComponent';
import unknownError from '../assets/images/unknownError.png'
import internet from '../assets/images/internet.png'

const getText = (errorMessage?: string) => {
	if (errorMessage) {
		return <Text style={{color: '#f1dbcd'}}>알 수 없는 오류가 발생했습니다.</Text>
	}
	return (
		<>
			<Text style={{color: '#f1dbcd'}}>
				인터넷이 불안정해요.
			</Text>
			<Text style={{color: '#f1dbcd'}}>
				확인 후 재접속 해주세요.
		</Text>
		</>
	)

}

interface Props {
	errorMessage?: string;
}

const Error: React.FC<Props> = ({ errorMessage }) => {

	// const onClick = () => router.reload();

	return (
		<StyledBody>
			<View>
				<StyledImg
					style={{
						width: errorMessage ? 178 : 114,
						height: errorMessage ? 178 : 114
					}}
					source={errorMessage ? unknownError : internet}
				/>
			</View>
			<View>
				<View style={{ marginTop: 24, marginBottom: 32 }}>
					{getText(errorMessage)}
				</View>
			</View>
			<StyledBottomButton type="button" style={{width: 112}} title="재접속" />
		</StyledBody>
	);
};

export default Error;
