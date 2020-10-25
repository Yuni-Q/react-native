import React from 'react';
import Answer from '../models/Answer';
import Parts from './Parts';
import { StyledBody, StyledCardFrame, StyledCardFrameWrapper } from './style/StyledComponent';
import imgCardframe from '../assets/images/imgCardframe.png';
import { ImageBackground, Text } from 'react-native';

interface Props {
	answers: Answer[];
}

const AnswerComponent: React.FC<Props> = ({ answers }) => {
	return (
		<StyledBody>
			{/* <Link href="/answers/list/[id]" as={`/answers/list/${answers[0].id}`}> */}
				{/* <a> */}
				<StyledCardFrameWrapper style={{backgroundColor:'white', width: '100%', height: "100%" }}>
					<StyledCardFrame resizeMode="contain" style={{width: '100%', height: '100%', position: 'absolute' }} source={imgCardframe} />
					<Parts answers={answers} />
				</StyledCardFrameWrapper>
				{/* </a> */}
			
			{/* </Link> */}
		</StyledBody>
	);
};

export default AnswerComponent;
