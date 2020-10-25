import React from 'react';
import { View, Text } from 'react-native';
import { StyledBody, StyledCardFrameWrapper, StyledImg } from './style/StyledComponent';
import imgQuestion from '../assets/images/imgQuestion.png'

const Motivation: React.FC = () => {

	return (
		<StyledBody>
			{/* <Link href="/question" > */}
				{/* <a> */}
					<StyledCardFrameWrapper>
						<View style={{marginTop: 32}}><Text style={{color: '#fff'}}>Motivation</Text></View>
						<View style={{margin: 32}}>
						<StyledImg style={{ width: 202, height: 202}} source={imgQuestion} />
						</View>
						<View style={{marginLeft: 32, marginRight: 32}}>
							<Text style={{marginTop: 32, color: '#fff', textAlign: 'center'}}>
								Today’s
							</Text>
							<Text style={{marginTop: 8,color: '#fff',  textAlign: 'center'}}>
								your
							</Text>
							<Text style={{marginTop: 8, marginBottom: 32, color: '#fff',  textAlign: 'center'}}>
								Question
							</Text>
						</View>
					</StyledCardFrameWrapper>
				{/* </a> */}
			{/* // </Link> */}
		</StyledBody>
	);
};

export default Motivation;

