import React, { useState } from 'react';
import { View,Text } from 'react-native';
import Answer from '../models/Answer';
import AnswerComponent from './AnswerComponent';
import { StyledDotButton, StyledDotWrapper, StyledFooter, StyledImg, StyledWrapper } from './style/StyledComponent';
import Motivation from './Motivation';
import dayjs from 'dayjs';
import normal from '../assets/images/normal.png'
import icProfileToucharea from '../assets/images/icProfileToucharea.png'

interface Props {
	answers: Answer[];
	isTodayAnswer: boolean;
}

const Main: React.FC<Props> = ({answers, isTodayAnswer}) => {
	const [step, setStep] = useState(1);
	const [errorMessage] = useState('');

	const onChageStep = (newStep: number) => {
		setStep(newStep)
	}

	// if (
	// 	// !Cookie.getOnboard() &&
	// 	 step <= 4) {
	// 	return <Onboard step={step} onChageStep={onChageStep} />;
	// }
	
	return (
		<StyledWrapper>
			<MainDot answers={answers} />
			{/* {errorMessage && <Error errorMessage={errorMessage} />} */}
			{!errorMessage && !isTodayAnswer && <Motivation />}
			{!errorMessage && !!isTodayAnswer && <AnswerComponent answers={answers} />}
			<StyledFooter>
				<View>
					{/* <Link href="/album">
						<a> */}
							<StyledImg source={normal} style={{width: 24, height: 24}} />
						{/* </a>
					</Link> */}
				</View>
				<View>
					<Text style={{color: '#fff'}}>{dayjs().format('YYYY. MM. DD')}</Text>
				</View>
				<View>
					{/* <Link href="/my"> */}
						{/* <a> */}
							<StyledImg source={icProfileToucharea} style={{width: 24, height: 24}} />
						{/* </a> */}
					{/* </Link> */}
				</View>
			</StyledFooter>
		</StyledWrapper>
	);
};

export default Main;

interface MainDotProps {
	answers: Answer[];
}

const MainDot: React.FC<MainDotProps> = ({answers}) => {
	return (
		<StyledDotWrapper>
			{[1, 2, 3, 4, 5, 6].map((num, index) => {
				return (
					<View style={{margin: 16}} key={num}>
						<Text style={{color: '#fff'}}>{num}th</Text>
						<StyledDotButton
							type="button"
							key={num}
							active={!!answers[index]}
						/>
					</View>
				);
			})}
		</StyledDotWrapper>
	)
}