import React, { useState } from 'react';
import { Image, View, Dimensions, TouchableOpacity, Text, AsyncStorage } from 'react-native';

interface Props {
  setFirst(): void;
}
const Onboard = ({ setFirst }) => {
  const [step, setStep] = useState(1);
  var { width, height } = Dimensions.get('window');

  return (
    <TouchableOpacity
      onPress={() => {
        if (step >= 4) {
          AsyncStorage.setItem('first', 'No').then(() => setFirst('No'));
        }
        setStep((step) => step + 1);
      }}
    >
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 32 }}>
          {[1, 2, 3, 4].map((num) => {
            return (
              <View
                key={num}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 8,
                  backgroundColor: num === step ? '#d4a17d' : '#444',
                  marginLeft: 16,
                  marginRight: 16,
                }}
              />
            );
          })}
        </View>
        <Text
          style={{
            marginTop: 36,
            color: '#d4a17d',
            textAlign: 'center',
            fontSize: 20,
            lineHeight: 36,
          }}
        >
          {getTitle(step)}
        </Text>
        <Text
          style={{
            marginTop: 16,
            color: '#d4a17d',
            textAlign: 'center',
            fontSize: 12,
            lineHeight: 20,
          }}
        >
          {getText(step)}
        </Text>
        <Image source={getImage(step)} style={{ width, height: (height / 3) * 2 }} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

const getTitle = (step) => {
  if (step === 1) {
    return '매일 나에 대한 새로운 질문';
  }
  if (step === 2) {
    return '나를 기록하기';
  }
  if (step === 3) {
    return '나만의 드림캐쳐 만들기';
  }
  return '리마인더';
};

const getText = (step) => {
  if (step === 1) {
    return '하루에 받는 질문 3개 중 마음에 드는 질문을 선택하세요.\n질문은 하루 한번씩 다시 받기 가능합니다.';
  }
  if (step === 2) {
    return '사진, 글 등으로 답할 수 있는 질문에 대답하여\n나를 기록하는 시간을 가져보세요.';
  }
  if (step === 3) {
    return '질문에 답변해 파츠를 하나씩 모으세요.\n일주일 간의 기록을 통해 나만의 드림캐쳐가 완성됩니다.';
  }
  return '앨범에서 지금까지 모은 드림캐처와\n기록을 다시 확인할 수 있어요.';
};

const getImage = (step) => {
  if (step === 1) {
    return require('../assets/images/onbording1.png');
  }
  if (step === 2) {
    return require('../assets/images/onbording2.png');
  }
  if (step === 3) {
    return require('../assets/images/onbording3.png');
  }
  return require('../assets/images/onbording4.png');
};

export default Onboard;
