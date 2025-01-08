import { Pressable, Text, Image } from "react-native";

import { ButtonProps } from "./button.props";
import styles from "./button.styles";

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  onPress,
  image,
  containerClassName,
  textClassName,
  ...rest
}) => {
  function renderImage() {
    if (image) {
      return <Image source={{ uri: image }} style={styles.image} />;
    }
    return null;
  }

  return (
    <Pressable style={[containerClassName]} onPress={onPress}>
      {renderImage()}
      {rest.children}
      <Text style={[styles.defaultText, textClassName]}>{title}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
