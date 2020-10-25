import React from 'react';
import { ImageBackground, Image } from 'react-native';
import Answer from '../models/Answer';
import { StyledPart } from './style/StyledComponent';


interface Props {
	answers: Answer[];
}

const Parts: React.FC<Props> = ({answers}) => {
	return (
		<>
			{answers.map((value, index) => {
				if(!value?.file?.cardPngUrl) {
					return null;
				}
				return (
					<StyledPart
						resizeMode="contain"
						key={value.id}
						source={{uri: value?.file?.cardPngUrl}}
					/>
				);
			})}
		</>
	)
}

export default Parts;