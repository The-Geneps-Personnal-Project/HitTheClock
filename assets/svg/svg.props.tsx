import { SvgProps } from "react-native-svg";

export type IconProps = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
};

export default IconProps;
