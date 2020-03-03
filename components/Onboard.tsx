import React, { useState } from "react";
import {
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  AsyncStorage
} from "react-native";

interface Props {
  setFirst(): void;
}
const Onboard = ({ setFirst }) => {
  const [step, setStep] = useState(1);
  var { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity
      onPress={() => {
        if (step >= 4) {
          AsyncStorage.setItem("first", "No");
          setFirst("No");
        }
        setStep(step => step + 1);
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", marginTop: 32 }}>
          {[, 1, 2, 3, 4].map(num => {
            console.log(123, num);
            return (
              <View
                key={num}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 8,
                  backgroundColor: num === step ? "#d4a17d" : "#444",
                  marginLeft: 16,
                  marginRight: 16
                }}
              />
            );
          })}
        </View>
        <Text
          style={{
            marginTop: 36,
            color: "#d4a17d",
            textAlign: "center",
            fontSize: 20,
            lineHeight: 36
          }}
        >
          매일 나에 대한 새로운 질문
        </Text>
        <Text
          style={{
            marginTop: 16,
            color: "#d4a17d",
            textAlign: "center",
            fontSize: 12,
            lineHeight: 20
          }}
        >
          하루에 받는 질문 3개 중 마음에 드는 질문을 선택하세요.{"\n"}
          질문은 하루 한번씩 다시 받기 가능합니다.
        </Text>
        <Image
          source={getImage(step)}
          style={{ width, height: (height / 3) * 2 }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const getImage = step => {
  if (step === 1) {
    return require("../assets/images/onbording1.png");
  }
  if (step === 2) {
    return require("../assets/images/onbording2.png");
  }
  if (step === 3) {
    return require("../assets/images/onbording3.png");
  }
  return require("../assets/images/onbording4.png");
};

export default Onboard;
