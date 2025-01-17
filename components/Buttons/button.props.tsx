import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  title?: string;
  onPress: () => void;
  image?: string;
  containerClassName?: StyleProp<ViewStyle>;
  textClassName?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

export default ButtonProps;
