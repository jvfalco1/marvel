import { RouteProp, useRoute } from "@react-navigation/native";
import { NavigationProps } from "../types";

const useDetail = () => {
  const {
    params: { character },
  } = useRoute<RouteProp<NavigationProps, "Details">>();

  return {
    states: {
      character,
    },
  };
};

export default useDetail;
