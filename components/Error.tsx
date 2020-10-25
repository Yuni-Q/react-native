import React from 'react';
import { View, Text } from 'react-native';
import { StyledBody, StyledBottomButton, StyledImg } from './style/StyledComponent';

const getText = (errorMessage?: string) => {
	if (errorMessage) {
		return '알 수 없는 오류가 발생했습니다.'
	}
	return (
		<>
			<Text>
				인터넷이 불안정해요.
			</Text>
			<Text>
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
		<StyledBody className="justify-content-center">
			<View>
				<StyledImg
					width={errorMessage ? "178" : "114"}
					height={errorMessage ? "178" : "114"}
					source={errorMessage ? '/assets/images/unknownError.png' : '/assets/images/internet.png'}
				/>
			</View>
			<View>
				<View style={{ marginTop: 24, marginBottom: 32 }}>
					{getText(errorMessage)}
				</View>
			</View>
			<StyledBottomButton type="button" width={112}>
				재접속
			</StyledBottomButton>
		</StyledBody>
	);
};

export default Error;
