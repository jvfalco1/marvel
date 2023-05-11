import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled(Animated.Image).attrs({
  resizeMode: "cover",
})`
  width: 96px;
  height: 96px;
  border-radius: 20px;

  margin-right: 16px;
`;

export const Name = styled(Animated.Text)`
  font-size: 22px;
`;
