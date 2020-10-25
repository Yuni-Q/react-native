import styled from 'styled-components/native';

const StyledView = styled.View``;

export default StyledView;

export const StyledWrapper = styled.SafeAreaView`
    flex-grow: 1;
    background-color: #1a1616;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    justify-content: space-between;
    color: #f1dbcd;
`;

export const StyeldForm = styled.View`
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyldHeader = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    position: relative;
    width: 100%;
    flex-shrink: 0;
`;

export const StyledTitle = styled.View`
    flex: 1;
    color: rgb(241, 219, 205);
    text-align: center;
`;

export const StyledLeftIcon = styled.Image`
    position: absolute; 
    margin: 0 12px; 
    top: 24px;
    left: 0px;
`;

export const StyledRightIcon = styled.Image`
    position: absolute; 
    margin: 0 12px; 
    top: 24px;
    right: 0px;
`;


export const StyledSubTitle = styled.View`
    margin: 8px 36px 56px;
    font-size: 24px;
`;

export const StyledCardFrameWrapper = styled.View`
    max-width: 287px;
    /* width: calc(100vw - 64px); */
    /* box-shadow: 0 0 10px 0 rgb(231, 188, 158); */
    border-radius: 11px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledCardFrame = styled.Image`
    /* width: calc(100% - 32px); */
    /* width: 200px; */
    margin: 12px;
`;

export const StyledTextAreaWrapper = styled.TextInput<{imgSrc: string;}>`
    text-align: center;
    width: 100%;
    height: 100%;
    margin: ${({imgSrc}) => imgSrc ? '8px 0 36px 0' : ' 36px 0;'};
    flex: 1;
    border: none;
    padding: ${({imgSrc}) => imgSrc ? '0' : '60% 0'};
    resize: none;
`;

export const StyledBottomButton = styled.Button<{width: number}>`
    display: block;
    margin: 24px 0 36px;
    width: ${({width}) => width}px;
    height: 40px;
    background-color: rgb(222, 226, 230);
    color: rgb(212, 161, 125);
    border-radius: 30px;
    /* box-shadow: 0 0 10px 0 rgb(252, 222, 227); */
`;

export const StyledBody = styled.View`
    text-align: center;
    flex: 1;
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    align-items: center;
`

export const StyledImg = styled.Image`
    margin: 0 auto;
`;

export const StyledFileInputButton = styled.View`
& > label {
    margin: 0 0 148px 0;
    width: 168px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #fff;
    color: rgb(212, 161, 125);
    /* box-shadow: 0 0 10px 0 rgb(252, 222, 227); */
}
& > input {
    display: none;
}
`;

export const StyldContentComponent = styled.View`
    /* background: initial; */
    z-index: 10;
    /* width: calc(100% - 64px); */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    position: absolute;
    text-align: center;
    height: 100%;
`;
export const StyledFileInputImage = styled.View`
/* background: initial; */
& > label {
    /* background: initial; */
}
& > input {
    display: none;
}
`;

export const StyledDotWrapper = styled.View`
    display: flex; 
    margin: 24px 24px 16px;
    justify-content: center;
`;

export const StyledDotButton = styled.Button<{active: boolean}>`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${({active}) => active ? '#d4a17d' : 'rgb(68, 68, 68)'};
    margin: 8px 8px;
    font-size: 0;
    display: block;
`;

export const StyledPart = styled.Image`
    width: 80%;
    height: 100%;
    /* background: initial; */
    z-index: 100;
    position: absolute;
    /* top: 50%;
    left: 50%; */
`;

// export const StyledCarousel = styled(Carousel)`
// 	flex: 1;
// 	height: 100%;
// 	.slider-frame {
// 		ul.slider-list {
// 			height: 100% !important;
// 			li.slider-slide {
// 				height: 100% !important;
// 			}
// 		}
// 	}
// 	.slider-control-bottomcenter {
// 		display: none;
// 	}
// `;

export const StyledFooter = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    flex-shrink: 0;
    align-items: center;
`;

export const StyledHr = styled.View`
	/* width: calc(100% - 32px); */
	margin: 26px 16px 0;
	border: 1px solid rgb(255, 223, 223);
`;

export const StyledRow = styled.View`
	/* width: calc(100% - 32px); */
	display: flex;
	justify-content: space-between;
	height: 52px;
	align-content: center;
	View {
		display: flex;
		align-items: center;
	}
`;

export const StyledInput = styled.TextInput`
    display: flex;
    align-items: center;
    border: none;
    text-align: end;
`;