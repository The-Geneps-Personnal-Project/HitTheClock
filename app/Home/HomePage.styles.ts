import { StyleSheet } from "react-native";

import SpotifyButtonStyles from "../../components/Buttons/SpotifyButton.styles";

export default StyleSheet.create({
  ...SpotifyButtonStyles,
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
