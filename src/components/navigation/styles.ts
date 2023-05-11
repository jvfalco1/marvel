import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { ImagePaths } from "../../assets";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background-color: #ed1d24;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ChevronLeft = styled(Animated.Image).attrs({
  source: ImagePaths.chevronLeft,
  resizeMode: "contain",
})`
  width: 18px;
  height: 18px;
`;
