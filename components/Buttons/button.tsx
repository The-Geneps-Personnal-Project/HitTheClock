import { useState } from "react";
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
  const [isPressed, setIsPressed] = useState(false);

  function renderImage() {
    if (image) {
      return <Image source={{ uri: image }} style={styles.image} />;
    }
    return null;
  }

  return (
    <Pressable
      style={[containerClassName, isPressed && { opacity: 0.5 }]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      {renderImage()}
      {rest.children}
      <Text style={[styles.defaultText, textClassName]}>{title}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
