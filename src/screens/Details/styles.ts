import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled.View``;

export const Content = styled.View`
  margin-top: 34px;
`;

export const Avatar = styled(Animated.Image).attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 450px;
`;

export const CardTitle = styled(Animated.Text)`
  color: white;
  text-align: center;
  font-size: 18px;
  margin-bottom: 14px;
`;

export const Name = styled(Animated.Text)`
  color: black;
  font-size: 22px;
  margin-top: 14px;
  margin-left: 16px;
`;
export const Description = styled(Animated.Text)`
  color: white;
  font-size: 32px;
  text-align: center;
`;

export const Card = styled.View`
  width: 45%;
  border-radius: 12px;
  padding: 16px;
  background-color: #ed1d24;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 16px;
`;
