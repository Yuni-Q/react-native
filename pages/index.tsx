import React, { useEffect, useState } from 'react';
import MyStorage from '../utils/MyStorage';
import Main from '../components/Main';
import Answer from '../models/Answer';
import { AsyncStorage, ImageBackground, SafeAreaView, Text } from 'react-native';


// interface Props {
// 	answers: Answer[];
// 	isTodayAnswer: boolean;
// }

const Index: React.FC = () => {	
	const [answers, setAnswers] = useState([])
	const [isTodayAnswer, setIsTodayAnswer] = useState(false)
	const loadAnswersWeek = async() => {
		try {
			const accessToken = await MyStorage.getKey('accessToken');
			const {today, answers} = await Answer.getAnswersWeek({token: accessToken})
			setAnswers(answers);
			const isTodayAnswer = answers.filter((answer) => {
				return answer.date === today;
			}).length > 0;
			setIsTodayAnswer(isTodayAnswer);
		} catch(error) {
			console.log('Index useEffect error', error);
		}		
	}
	useEffect(() => {
		loadAnswersWeek();		
	}, [])
	return (
		// <SafeAreaView><Text>H1</Text></SafeAreaView>
		<Main
			answers={answers}
			isTodayAnswer={isTodayAnswer}
		/>
	);
};

// interface ServerSideProps {
// 	props: {
// 		answers: Answer[],
// 		isTodayAnswer: boolean,
// 	}
// }

// export const getServerSideProps = async ({req, res}: PageContext): Promise<ServerSideProps | void> => {
// 	const props = {
// 		answers: [] as Answer[],
// 		isTodayAnswer: false,
// 		isOnboard: false,
// 	};
// 	try {
// 		const token = await Cookie.getToken(req);
// 		if(!token) {
// 			return redirectLogin(res);
// 		}

// 		const user = await User.getUsersMy({token,req})
// 		if(!user.id) {
// 			return redirectLogin(res);
// 		}
		
// 		const {today, answers} = await Answer.getAnswersWeek({token,req})
// 		props.answers = answers;

// 		const isTodayAnswer = answers.filter((answer) => {
// 			return answer.date === today;
// 		}).length > 0;
// 		props.isTodayAnswer = isTodayAnswer;

// 		return {
// 			props,
// 		};
// 	} catch (error) {
// 		consoleError('error', error);
// 		return redirectLogin(res);
// 	}
// };

export default Index;
