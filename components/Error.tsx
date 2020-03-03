import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

interface Props {
  internet?: boolean;
}

const Error: React.FC<Props> = ({ internet }) => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        source={
          internet
            ? require("../assets/images/internet.png")
            : require("../assets/images/unknownError.png")
        }
        style={
          internet ? { width: 114, height: 114 } : { width: 178, height: 178 }
        }
      />
      <Text
        style={{
          color: "#f1dbcd",
          marginTop: 16,
          fontSize: 14,
          lineHeight: 26,
          textAlign: "center"
        }}
      >
        {internet
          ? "인터넷이 불안정해요.\n확인 후 재접속 해주세요."
          : "알 수 없는 오류가 발생했습니다."}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          width: 112,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          marginTop: 32,
          shadowColor: "#fcdee3",
          shadowOpacity: 10
        }}
      >
        <Text style={{ color: "#d4a17d" }}>재접속</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;
